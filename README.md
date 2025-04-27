# 🥤 Vending Machine App

Simulasi aplikasi mesin penjual otomatis (Vending Machine) menggunakan **Next.js 15** dan **React 19**.  
Aplikasi ini memungkinkan pengguna untuk memasukkan uang, membeli produk, dan melihat riwayat transaksi.

---

## 🚀 Teknologi yang Digunakan

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup Validation](https://github.com/jquense/yup)
- [json-server](https://github.com/typicode/json-server) (Mock API)

---

## 📦 Fitur Aplikasi

- **Tampilan Mesin Vending**: Menampilkan 5 produk makanan/minuman dengan gambar, nama, harga, stok.
- **Simulasi Uang Masuk**: Pecahan Rp2.000, Rp5.000, Rp10.000, Rp20.000, Rp50.000.
- **Pembelian Produk**:
  - Validasi stok tersedia dan uang cukup.
  - Update stok setelah pembelian.
  - Hitung uang kembalian.
- **Riwayat Transaksi**: Menampilkan history semua pembelian.
- **Admin Panel (Opsional)**: CRUD produk dengan validasi form (menggunakan react-hook-form + yup).

---

## 🛠 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/vending-machine.git

cd vending-machine
```

### 2. Install Depedencies

```bash
npm install --legacy-peer-deps
```

### 3. Run Application (Both FE and BE)

```bash
npm run dev
```

- **Open Link Below**
- [localhost:3001](http://localhost:3001/)
