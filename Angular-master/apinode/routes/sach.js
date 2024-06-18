var router= require('express')();
var db=require('./dbconnect');



router.get('/',(req,res)=>{

    var query='SELECT * FROM sach ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.post('/loaisach/saveFileName', (req, res) => {
    const { Anh } = req.body;
    if (!Anh) {
        return res.status(400).send('Tên file không được để trống');
    }

    // Xử lý lưu tên file vào cơ sở dữ liệu hoặc các thao tác khác
    console.log('Tên file đã được lưu:', Anh);
    res.status(200).json({ message: 'Tên file đã được lưu thành công' });
});

router.post('/create',(req,res) =>{
    let file;
    let uploadPath;
    if(!req.files){
        return res.status(500).json({error: "Upload anh loi 1"});
    }

    file = req.files.file;

    uploadPath = "D:\\DoAnTotNghiep\\Angular-master\\src\\assets\\img\\" + file.name;

    file.mv(uploadPath, function(err) {
        if (err) return res.status(500).json({error: "Upload anh loi 2"});
    })

    console.log(uploadPath);

    db.query("Insert into sach(MaLoai, TenSach, MoTa, Anh, MaNXB, TacGia, NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc) values('"+req.body.MaLoai+"','"+req.body.TenSach+"','"+req.body.MoTa+"','"+file.name+"','"+req.body.MaNXB+"','"+req.body.TacGia+"','"+req.body.NgayTao+"','"+req.body.SoLuong+"','"+req.body.Gia+"','"+req.body.GiaCu+"','"+req.body.sotrang+"','"+req.body.kichthuoc+"')",(err,rs)=>{
        if(err){
           return res.status(500).send(err)
        }
        return res.status(200).send({code:200,message:"Thêm thành công"})
    })
})

router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM sach where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});

router.get('/get-list/:id',function(req,res){

    var query ='SELECT * FROM sach where MaLoai= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});

/* router.post('/edit/:id',function(req,res){
    var MaLoai = req.body.MaLoai;
    var TenSach = req.body.TenSach;
    var MoTa = req.body.MoTa;
    var Anh = req.body.Anh;
    var MaNXB = req.body.MaNXB;
    var TacGia = req.body.TacGia;
    var NgayTao = req.body.NgayTao;
    var SoLuong = req.body.SoLuong;
    var Gia = req.body.Gia;
    var GiaCu = req.body.GiaCu;
    var sotrang = req.body.sotrang;
    var kichthuoc = req.body.kichthuoc;
    var id = req.params.id;
        
    var query = "UPDATE sach SET MaLoai=?,TenSach=?,MoTa=?,Anh=?,MaNXB=?,TacGia=?,NgayTao=?,SoLuong=?,Gia=?,GiaCu=?,sotrang=?,kichthuoc=?  WHERE id = ?";
    db.query(query, [MaLoai, TenSach, MoTa, Anh, MaNXB, TacGia, NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });


}); */

router.post('/edit/:id', function(req, res) {
    var MaLoai = req.body.MaLoai;
    var TenSach = req.body.TenSach;
    var MoTa = req.body.MoTa;
    var Anh = req.body.Anh;
    var MaNXB = req.body.MaNXB;
    var TacGia = req.body.TacGia;
    var NgayTao = req.body.NgayTao;
    var SoLuong = req.body.SoLuong;
    var Gia = req.body.Gia;
    var GiaCu = req.body.GiaCu;
    var sotrang = req.body.sotrang;
    var kichthuoc = req.body.kichthuoc;
    var id = req.params.id;
        
    var query = "UPDATE sach SET MaLoai=?, TenSach=?, MoTa=?, Anh=?, MaNXB=?, TacGia=?, NgayTao=?, SoLuong=?, Gia=?, GiaCu=?, sotrang=?, kichthuoc=? WHERE id = ?";
    
    db.query(query, [MaLoai, TenSach, MoTa, Anh, MaNXB, TacGia, NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc, id], function(error, result) {
        if(error) {
            console.error(error);
            return res.status(500).send('Lỗi trong quá trình cập nhật sách');
        }
        res.json(result);
    });
});

router.post('/add', function(req, res) {
    var MaLoai = req.body.MaLoai;
    var TenSach = req.body.TenSach;
    var MoTa = req.body.MoTa;
    var Anh = req.body.Anh;
    var MaNXB = req.body.MaNXB;
    var TacGia = req.body.TacGia;
    var NgayTao = req.body.NgayTao;
    var SoLuong = req.body.SoLuong;
    var Gia = req.body.Gia;
    var GiaCu = req.body.GiaCu;
    var sotrang = req.body.sotrang;
    var kichthuoc = req.body.kichthuoc;
   

    var query = "INSERT INTO sach(MaLoai, TenSach, MoTa, Anh, MaNXB, TacGia, NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(query, [MaLoai, TenSach, MoTa, Anh, MaNXB, TacGia, NgayTao, SoLuong, Gia, GiaCu, sotrang, kichthuoc], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from sach where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
router.get('/search', (req, res) => {
    const { query } = req.query;
    const sql = `
      SELECT * FROM sach
      WHERE TenSach LIKE ? 
    `;
    const values = [`%${query}%`];
  
    db.query(sql, values, (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });
module.exports = router;