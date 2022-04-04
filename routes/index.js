var express = require('express');
var router = express.Router();
var multer = require('multer');
//định nghĩa chức năng multer
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null,Date.now()+ file.originalname );
  },
});

var upload = multer(
    { storage: storage,
    // limits : {
    //  fileSize : 2 * 1024
    // }
    });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/profile',upload.single('avatar'), function(req, res, next) {
  res.render('index', { title: 'update thành công' +'kiểm tra thư mục uploads'});
});
//up nhiều file
router.post('/profilearray',upload.array('avatar',5), function(req, res, next) {
  res.render('index', { title: 'update thành công' +'kiểm tra thư mục uploads'});
});
module.exports = router;
