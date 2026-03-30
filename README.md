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
    <strong>Arnanda Setya Nosa Putra</strong><br>
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



## 📖 Deskripsi Aplikasi
Aplikasi **Syariah Komputer** merupakan sistem informasi sederhana berbasis web yang digunakan untuk mengelola data part komputer. Aplikasi ini mengimplementasikan konsep **CRUD (Create, Read, Update, Delete)** menggunakan arsitektur **client-server** dengan pendekatan **REST API**.

Frontend dibangun menggunakan HTML, Bootstrap, dan jQuery, sedangkan backend menggunakan Node.js dengan framework Express.js. Data disimpan sementara dalam memori server (*in-memory storage*) dan dikirim dalam format JSON.

---

## 1. Dasar Teori

**CRUD (Create, Read, Update, Delete)** merupakan konsep dasar dalam pengelolaan data pada aplikasi. CRUD memungkinkan pengguna untuk menambah, melihat, mengubah, dan menghapus data secara dinamis.

**Node.js** adalah runtime JavaScript berbasis server yang menggunakan arsitektur event-driven dan non-blocking I/O sehingga efisien dalam menangani banyak request.

**Express.js** merupakan framework backend yang digunakan untuk membangun REST API dan mengelola routing HTTP.

**Bootstrap** adalah framework CSS untuk membuat tampilan web responsif dengan komponen siap pakai.

**jQuery** digunakan untuk mempermudah manipulasi DOM dan komunikasi AJAX.

**DataTables** adalah plugin jQuery yang digunakan untuk membuat tabel interaktif dengan fitur search, sorting, dan pagination.

**JSON** digunakan sebagai format pertukaran data antara client dan server.

---

## 2. Deskripsi Aplikasi

Aplikasi **Syariah Komputer** merupakan sistem manajemen data part komputer berbasis web yang dibangun menggunakan Node.js dan Express.

Fitur utama:
- Menampilkan data part komputer
- Menambahkan data baru
- Mengedit data
- Menghapus data
- Tabel interaktif dengan DataTables
- Data berbasis JSON (tanpa database)

---

## 3. Struktur Folder Project

```bash
tugas-cots-2311102180/
├── server.js
├── package.json
├── public/
│   ├── index.html
│   ├── tambah.html
│   ├── edit.html
│   ├── script.js
│
└── assets/
    ├── beranda.png
    ├── edit_part.png
    ├── tambah_part.png
    ├── hapus_part.png
```

### Penjelasan

| File | Keterangan |
|------|-----------|
| server.js | Backend Express |
| public/ | File frontend |
| assets/ | Gambar dokumentasi |

---

## 4. Cara Menjalankan Aplikasi

```bash
npm install
node server.js
```

Akses:
```
http://localhost:3000
```

---

## 5. Kode Program

### A. server.js

