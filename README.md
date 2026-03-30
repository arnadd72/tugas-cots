<div align="center">
  <br />

  <h1>LAPORAN PRAKTIKUM <br>
  APLIKASI BERBASIS PLATFORM
  </h1>

  <br />

  <h3>TUGAS COTS-1<br>
  WEB MANAJEMEN PRODUK KOMPUTER "SYARIAH KOMPUTER"
  </h3>

  <br />

  <img width="512" height="512" alt="telyu" src="https://github.com/user-attachments/assets/22ae9b17-5e73-48a6-b5dd-281e6c70613e" />



  <br />
  <br />
  <br />

  <h3>Disusun Oleh :</h3>

  <p>
    <strong>rnanda Setya Nosa Putra</strong><br>
    <strong>2311102180</strong><br>
    <strong>S1 IF-11-04</strong>
  </p>

  <br />

  <h3>Dosen Pengampu :</h3>

  <p>
    <strong>Cahyo Prihantoro, S.Kom., M.Eng.</strong>
  </p>
  
  <br />
  <br />
    <h4>Asisten Praktikum :</h4>
    <strong>Apri Pandu Wicaksono </strong> <br>
    <strong>Rangga Pradarrell Fathi</strong>
  <br />

  <h3>LABORATORIUM HIGH PERFORMANCE
 <br>FAKULTAS INFORMATIKA <br>UNIVERSITAS TELKOM PURWOKERTO <br>2026</h3>
</div>

<hr>


# Dasar Praktikum
Buatlah sebuah aplikasi web sederhana yang memiliki minimal 3 (tiga) halaman fungsional yang mencakup Form, Halaman Data (Tabel), dan fungsionalitas CRUD (Create, Read, Update, Delete).

A. Spesifikasi Teknis Pengembangan (Wajib):

1. Aplikasi harus menggunakan Framework Bootstrap sebagai styling.
2. Aplikasi harus dibangun menggunakan Framework CodeIgniter (CI) atau NodeJS (express, fastify, atau berbasis library lain nya).
3. Struktur Halaman: Minimal terdiri dari 3 halaman utama:
    - Halaman Form (Input Data)
    - Halaman Tabel / Tampil Data
    - Fungsionalitas CRUD yang berjalan dengan baik.
4. Wajib menggunakan jQuery dan jQuery plugin.
5. Data yang ditampilkan pada tabel wajib menggunakan format data JSON, yang diimplementasikan menggunakan datatable Jquery.


# Dasar Teori
## 1. Node.js
Node.js adalah runtime environment JavaScript yang berjalan di sisi server, dibangun di atas V8 JavaScript Engine milik Google Chrome. Node.js memungkinkan JavaScript yang sebelumnya hanya berjalan di browser, kini dapat digunakan untuk membangun aplikasi server-side. Node.js menggunakan model non-blocking I/O dan event-driven architecture, sehingga mampu menangani banyak koneksi secara bersamaan dengan performa tinggi dan efisiensi memori yang baik. Node.js banyak digunakan untuk membangun aplikasi web, REST API, dan layanan real-time.

## 2. Express.js
Express.js adalah framework web minimalis dan fleksibel yang berjalan di atas Node.js. Express menyederhanakan proses pembuatan aplikasi web dan API dengan menyediakan berbagai fitur seperti routing, middleware, dan pengelolaan request-response HTTP. Dengan Express, developer dapat mendefinisikan route untuk berbagai metode HTTP (GET, POST, PUT, DELETE) secara sederhana dan terstruktur. Express merupakan framework paling populer di ekosistem Node.js dan menjadi fondasi dari banyak framework Node.js lainnya.

