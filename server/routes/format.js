const express = require('express');
const path = require('path');
const multer  = require('multer');
const FormatController = require('../controllers/formatController');
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination: 'server/public/images/uploads',
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({
  storage: storage
}).single('image-1');

// router.post('/', FormatController.root);
router.post('/', (req, res, err) => {
  upload(req, res, (err) => {
    if(err) {
      console.log(err);
    } else {
      // console.log(req.file);
      FormatController.root(req, res);
    }
  });
});

module.exports = router;