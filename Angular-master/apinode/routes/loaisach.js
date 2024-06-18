var router= require('express')();
var db=require('./dbconnect');


router.get('/',(req,res)=>{
    var query='SELECT * FROM loaisach ;';
    db.query(query,(error,result)=>{
        if(error) res.status(500).send('Loi ket noi csdl');
        res.json(result);
    });

});
router.get('/get-one/:id',function(req,res){
    var query ='SELECT * FROM loaisach where id= '+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });
});

/* router.post('/edit/:id',function(req,res){
    var TheLoai= req.body.TheLoai;
    console.log(req.body);
    var query="update loaisach set TheLoai='"+TheLoai+"', updated_at=NOW() where id='"+req.params.id+"'";
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);

    });

});
 */

router.post('/edit/:id',function(req, res) {
    var TheLoai = req.body.TheLoai;
    var id = req.params.id;

    var query = "UPDATE loaisach SET TheLoai = ?  WHERE id = ?";
    
    db.query(query, [TheLoai, id], function(err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send('Lỗi truy vấn');
        }
        res.json(result);
    });
});

router.post('/saveFileName', (req, res) => {
    const { Anh } = req.body;
    
    const query = "INSERT INTO loaisach (Anh) VALUES (?)";
    
    db.query(query, [Anh], (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Lỗi truy vấn');
      }
      res.json(result);
    });
  });
router.post('/add',function(req,res){
    var TheLoai= req.body.TheLoai;
    var query="insert into loaisach (TheLoai) values('"+TheLoai+"')";
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.status(200).json(result);

    });

});
router.get('/remove/:id',function(req,res){
    console.log(req.params.id);
    var query='delete from loaisach where id='+req.params.id;
    db.query(query,function(error,result){
        if(error) res.status(500).send('Loi cau lenh truy van');
        res.json(result);
    });

});
module.exports = router;