```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json({ limit: '10kb' })); 
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(express.static(path.join(__dirname, 'public')));

let products = [];

app.get('/api/products', (req, res) => {
    res.status(200).json({ data: products });
});

app.post('/api/products', (req, res) => {
    const { nama, kategori, harga, stok } = req.body;
    
    // Validasi ketat mencegah injeksi data kosong
    if (!nama || !kategori || !harga || !stok) {
        return res.status(400).json({ error: "Data part tidak boleh kosong!" });
    }

    const newProduct = {
        id: Date.now(), 
        nama, 
        kategori, 
        harga: parseInt(harga), 
        stok: parseInt(stok)
    };
    
    products.push(newProduct);
    res.status(201).json({ message: "Part berhasil ditambahkan!" });
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: "Part tidak ditemukan" });
    res.status(200).json(product);
});

app.put('/api/products/:id', (req, res) => {
    const { nama, kategori, harga, stok } = req.body;
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: "Part tidak ditemukan" });
    }

    products[index] = { ...products[index], nama, kategori, harga, stok };
    res.status(200).json({ message: "Part berhasil diperbarui!" });
});

app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(200).json({ message: "Part berhasil dihapus!" });
});

app.listen(port, () => {
    console.log(`[SECURITY-OK] Server Part Komputer berjalan di http://localhost:${port}`);
});
```
### B. Index.html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Syariah Komputer  Manajemen Part</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet">
    <link href="https://cdn.datatables.net/1.13.6/css/dataTables.bootstrap5.min.css" 
          rel="stylesheet">
</head>
<body class="bg-light">

<nav class="navbar navbar-expand-lg navbar-dark bg-success shadow-sm mb-4">
    <div class="container">
        <a class="navbar-brand fw-bold fs-4" href="#">
             Syariah Komputer
        </a>
        
        <div class="d-flex align-items-center">
            <span class="badge bg-light text-success border border-light rounded-pill px-3 py-2 shadow-sm">
                Arnanda Setya Nosa Putra | 2311102180
            </span>
        </div>
    </div>
</nav>

<div class="container">
    
    <div class="row mb-4">
        <div class="col-12">
            <div class="card border-0 shadow-sm bg-white rounded-3">
                <div class="card-body p-4">
                    <h2 class="fw-bold text-dark mb-2">Sistem Manajemen Inventaris Part Komputer</h2>
                    <p class="text-secondary mb-0">
                        Kelola stok produk, harga, dan kategori part komputer secara  
                        real time dan aman.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="card shadow-sm border-0 rounded-3 mb-5">
        <div class="card-header bg-dark text-white d-flex justify-content-between align-items-center py-3">
            <h5 class="mb-0 fw-semibold"> Data Part Komputer</h5>
            <a href="tambah.html" class="btn btn-success btn-sm fw-bold shadow-sm">
                + Tambah Part
            </a>
        </div>
        <div class="card-body p-4">
            <table id="tabelProduk" class="table table-hover table-bordered w-100">
                <thead class="table-light">
                    <tr>
                        <th width="5%">ID</th>
                        <th width="25%">Nama Part</th>
                        <th width="15%">Kategori</th>
                        <th width="20%">Harga (Rp)</th>
                        <th width="15%">Stok Fisik</th>
                        <th width="20%">Aksi Sistem</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/dataTables.bootstrap5.min.js"></script>

<script>
    $(document).ready(function() {
        let table = $('#tabelProduk').DataTable({
            "ajax": "/api/products",
            "columns": [
                { "data": "id" },
                { "data": "nama" },
                { "data": "kategori" },
                { 
                    "data": "harga",
                    "render": function(data) {
                        return new Intl.NumberFormat('id-ID', { 
                            style: 'currency', currency: 'IDR' 
                        }).format(data);
                    }
                },
                { 
                    "data": "stok",
                    "render": function(data) {
                        if(data < 5) {
                            return `<span class="badge bg-danger">${data} (Kritis)</span>`;
                        }
                        return `<span class="badge bg-primary">${data}</span>`;
                    }
                },
                {
                    "data": null,
                    "render": function(data, type, row) {
                        return `
                            <button class="btn btn-warning btn-sm btn-edit fw-bold text-dark shadow-sm" 
                                    data-id="${row.id}">Edit</button>
                            <button class="btn btn-danger btn-sm btn-hapus fw-bold shadow-sm" 
                                    data-id="${row.id}">Hapus</button>
                        `;
                    }
                }
            ],
            "language": {
                "search": "Cari Part:",
                "lengthMenu": "Tampilkan _MENU_ entri",
                "info": "Menampilkan _START_ hingga _END_ dari _TOTAL_ part",
                "emptyTable": "Belum ada data part di dalam sistem."
            }
        });

        $('#tabelProduk tbody').on('click', '.btn-hapus', function() {
            let id = $(this).data('id');
            if(confirm("Tindakan ini tidak dapat dibatalkan. Hapus part ini dari database?")) {
                $.ajax({
                    url: `/api/products/${id}`,
                    type: 'DELETE',
                    success: function(res) {
                        table.ajax.reload(null, false); 
                    },
                    error: function() {
                        alert("Gagal menghapus data. Terjadi kesalahan pada server.");
                    }
                });
            }
        });

        $('#tabelProduk tbody').on('click', '.btn-edit', function() {
            let id = $(this).data('id');
            window.location.href = `edit.html?id=${id}`;
        });
    });
</script>
</body>
</html>
```
### C. tambah.html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Part Komputer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    <div class="card shadow-sm border-0 mx-auto" style="max-width: 600px;">
        <div class="card-header bg-success text-white">
            <h4 class="mb-0">Form Input Part Baru</h4>
        </div>
        <div class="card-body">
            <form id="formTambah">
                <div class="mb-3">
                    <label>Nama Part</label>
                    <input type="text" id="nama" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label>Kategori</label>
                    <select id="kategori" class="form-control" required>
                        <option value="">-- Pilih Kategori --</option>
                        <option value="CPU">Processor (CPU)</option>
                        <option value="VGA">Grapic card (VGA)</option>
                        <option value="RAM">Memori (RAM)</option>
                        <option value="Motherboard">Motherboard</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label>Harga (Rp)</label>
                    <input type="number" id="harga" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label>Stok Fisik</label>
                    <input type="number" id="stok" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Simpan Part</button>
                <a href="index.html" class="btn btn-secondary w-100 mt-2">Kembali</a>
            </form>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    $('#formTambah').submit(function(e) {
        e.preventDefault();
        
        let payload = {
            nama: $('#nama').val(),
            kategori: $('#kategori').val(),
            harga: $('#harga').val(),
            stok: $('#stok').val()
        };

        $.ajax({
            url: '/api/products',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(payload),
            success: function(res) {
                alert(res.message);
                window.location.href = 'index.html';
            },
            error: function(err) {
                alert("Gagal menambahkan data. Periksa sistem.");
            }
        });
    });
