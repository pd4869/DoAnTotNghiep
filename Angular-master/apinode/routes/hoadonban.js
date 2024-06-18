var router= require('express')();
var db=require('./dbconnect');
const { route } = require('./sach');

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

router.post('/edit/:id',function(req,res){
    
    var Trangthai = req.body.Trangthai;

    var id = req.params.id;
        
    var query = "UPDATE hoadonban SET Trangthai=?  WHERE id = ?";
    db.query(query, [ Trangthai,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
/*
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

router.put('/update-status/:id', (req, res) => {
  const id = req.params.id;
  const Trangthai = req.body.Trangthai;

  const query = 'UPDATE hoadonban SET Trangthai = ? WHERE id = ?';
  db.query(query, [Trangthai, id], (error, result) => {
    if (error) {
      res.status(500).send('Lỗi cập nhật trạng thái đơn hàng');
    } else {
      res.json({ message: 'Cập nhật trạng thái thành công', result });
    }
  });
});

/* router.post('/createOrder', (req, res) => {
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
    }) */
  router.post('/createOrder', (req, res) => {
    const {
      Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai,
      Sanphamjson,
    } = req.body;
  
    // Check if customer exists based on phone number
    const checkCustomerQuery = `
      SELECT * FROM KhachHang WHERE SoDienThoai = ?`;
  
    db.query(checkCustomerQuery, [sdt], (err, results) => {
      if (err) {
        console.error('Error checking KhachHang:', err);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.length === 0) {
        // If customer does not exist, insert new customer
        const insertKhachHangQuery = `
          INSERT INTO KhachHang (TenKhachHang, DiaChi, SoDienThoai, Email)
          VALUES (?, ?, ?, ?)`;
  
        db.query(
          insertKhachHangQuery,
          [Hoten, Diachi, sdt,Email ],
          (err) => {
            if (err) {
              console.error('Error inserting into KhachHang:', err);
              res.status(500).send('Internal Server Error');
              return;
            }
  
            createOrder();
          }
        );
      } else {
        // If customer exists, update customer information
        const updateKhachHangQuery = `
          UPDATE KhachHang SET TenKhachHang = ?, DiaChi = ?, Email = ?
          WHERE SoDienThoai = ?`;
  
        db.query(
          updateKhachHangQuery,
          [Hoten, Diachi, sdt,Email ],
          (err) => {
            if (err) {
              console.error('Error updating KhachHang:', err);
              res.status(500).send('Internal Server Error');
              return;
            }
  
            createOrder();
          }
        );
      }
    });
  
    function createOrder() {
      // Insert data into HoaDonBan table
      const insertDonHangQuery = `
        INSERT INTO HoaDonBan (Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
      db.query(
        insertDonHangQuery,
        [Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai],
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
  
          // Insert data into chitiethoadonban table
          const insertCTDHQuery = `
            INSERT INTO chitiethoadonban (MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien)
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
          // Update Số Lượng Sản Phẩm
          const updateSoluongQuery = `
            UPDATE Sach SET SoLuong = SoLuong - ? WHERE id = ?`;
  
          sanphamData.forEach((sanpham) => {
            const { MaSach, TenSach, Anh, SoLuong, Gia, Tongtien } = sanpham;
  
            db.query(
              insertCTDHQuery,
              [MaHoaDonBan, MaSach, TenSach, Anh, SoLuong, Gia, Tongtien],
              (err) => {
                if (err) {
                  console.error('Error inserting into chitiethoadonban:', err);
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
  
          res.json({ Result: 'Order created successfully' });
        }
      );
    }
  });
  
  
  router.post('/createOrder1', (req, res) => {
    const {
      Hoten, sdt, Email, Diachi,Ngaydat, Tong, Trangthai,
      Sanphamjson,
    } = req.body;
  
    // Insert data into DonHang table
    const insertDonHangQuery = `
      INSERT INTO HoaDonBan ( Hoten, sdt, Email, Diachi, Ngaydat, Tong, Trangthai)
      VALUES (?, ?, ?, ?,?,?, ?)`;
  
    db.query(
      insertDonHangQuery,
      [ Hoten, sdt, Email, Diachi,Ngaydat,Tong, Trangthai],
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
  
  router.get('/thongkedoanhthu' , (req,res) =>{
    var query = 'SELECT CONCAT(YEAR(hoadonban.Ngaydat), "-", MONTH(hoadonban.Ngaydat)) AS Thang,   SUM(chitiethoadonban.SoLuong) AS SoLuongBan,SUM(chitiethoadonban.Gia) AS DoanhThu FROM hoadonban INNER JOIN chitiethoadonban ON hoadonban.id = chitiethoadonban.MaHoaDonBan INNER JOIN Sach ON chitiethoadonban.MaSach = Sach.id GROUP BY Thang ORDER BY  Thang DESC;';
    db.query(query,(err,result)=>{
        if(err){
            res.status(500).send('error connection');
        }
        res.json(result);
    })
})
router.get('/thongkedoanhthunam' , (req,res) =>{
  var query = 'SELECT CONCAT( year(hoadonban.Ngaydat)) AS nam,   SUM(chitiethoadonban.SoLuong) AS SoLuongBan,SUM(chitiethoadonban.Gia) AS DoanhThu FROM hoadonban INNER JOIN chitiethoadonban ON hoadonban.id = chitiethoadonban.MaHoaDonBan INNER JOIN Sach ON chitiethoadonban.MaSach = Sach.id GROUP BY nam ORDER BY  nam DESC;';
  db.query(query,(err,result)=>{
      if(err){
          res.status(500).send('error connection');
      }
      res.json(result);
  })
})
router.get('/ctdh',(req,res)=>{
    var query = 'Select * from chitiethoadonban'
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi');
        res.json(result);
    })
});

router.get('/revenue/monthly', (req, res) => {
  const currentYear = new Date().getFullYear();
  const selectedYear = req.query.year || currentYear;
  const selectedMonth = req.query.month || new Date().getMonth() + 1; // Lấy giá trị tháng từ tham số hoặc sử dụng tháng hiện tại nếu không có

  const query = `
    SELECT MONTH(Ngaydat) AS month, SUM(Tong) AS totalRevenue
    FROM HoaDonBan
    WHERE YEAR(Ngaydat) = ${selectedYear} AND MONTH(Ngaydat) = ${selectedMonth}
    GROUP BY month
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const totalRevenue = results.length > 0 ? results[0].totalRevenue : 0;
      res.json({ totalRevenue });
    }
  });
});

router.get('/revenue/yearly', (req, res) => {
  const selectedYear = req.query.year || new Date().getFullYear(); // Lấy giá trị năm từ tham số hoặc sử dụng năm hiện tại nếu không có

  const query = `
    SELECT YEAR(Ngaydat) AS year, SUM(Tong) AS totalRevenue
    FROM HoaDonBan
    WHERE YEAR(Ngaydat) = ${selectedYear}
    GROUP BY year
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const totalRevenue = results.length > 0 ? results[0].totalRevenue : 0;
      res.json({ totalRevenue });
    }
  });
});

router.get('/thongke/yearly', (req, res) => {
  const currentYear = new Date().getFullYear();

  const query = `
    SELECT YEAR(Ngaydat) AS year, SUM(Tong) AS totalRevenue
    FROM HoaDonBan
    WHERE YEAR(Ngaydat) = ${currentYear}
    GROUP BY year
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const totalRevenue = results.length > 0 ? results[0].totalRevenue : 0;
      res.json({ totalRevenue });
    }
  });
});


// API endpoint để thống kê doanh thu trong tháng
router.get('/thongke/monthly', (req, res) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1; // Lưu ý: Tháng trong JavaScript đếm từ 0
  const currentYear = currentDate.getFullYear();

  const query = `
    SELECT MONTH(Ngaydat) AS month, SUM(Tong) AS totalRevenue
    FROM HoaDonBan
    WHERE YEAR(Ngaydat) = ${currentYear} AND MONTH(Ngaydat) = ${currentMonth}
    GROUP BY month
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const totalRevenue = results.length > 0 ? results[0].totalRevenue : 0;
      res.json({ totalRevenue });
    }
  });
});

// ...



router.get('/thongke', (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const query = `
    SELECT SUM(Tong) AS totalRevenue
    FROM HaoaDonBan
    WHERE Ngaydat >= '${today} 00:00:00' AND Ngaydat <= '${today} 23:59:59'
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      const totalRevenue = results.length > 0 ? parseFloat(results[0].totalRevenue) : 0;
      res.json({ totalRevenue });
    }
  });
});
router.get('/revenue/statistics', (req, res) => {
  const selectedYear = req.query.year;
  const selectedMonth = req.query.month;
  const selectedDay = req.query.day;

  let query = `
    SELECT`;

  // Xử lý trường hợp chỉ có năm
  if (selectedYear && !selectedMonth && !selectedDay) {
    query += ` YEAR(Ngaydat) AS year, SUM(Tong) AS totalRevenue
              FROM HoaDonBan
              WHERE YEAR(Ngaydat) = ${selectedYear}
              GROUP BY year`;

  // Xử lý trường hợp có cả tháng và năm
  } else if (selectedYear && selectedMonth && !selectedDay) {
    query += ` YEAR(Ngaydat) AS year, MONTH(Ngaydat) AS month, SUM(Tong) AS totalRevenue
              FROM HoaDonBan
              WHERE YEAR(Ngaydat) = ${selectedYear} AND MONTH(Ngaydat) = ${selectedMonth}
              GROUP BY year, month`;

  // Xử lý trường hợp có cả ngày, tháng và năm
  } else if (selectedYear && selectedMonth && selectedDay) {
    query += ` YEAR(Ngaydat) AS year, MONTH(Ngaydat) AS month, DAY(Ngaydat) AS day, SUM(Tong) AS totalRevenue
              FROM HoaDonBan
              WHERE YEAR(Ngaydat) = ${selectedYear} AND MONTH(Ngaydat) = ${selectedMonth} AND DAY(Ngaydat) = ${selectedDay}
              GROUP BY year, month, day`;
  }

  db.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});


module.exports = router;