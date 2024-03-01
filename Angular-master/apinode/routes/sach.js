var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM sach ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
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

router.post('/edit/:id',function(req,res){
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
module.exports = router;