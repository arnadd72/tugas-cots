const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware Keamanan & Parsing
// Mencegah payload yang terlalu besar dan mem-parsing JSON secara ketat
app.use(express.json({ limit: '10kb' })); 
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Menyajikan file statis statis HTML secara aman dari folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Mock Database (Aman untuk skala praktikum tanpa koneksi DB fisik)
let products = [
    { id: 1, nama: "Intel Core i9-14900K", kategori: "CPU", harga: 9500000, stok: 12 },
    { id: 2, nama: "NVIDIA RTX 4080 Super", kategori: "VGA", harga: 18500000, stok: 5 }
];

// ---------------------------------------------------------
// ROUTING API (Pusat Logika CRUD via JSON)
// ---------------------------------------------------------

// READ: Endpoint untuk ditarik oleh jQuery DataTables
app.get('/api/products', (req, res) => {
    // DataTables membutuhkan format object { data: [...] }
    res.status(200).json({ data: products });
});

// CREATE: Endpoint tambah data dengan validasi input
app.post('/api/products', (req, res) => {
    const { nama, kategori, harga, stok } = req.body;
    
    // Validasi ketat mencegah injeksi data kosong
    if (!nama || !kategori || !harga || !stok) {
        return res.status(400).json({ error: "Data part tidak boleh kosong!" });
    }

    const newProduct = {
        id: Date.now(), // Generate ID unik yang aman
        nama, 
        kategori, 
        harga: parseInt(harga), 
        stok: parseInt(stok)
    };
    
    products.push(newProduct);
    res.status(201).json({ message: "Part berhasil ditambahkan!" });
});

// READ SPESIFIK: Untuk mengisi form Edit
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ error: "Part tidak ditemukan" });
    res.status(200).json(product);
});

// UPDATE: Endpoint perbarui data
app.put('/api/products/:id', (req, res) => {
    const { nama, kategori, harga, stok } = req.body;
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: "Part tidak ditemukan" });
    }

    products[index] = { ...products[index], nama, kategori, harga, stok };
    res.status(200).json({ message: "Part berhasil diperbarui!" });
});

// DELETE: Endpoint hapus data
app.delete('/api/products/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(200).json({ message: "Part berhasil dihapus!" });
});

app.listen(port, () => {
    console.log(`[SECURITY-OK] Server Part Komputer berjalan di http://localhost:${port}`);
});