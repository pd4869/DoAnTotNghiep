var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM khachhang ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM khachhang where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});
router.post('/edit/:id',function(req,res){
    var TenKhachHang = req.body.TenKhachHang;
    var DiaChi = req.body.DiaChi;
    var SoDienThoai = req.body.SoDienThoai;
    var Email = req.body.Email;
   
    var id = req.params.id;
        
    var query = "UPDATE khachhang SET TenKhachHang=?,DiaChi=?,SoDienThoai=?,Email=?  WHERE id = ?";
    db.query(query, [TenKhachHang, DiaChi, SoDienThoai, Email,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
router.post('/add', function(req, res) {
    var TenKhachHang = req.body.TenKhachHang;
    var DiaChi = req.body.DiaChi;
    var SoDienThoai = req.body.SoDienThoai;
    var Email = req.body.Email;
   

    var query = "INSERT INTO khachhang(TenKhachHang, DiaChi, SoDienThoai, Email) VALUES (?,?,?,?)";
    db.query(query, [TenKhachHang, DiaChi, SoDienThoai, Email], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
})
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from khachhang where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;