## 3. Bootstrap
Bootstrap adalah framework CSS open-source yang dikembangkan oleh Twitter, digunakan untuk membangun tampilan antarmuka web yang responsif dan konsisten. Bootstrap menyediakan koleksi komponen UI siap pakai seperti grid system, form, button, navbar, dan utility classes yang memudahkan proses styling tanpa harus menulis CSS dari nol. Bootstrap menggunakan sistem grid 12 kolom berbasis flexbox yang memungkinkan layout menyesuaikan diri secara otomatis pada berbagai ukuran layar, mulai dari mobile hingga desktop. Pada aplikasi ini digunakan Bootstrap versi 5.3.2.

## 4. jQuery
jQuery adalah library JavaScript yang dirancang untuk menyederhanakan manipulasi DOM, penanganan event, animasi, dan komunikasi AJAX. Dengan sintaks yang ringkas, jQuery memungkinkan developer melakukan operasi yang kompleks dengan kode yang jauh lebih singkat dibandingkan JavaScript vanilla. jQuery menjadi salah satu library JavaScript paling banyak digunakan di dunia dan menjadi fondasi bagi banyak plugin JavaScript lainnya. Pada aplikasi ini, jQuery digunakan untuk melakukan operasi AJAX dalam komunikasi antara frontend dan backend API.

## 5. jQuery DataTable
jQuery DataTables adalah plugin jQuery yang powerful untuk menampilkan data dalam bentuk tabel interaktif. DataTables menyediakan fitur-fitur canggih secara otomatis seperti pencarian data real-time, pengurutan kolom, pagination, dan pengaturan jumlah data yang ditampilkan per halaman. DataTables mendukung berbagai sumber data termasuk array JavaScript, dokumen HTML, dan format JSON yang diambil dari server melalui AJAX. Pada aplikasi ini, DataTables dikonfigurasi untuk mengambil data langsung dari endpoint API yang mengembalikan response dalam format JSON.

## 6. JSON (JavaScript Object Notation)
JSON adalah format pertukaran data yang ringan dan mudah dibaca oleh manusia maupun mesin. JSON menggunakan struktur pasangan key-value dan mendukung tipe data seperti string, number, boolean, array, dan object. JSON telah menjadi standar de facto untuk pertukaran data dalam aplikasi web modern, terutama dalam komunikasi antara client dan server melalui REST API. Pada aplikasi ini, JSON digunakan sebagai media penyimpanan data produk dalam file products.json, sekaligus sebagai format response dari seluruh endpoint API yang dikonsumsi oleh jQuery DataTables.

## 7. REST API
REST (Representational State Transfer) API adalah arsitektur antarmuka pemrograman aplikasi yang menggunakan protokol HTTP sebagai media komunikasi. REST API menggunakan metode HTTP standar untuk mendefinisikan operasi terhadap data, yaitu GET untuk mengambil data, POST untuk membuat data baru, PUT untuk memperbarui data, dan DELETE untuk menghapus data. Prinsip ini selaras dengan konsep CRUD (Create, Read, Update, Delete) yang menjadi dasar pengelolaan data pada aplikasi web. Pada aplikasi ini, seluruh operasi CRUD dilakukan melalui endpoint REST API yang dibangun menggunakan Express.js.

# PENGERJAAN
## 1.1 Penggunaan Framework Bootstrap sebagai Styling
Bootstrap 5.3.2 digunakan sebagai framework CSS utama di seluruh halaman aplikasi. Bootstrap menyediakan sistem grid responsif, komponen UI siap pakai (form, button, table), dan utility classes untuk menyusun layout antarmuka.

Kode Program - CDN Bootstrap
```
<!-- Bootstrap 5.3.2 CSS -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
      rel="stylesheet"/>
 
<!-- Bootstrap 5.3.2 JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js">
</script>
```
Kode Program - Penggunaan Class Bootstrap
```
<div class="container-fluid px-4 py-4">    <!-- Container responsif -->
  <div class="table-responsive">            <!-- Tabel responsif -->
    <div class="d-flex gap-2">              <!-- Flexbox Bootstrap -->
      <div class="row g-3 mb-4">            <!-- Grid system -->
        <div class="col-7"> ... </div>      <!-- 12-kolom grid -->
```
Tampilan halaman utama (localhost:3000) & layout menggunakan komponen Bootstrap
<p align="center"><img width="1919" height="967" alt="image" src="https://github.com/user-attachments/assets/2561eff8-1638-4f5e-9a5d-589a3fe9b673" />
</p>

