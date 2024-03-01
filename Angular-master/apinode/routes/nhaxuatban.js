var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM nhaxuatban ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM nhaxuatban where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});
router.post('/edit/:id',function(req,res){
    var TenNXB = req.body.TenNXB;
    var DiaChi = req.body.DiaChi;
    var SDT = req.body.SDT;
    var email = req.body.email;
   
    var id = req.params.id;
        
    var query = "UPDATE nhaxuatban SET TenNXB=?,DiaChi=?,SDT=?,email=?  WHERE id = ?";
    db.query(query, [TenNXB, DiaChi, SDT, email,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
router.post('/add', function(req, res) {
    var TenNXB = req.body.TenNXB;
    var DiaChi = req.body.DiaChi;
    var SDT = req.body.SDT;
    var email = req.body.email;
   

    var query = "INSERT INTO nhaxuatban(TenNXB, DiaChi, SDT, email) VALUES (?,?,?,?)";
    db.query(query, [TenNXB, DiaChi, SDT, email], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from nhaxuatban where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;