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