const { AccessToken } = require("livekit-server-sdk");

exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const room = (params.room || "").trim();
  const identity = (params.identity || "").trim();

  if (!room || !identity) {
    return {
      statusCode: 400,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Parameter 'room' dan 'identity' wajib diisi." }),
    };
  }

  const at = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    { identity, ttl: "2h" }
  );

  at.addGrant({
    room,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
  });

  const token = await at.toJwt();

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, room, identity }),
  };
};
