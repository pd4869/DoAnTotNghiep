var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM hoadonban ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM hoadonban where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});
/*
router.post('/edit/:id',function(req,res){
    var MaKhachHang = req.body.MaKhachHang;
    var Hoten = req.body.Hoten;
    var sdt = req.body.sdt;
    var Email = req.body.Email;
    var Diachi = req.body.Diachi;
    var Ngaydat = req.body.Ngaydat;
    var Tong = req.body.Tong;
    var Trangthai = req.body.Trangthai;

    var id = req.params.id;
        
    var query = "UPDATE hoadonban SET MaKhachHang=?,Hoten=?,sdt=?,Email=?,Diachi=?,Email=?,Tong=?,Trangthai=?  WHERE id = ?";
    db.query(query, [MaKhachHang, Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
router.post('/add', function(req, res) {
    var MaKhachHang = req.body.MaKhachHang;
    var Hoten = req.body.Hoten;
    var sdt = req.body.sdt;
    var Email = req.body.Email;
    var Diachi = req.body.Diachi;
    var Ngaydat = req.body.Ngaydat;
    var Tong = req.body.Tong;
    var Trangthai = req.body.Trangthai;

    var query = "INSERT INTO hoadonban(MaKhachHang, Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai) VALUES (?,?,?,?,?,?,?,?)";
    db.query(query, [MaKhachHang, Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});*/
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from hoadonban where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});

 
router.get('/get-list/:id',function(req,res){

  var query ='SELECT * FROM chitiethoadonban where MaHoaDonBan= '+req.params.id;
  db.query(query,function(error,result){
      if(error) res.status(500).send('Loi cau lenh truy van');
      res.json(result);

  });
});
router.get('/ctdh/get-one/:id',function(req,res){
  var query = "Select * from chitiethoadonban where MaHoaDonBan = " + req.params.id;
  db.query(query,function(err,result) {
      if(err) res.status(500).send('Loi cau lenh truy van')
      res.json(result);
  })
});

router.post('/createOrder', (req, res) => {
  const {
    Hoten, sdt, Email, Diachi,Ngaydat, Tong, Trangthai,
      Sanphamjson,
  } = req.body;

  // Insert data into DonHang table
  const insertDonHangQuery = `
    INSERT INTO HoaDonBan (Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai)
    VALUES (?, ?, ?, ?, ?, ?,?)`;

  db.query(
      insertDonHangQuery,
      [Hoten, sdt, Email, Diachi,Ngaydat,  Tong, Trangthai],
      (err, results) => {
          if (err) {
              console.error('Error inserting into HoaDonBan:', err);
              res.status(500).send('Internal Server Error');
              return;
          }

          const MaHoaDonBan = results.insertId;

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
        INSERT INTO chitiethoadonban (MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;

          // Update Số Lượng Sản Phẩm
          const updateSoluongQuery = `
        UPDATE Sach SET SoLuong = SoLuong - ? WHERE id = ?`;

          sanphamData.forEach((sanpham) => {
              const {
                MaSach, TenSach, Anh, SoLuong, Gia, Tongtien
              } = sanpham;

              db.query(
                  insertCTDHQuery,
                  [MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien],
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
    })

  router.post('/createOrder1', (req, res) => {
    const {
      Hoten, sdt, Email, Diachi, Tong, Trangthai,
      Sanphamjson,
    } = req.body;
  
    // Insert data into DonHang table
    const insertDonHangQuery = `
      INSERT INTO HoaDonBan ( Hoten, sdt, Email, Diachi,  Tong, Trangthai)
      VALUES (?, ?, ?, ?, ?, ?,?)`;
  
    db.query(
      insertDonHangQuery,
      [ Hoten, sdt, Email, Diachi, Tong, Trangthai],
      (err, results) => {
        if (err) {
          console.error('Error inserting into Hoadonban:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        const MaHoaDonBan = results.insertId;
  
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
          INSERT INTO chitiethoadonban (MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien)
          VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
        sanphamData.forEach((sanpham) => {
          const {
            MaSach, TenSach, Anh, SoLuong, Gia, Tongtien
          } = sanpham;
  
          db.query(
            insertCTDHQuery,
            [MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien],
            (err) => {
              if (err) {
                console.error('Error inserting into chitiethoadonban:', err);
                res.status(500).send('Internal Server Error');
              }
            }
          );
        });
  
        res.json({ Result: '' });
      }
    );
  });
  
  

router.get('/ctdh',(req,res)=>{
    var query = 'Select * from chitiethoadonban'
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi');
        res.json(result);
    })
});




module.exports = router;