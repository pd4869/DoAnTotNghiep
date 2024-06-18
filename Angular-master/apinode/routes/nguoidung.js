var router= require('express')();
var db=require('./dbconnect');

router.get('/',(req,res)=>{
    var query='SELECT * FROM nguoidung ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM nguoidung where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});
/* router.post('/edit/:id',function(req,res){
    var HoTen = req.body.HoTen;
    var NgaySinh = req.body.NgaySinh;
    var GioiTinh = req.body.GioiTinh;
    var Anh = req.body.Anh;
    var DiaChi = req.body.DiaChi;
    var Email = req.body.Email;
    var DienThoai = req.body.DienThoai;
    var TrangThai = req.body.TrangThai;

    var id = req.params.id;
        
    var query = "UPDATE nguoidung SET HoTen=?,NgaySinh=?,GioiTinh=?,Anh=?,DiaChi=?,Email=?,DienThoai=?,TrangThai=?  WHERE id = ?";
    db.query(query, [HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email, DienThoai, TrangThai,id],function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

}); */

router.post('/edit/:id', function(req, res) {
    var HoTen = req.body.HoTen;
    var NgaySinh = req.body.NgaySinh;
    var GioiTinh = req.body.GioiTinh;
    var Anh = req.body.Anh;
    var DiaChi = req.body.DiaChi;
    var Email = req.body.Email;
    var DienThoai = req.body.DienThoai;
    var TrangThai = req.body.TrangThai;
    var id = req.params.id;
    
    // Kiểm tra dữ liệu đầu vào
    if (!HoTen || !NgaySinh || !GioiTinh || !Anh || !DiaChi || !Email || !DienThoai || !TrangThai) {
        return res.status(400).send('Thiếu thông tin cần thiết');
    }

    var query = "UPDATE nguoidung SET HoTen=?, NgaySinh=?, GioiTinh=?, Anh=?, DiaChi=?, Email=?, DienThoai=?, TrangThai=? WHERE id = ?";
    
    db.query(query, [HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email, DienThoai, TrangThai, id], function(error, result) {
        if (error) {
            console.error("Lỗi truy vấn: ", error);
            return res.status(500).send('Lỗi câu lệnh truy vấn: ' + error.message);
        }
        res.json(result);
    });
});
router.post('/add', function(req, res) {
    var HoTen = req.body.HoTen;
    var NgaySinh = req.body.NgaySinh;
    var GioiTinh = req.body.GioiTinh;
    var Anh = req.body.Anh;
    var DiaChi = req.body.DiaChi;
    var Email = req.body.Email;
    var DienThoai = req.body.DienThoai;
    var TrangThai = req.body.TrangThai;

    var query = "INSERT INTO nguoidung(HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email, DienThoai, TrangThai) VALUES (?,?,?,?,?,?,?,?)";
    db.query(query, [HoTen, NgaySinh, GioiTinh, Anh, DiaChi, Email, DienThoai, TrangThai], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from nguoidung where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;