</script>
</body>
</html>
```
### D. edit.html
```
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Part Komputer</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
          rel="stylesheet">
</head>
<body class="bg-light">

<div class="container mt-5">
    <div class="card shadow-sm border-0 mx-auto" style="max-width: 600px;">
        <div class="card-header bg-warning text-dark">
            <h4 class="mb-0">Form Edit Part</h4>
        </div>
        <div class="card-body">
            <form id="formEdit">
                <input type="hidden" id="partId">
                <div class="mb-3">
                    <label>Nama Part</label>
                    <input type="text" id="nama" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label>Kategori</label>
                    <select id="kategori" class="form-control" required>
                        <option value="CPU">Processor (CPU)</option>
                        <option value="VGA">Kartu Grafis (VGA)</option>
                        <option value="RAM">Memori (RAM)</option>
                        <option value="Motherboard">Motherboard</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label>Harga (Rp)</label>
                    <input type="number" id="harga" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label>Stok Fisik</label>
                    <input type="number" id="stok" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Update Part</button>
                <a href="index.html" class="btn btn-secondary w-100 mt-2">Batal</a>
            </form>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
<script>
    $(document).ready(function() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        
        if(id) {
            $.get(`/api/products/${id}`, function(data) {
                $('#partId').val(data.id);
                $('#nama').val(data.nama);
                $('#kategori').val(data.kategori);
                $('#harga').val(data.harga);
                $('#stok').val(data.stok);
            }).fail(function() {
                alert("Data part tidak ditemukan!");
                window.location.href = 'index.html';
            });
        }

        $('#formEdit').submit(function(e) {
            e.preventDefault();
            
            let payload = {
                nama: $('#nama').val(),
                kategori: $('#kategori').val(),
                harga: $('#harga').val(),
                stok: $('#stok').val()
            };

            $.ajax({
                url: `/api/products/${$('#partId').val()}`,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                success: function(res) {
                    alert(res.message);
                    window.location.href = 'index.html';
                }
            });
        });
    });
</script>
</body>
</html>
```
---

## 6. Alur CRUD

### Create
User menambahkan data melalui form → dikirim ke server (POST)

### Read
Data ditampilkan di tabel melalui DataTables

### Update
User edit data → dikirim ke server (PUT)

### Delete
User hapus data → request DELETE ke server

---

## 7. Screenshot Website

### 1. Halaman Utama
![](assets/beranda.png)

### 2. Halaman Tambah
![](assets/tambah_part.png)

### 3. Halaman Edit Data
![](assets/edit_part.png)

### 4. Halaman Hapus Data
![](assets/hapus_part.png)

---

## 8. Kesimpulan

Aplikasi ini berhasil mengimplementasikan konsep CRUD berbasis REST API menggunakan Node.js dan Express. Integrasi dengan Bootstrap dan DataTables membuat tampilan menjadi interaktif dan responsif.

---

## 9. Referensi

- https://nodejs.org
- https://expressjs.com
- https://getbootstrap.com
- https://datatables.net

---

## 10. Link Video Presentasi

[MASUKKAN LINK VIDEO DI SINI]
