var router = require('express')();
var db = require('./dbconnect');

router.get('/',(req,res)=>{
    var query = 'Select * from blog'
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi');
        res.json(result);
    })
});

router.get('/get-one/:id',function(req,res){
    var query = "Select * from blog where id = " + req.params.id;
    db.query(query,function(err,result) {
        if(err) res.status(500).send('Loi cau lenh truy van')
        res.json(result);
    })
});


router.post('/edit/:id', function(req, res) {
    var TenBlog = req.body.TenBlog;
    var Anh = req.body.Anh;
    var Ngaynhap = req.body.Ngaynhap;
    var MaNguoiDung = req.body.MaNguoiDung;
    var Mota = req.body.Mota;

    var id = req.params.id;
    var query = "UPDATE blog SET TenBlog=?,Anh=?,Ngaynhap=?,MaNguoiDung=?,Mota=?  WHERE id = ?";
    
    db.query(query, [TenBlog,Anh,Ngaynhap,MaNguoiDung,Mota,id], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});


router.post('/add', function(req, res) {
   
    var TenBlog = req.body.TenBlog;
    var Anh = req.body.Anh;
    var Ngaynhap = req.body.Ngaynhap;
    var Mota = req.body.Mota;
    var MaNguoiDung = req.body.MaNguoiDung;
    
    var query = "INSERT INTO blog(TenBlog, Anh,Ngaynhap, MaNguoiDung, Mota) VALUES (?,?,?,?,?)";
    
    db.query(query, [TenBlog,Anh,Ngaynhap,MaNguoiDung,Mota,], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});

// router.get("/remove/:id",function(req,res){
//     var query = 'delete from tintuc where id ='+ req
// })

router.get("/remove/:id", function(req, res) {
    var id = req.params.id;
    var query = "DELETE FROM blog WHERE id = ?";

    db.query(query, [id], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});

module.exports=router;