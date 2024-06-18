var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM hoadonnhap ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/cthdn/get-one/:id',function(req,res){
    var query = "Select * from chitiethoadonnhap where MaHoaDonNhap = " + req.params.id;
    db.query(query,function(err,result) {
        if(err) res.status(500).send('Loi cau lenh truy van')
        res.json(result);
    })
  });
  
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM hoadonnhap where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});
router.post('/edit/:id',function(req,res){
    var NgayNhap = req.body.NgayNhap;
    var MaNguoiDung = req.body.MaNguoiDung;
    var MaNXB = req.body.MaNXB;
   var tong =req.body.tong;
    var id = req.params.id;
        
    var query = "UPDATE hoadonnhap SET NgayNhap=?,MaNguoiDung=?,MaNXB=?, tong=?],  WHERE id = ?";
    db.query(query, [NgayNhap, MaNguoiDung, MaNXB,tong,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
router.post('/add', function(req, res) {
    var NgayNhap = req.body.NgayNhap;
    var MaNguoiDung = req.body.MaNguoiDung;
    var MaNXB = req.body.MaNXB;
    var tong = req.body.tong;
   

    var query = "INSERT INTO hoadonnhap(NgayNhap, MaNguoiDung, MaNXB,tong], VALUES (?,?,?,?)";
    db.query(query, [NgayNhap, MaNguoiDung, MaNXB,tong], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
})
/* router.post('/createOrder', (req, res) => {
    const {
        NgayNhap, MaNguoiDung, MaNXB,tong

    } = req.body;
  
    // Insert data into DonHang table
    const insertDonHangQuery = `
      INSERT INTO HoaDonNhap (NgayNhap, MaNguoiDung, MaNXB,tong)
      VALUES (?, ?, ?,?)`;
  
    db.query(
        insertDonHangQuery,
        [NgayNhap, MaNguoiDung, MaNXB,tong],
        (err, results) => {
            if (err) {
                console.error('Error inserting into HoaDonNhap:', err);
                res.status(500).send('Internal Server Error');
                return;
            }
  
            const MaHoaDonNhap = results.insertId;
  
            // Parse Sanphamjson
            let sanphamData;
            try {
                // Check if Sanphamjson is already an object
                if (typeof Sanphamjson === 'string') {
                    sanphamData = JSON.parse(Sanphamjson);
                } else {
                    // If not a string, try to convert to JSON
                    sanphamData = JSON.parse(JSON.stringify(Sanphamjson));
                }
            } catch (error) {
                console.error('Error parsing Sanphamjson:', error);
                res.status(400).send('Invalid JSON format in Sanphamjson');
                return;
            } 
  
            // Insert data into CTDH table
            const insertCTDHQuery = `
          INSERT INTO chitiethoadonnhap (MaSach, MaHoaDonNhap, SoLuong, GiaNhap,tongtien)
          VALUES (?, ?, ?, ?, ?)`;
  
            // Update Số Lượng Sản Phẩm
            const updateSoluongQuery = `
          UPDATE Sach SET SoLuong = SoLuong + ? WHERE id = ?`;
  
            sanphamData.forEach((sanpham) => {
                const {
                  MaSach, SoLuong, GiaNhap, tongtien
                } = sanpham;
  
                db.query(
                    insertCTDHQuery,
                    [MaSach, MaHoaDonNhap, SoLuong, GiaNhap, tongtien],
                    (err) => {
                        if (err) {
                            console.error('Error inserting into CTDH:', err);
                            res.status(500).send('Internal Server Error');
                            return;
                        }
  
                        // Trừ Số Lượng Sản Phẩm
                        db.query(
                            updateSoluongQuery,
                            [SoLuong, MaSach],
                            (err) => {
                                if (err) {
                                    console.error('Error updating Soluong:', err);
                                    res.status(500).send('Internal Server Error');
                                }
                            }
                        );
                    }
                );
            });
  
            res.json({ Result: '' });
        }
    )
      }) */
    /* router.post('/create', async function(req, res) {
        const connection = await db.getConnection();
    
        try {
            await connection.beginTransaction();
    
            const { NgayNhap, MaNXB, MaNguoiDung, tong } = req.body;
    
            // Chèn hóa đơn nhập
            const insertHDNQuery = "INSERT INTO hoadonnhap (NgayNhap, MaNXB, MaNguoiDung,tong) VALUES (?, ?,?,?)";
            const [resultHDN] = await connection.query(insertHDNQuery, [NgayNhap, MaNXB,MaNguoiDung,tong]);
    
            const MaHoaDonNhap = resultHDN.insertId;
    
            for (const item of chitiet) {
                const { MaSach, SoLuong, GiaNhap,tongtien } = item;
    
                // Chèn chi tiết hóa đơn nhập
                const insertCTHDNQuery = "INSERT INTO chitiethoadonnhap (MaHoaDonNhap, MaSach, SoLuong, GiaNhap,tongtien) VALUES (?, ?, ?, ?,?)";
                await connection.query(insertCTHDNQuery, [MaHoaDonNhap, MaSach, SoLuong, GiaNhap,tongtien]);
    
                // Cập nhật số lượng sản phẩm
                const updateSPQuery = "UPDATE sach SET SoLuong = SoLuong + ? WHERE id = ?";
                await connection.query(updateSPQuery, [SoLuong, MaSach]);
            }
    
            await connection.commit();
            res.status(201).send('Hóa đơn nhập đã được thêm thành công và số lượng sản phẩm đã được cập nhật');
        } catch (error) {
            await connection.rollback();
            console.error(error);
            res.status(500).send('Lỗi trong quá trình xử lý hóa đơn nhập');
        } finally {
            connection.release();
        }
    }); */
    router.post('/create', (req, res) => {
        const { NgayNhap, MaNXB, MaNguoiDung, chitiet } = req.body;
        
        // Tính tổng tiền cho từng chi tiết và tổng tiền hóa đơn
        let tongHoaDon = 0;
        chitiet.forEach(item => {
          item.tongtien = item.SoLuong * item.GiaNhap;
          tongHoaDon += item.tongtien;
        });
      
        // Tạo hóa đơn nhập mới
        const hoaDonQuery = 'INSERT INTO hoadonnhap (NgayNhap, MaNXB, MaNguoiDung,tong) VALUES (?, ?, ?,?)';
        db.query(hoaDonQuery, [NgayNhap, MaNXB, MaNguoiDung, tongHoaDon], (err, result) => {
          if (err) {
            return res.status(500).send('Lỗi khi thêm hóa đơn nhập');
          }
      
          const MaHoaDonNhap = result.insertId;
          const chiTietQuery = 'INSERT INTO chitiethoadonnhap (MaHoaDonNhap, MaSach, SoLuong, GiaNhap,tongtien) VALUES ?';
          const chiTietValues = chitiet.map(item => [MaHoaDonNhap, item.MaSach, item.SoLuong, item.GiaNhap, item.tongtien]);
      
          db.query(chiTietQuery, [chiTietValues], (err, result) => {
            if (err) {
              return res.status(500).send('Lỗi khi thêm chi tiết hóa đơn nhập');
            }
      
            // Cập nhật số lượng sản phẩm
            chitiet.forEach(item => {
              const updateSanPhamQuery = 'UPDATE sach SET SoLuong = SoLuong + ? WHERE id = ?';
              db.query(updateSanPhamQuery, [item.SoLuong, item.MaSach], (err, result) => {
                if (err) {
                  return res.status(500).send('Lỗi khi cập nhật số lượng sản phẩm');
                }
              });
            });
      
            res.json({ message: 'Thêm hóa đơn nhập thành công', data: result });

          });
        });
      });
      



      

router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from hoadonnhap where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;