## 1.2 Framework NodeJS (Express)
Aplikasi dibangun menggunakan NodeJS sebagai runtime JavaScript sisi server dengan Express.js sebagai web framework. Express menangani routing halaman HTML dan seluruh endpoint REST API untuk operasi CRUD.

Kode Program - Dependencies (package.json)
```
{
  "name": "sportzone-app",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```
Kode Program - Inisialisasi Express (app.js)
```
const express = require('express');
const app = express();
const PORT = 3000;
 
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(PORT, () => {
  console.log(`✅ SportZone berjalan di http://localhost:${PORT}`);
});
```
Tampilan PORT pada terminal
<p align="center"><img width="760" height="178" alt="image" src="https://github.com/user-attachments/assets/047fe538-5933-4934-8983-a62654169cd1" /></p>

## 1.3 Struktur 3 Halaman Fungsional + Fungsionalitas CRUD
Aplikasi memiliki 4 halaman fungsional yang dapat diakses secara independen. Fungsionalitas CRUD berjalan melalui REST API Express dengan penyimpanan data ke file products.json.

| No | Halaman        | URL         | Fungsi                                   |
|----|----------------|------------|-------------------------------------------|
| 1  | Halaman Form   | `/tambah`  | Form input data produk baru (CREATE)      |
| 2  | Halaman Tabel  | `/`        | Tampil semua data produk (READ)           |
| 3  | Halaman Detail | `/detail/:id` | Detail satu produk (READ)              |
| 4  | Halaman Edit   | `/edit/:id`   | Ubah data produk (UPDATE/DELETE)       |

Kode Program - Route Halaman & Enpoint CRUD (app.js)
```
// ── Route Halaman ──────────────────────────────────
app.get('/',           ...) // Halaman Tabel
app.get('/tambah',     ...) // Halaman Form Tambah
app.get('/detail/:id', ...) // Halaman Detail
app.get('/edit/:id',   ...) // Halaman Form Edit
 
// ── API CRUD ────────────────────────────────────────
app.post('/api/products',        ...) // CREATE
app.get('/api/products',         ...) // READ semua
app.get('/api/products/:id',     ...) // READ satu
app.put('/api/products/:id',     ...) // UPDATE
app.delete('/api/products/:id',  ...) // DELETE
```
### Halaman Form Tambah Produk
<p align="center"><img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/b2299a39-ac6a-43a8-ba97-35276465aa02" /></p>

### Halaman Tabel Data Produk
<p align="center"><img width="1917" height="902" alt="image" src="https://github.com/user-attachments/assets/739c76e4-3026-4778-b43f-5a4ec1ce11f2" /></p>

### Halaman Detail & Edit Data
<p align="center"><img width="1918" height="903" alt="image" src="https://github.com/user-attachments/assets/9971f166-24a0-4a31-b4c0-3665e9f8e5e9" /></p>
<p align="center"><img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/3581073c-2af8-44f5-91c5-4dd0c5fa375c" /></p>

### Hapus Data
<p align="center"><img width="1916" height="906" alt="image" src="https://github.com/user-attachments/assets/5c97aea1-5312-49e7-a900-a5b3420f5808" /></p>

### Hasil Operasi CRUD (Tambah, Edit, dan Hapus Data)

- Tambah Data
<p align="center"><img width="1918" height="909" alt="image" src="https://github.com/user-attachments/assets/859ce593-a126-472b-ae91-380a9b0d3c20" /></p>
<p align="center"><img width="1352" height="585" alt="image" src="https://github.com/user-attachments/assets/a014c7ad-bad6-498c-a974-40f422d229ab" /></p>

- Edit Data
<p align="center"><img width="1917" height="908" alt="image" src="https://github.com/user-attachments/assets/c7b228fa-a354-4080-a727-8177759ce5be" /></p>
<p align="center"><img width="1360" height="574" alt="image" src="https://github.com/user-attachments/assets/cbefed74-8df6-44c3-8ad8-a4fef3820f30" /></p>

- Hapus Data
<p align="center"><img width="1919" height="908" alt="image" src="https://github.com/user-attachments/assets/35ab054f-f58c-458a-80fc-1d5604cd4e25" /></p>
<p align="center"><img width="1915" height="902" alt="image" src="https://github.com/user-attachments/assets/fbe4267a-b600-43d0-9a91-5d507bb9b9ff" /></p>


## 1.4 Penggunaan jQuery dan jQuery Plugin
jQuery 3.7.1 digunakan untuk manipulasi DOM dan komunikasi AJAX ke seluruh endpoint API tanpa reload halaman. jQuery DataTables 1.10.21 digunakan sebagai plugin tabel interaktif yang menyediakan fitur search, sorting, dan pagination secara otomatis.

Kode Program - CDN jQuery & Plugin DataTable
```
<!-- jQuery 3.7.1 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
 
