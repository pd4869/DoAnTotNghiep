var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM hoadonnhap ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

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
   
    var id = req.params.id;
        
    var query = "UPDATE hoadonnhap SET NgayNhap=?,MaNguoiDung=?,MaNXB=],  WHERE id = ?";
    db.query(query, [NgayNhap, MaNguoiDung, MaNXB,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
router.post('/add', function(req, res) {
    var NgayNhap = req.body.NgayNhap;
    var MaNguoiDung = req.body.MaNguoiDung;
    var MaNXB = req.body.MaNXB;
   

    var query = "INSERT INTO hoadonnhap(NgayNhap, MaNguoiDung, MaNXB], ALUES (?,?,?)";
    db.query(query, [NgayNhap, MaNguoiDung, MaNXB], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
})
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from hoadonnhap where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;