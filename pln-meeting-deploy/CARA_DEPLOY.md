# Sudah 100% siap — tinggal deploy

Kredensial LiveKit sudah tersimpan aman di project Netlify "pln-meeting"
(bukan di dalam file ini). File di folder ini sudah dikonfigurasi lengkap,
tidak perlu edit apa pun.

## Opsi A — Kamu punya komputer + Node.js terinstall
1. Extract/download folder ini ke komputer.
2. Buka Terminal (Mac) / Command Prompt (Windows) di folder ini.
3. Paste command ini, tekan Enter:

```
npx -y @netlify/mcp@latest --site-id ee50f9eb-501b-46fc-9d9d-5105013ed1f2 --proxy-path "https://netlify-mcp.netlify.app/proxy/eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..sxSgfIvAWZwxL701.vIXZpqYj8aScBSp-YHrvs3NQphO3qfdPDXz980sAnrqJI8Ab8TiApXJkVM1aUBsqDYoIcnzdqCqoSUf9m1-aoJV1K4j9HPpeLEy9CUI1ddm750W6cd97j8rAXzmET1TFp7sa_BpTYRaA6JdV8Fzp4slfA7wyarsS9jIQ2VKzrSy-QPq9Xfqx1Uuds7cXfwuDfh2xYbxz-PnPUZBnmNPzWI3nQ2llOWIbyFD9lHBovMrpfa3dHALte3QAzXuMbi6pxijtNDdlCMLr3emSfG4Rn7ny4VEalb3m9LWDEr8e0tLUXoSWH5RMo5YJvOhEQGhvgJnIhffeQykXg_oHopj5OsosZW39uQ89hJnxKNmC9hgbYRuju-rHwULLqhVcc7phLDCQBrbB.IOmIVmK90Zi2N9PWno9zDQ"
```

Tunggu sampai selesai (1-2 menit). Setelah itu meeting kamu live di:
**https://pln-meeting.netlify.app**

Catatan: link proxy di atas mungkin kedaluwarsa. Kalau muncul error,
bilang ke saya lagi, saya generate ulang linknya.

## Opsi B — Pakai Claude Code (aplikasi desktop Claude)
Buka percakapan ini lagi di Claude Code / Claude Desktop, minta saya
"lanjutkan deploy pln-meeting" — di sana jaringan saya tidak dibatasi
seperti di chat ini, jadi saya bisa langsung jalankan deploy-nya sendiri
tanpa kamu ketik command apa pun.

## Setelah live
Buka https://pln-meeting.netlify.app di 2 device berbeda untuk tes:
- Klik "Buat meeting baru" di satu device → salin link.
- Buka link itu di device lain → isi nama → masuk.