<!-- jQuery DataTable Plugin -->
<script src=".../datatables/1.10.21/js/jquery.dataTables.min.js"></script>
<script src=".../datatables/1.10.21/js/dataTables.bootstrap5.min.js"></script>
```
Kode Program - jQuery AJAX untuk Operasi DELETE
```
$.ajax({
  url: `/api/products/${id}`,
  type: 'DELETE',
  success: function (res) {
    showToast(`'${res.data.nama}' berhasil dihapus.`);
    dt.ajax.reload(updateStats, false); // reload tanpa refresh halaman
  }
});
```
Tampilan DataTable aktif (Dropdown Terbuka & Pagination Terlihat)
<p align="center"><img width="1359" height="581" alt="image" src="https://github.com/user-attachments/assets/6cc718bf-b2ec-43fd-b00c-feac2d779f46" /></p>

## 1.5 Format Data JSON dengan jQuery DataTable
Data produk disimpan dalam file products.json dan disajikan melalui endpoint GET /api/products dalam format JSON. jQuery DataTable dikonfigurasi dengan ajax untuk mengambil dan menampilkan data JSON tersebut secara otomatis.

Kode Program - Struktur File JSON
```
[
  {
    "id": 1,
    "nama": "Nike Air Zoom Pegasus 40",
    "kategori": "Sepatu",
    "harga": 1850000,
    "stok": 12,
    "createdAt": "2025-01-10"
  }
]
```
Kode Program - Konfigurasi DataTable Ajax JSON
```
dt = $('#tblProduk').DataTable({
  ajax: {
    url: '/api/products',  // endpoint yang mengembalikan JSON
    type: 'GET',
    dataSrc: 'data'        // baca array dari field 'data' di response
  },
  columns: [
    { data: 'id' }, { data: 'nama' }, { data: 'kategori' },
    { data: 'harga' }, { data: 'stok' }, { data: 'createdAt' },
    { data: 'id' }   // kolom aksi
  ],
  pageLength: 5,
  lengthMenu: [5, 10, 25, 50]
});
```
Struktur Data JSON
<p align="center"><img width="1917" height="1018" alt="image" src="https://github.com/user-attachments/assets/5cd3e516-a0c2-4dba-a8aa-9129a02fac3b" /></p>

Fitur Search DataTable
<p align="center"><img width="1356" height="352" alt="image" src="https://github.com/user-attachments/assets/d0fe0aee-cd6c-4282-93ed-9b48b02b02dc" /></p>

# Link Video Presentasi
Lihat disini: https://drive.google.com/file/d/1DiA1Pct5q_z5Tc56a6cBdw4R_-H-AZwk/view?usp=sharing
