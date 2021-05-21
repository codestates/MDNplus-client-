const express = require("express");
const cors = require("cors");
const upload = require('./fileupload');
const multer = require('multer');

const app = express();

app.use('/uploads', express.static('uploads'))

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  })
);

app.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    console.log(req.file)
    // console.log('원본파일명 : ' + req.file.originalname)
    // console.log('저장파일명 : ' + req.file.filename)
    // console.log('크기 : ' + req.file.size)
    return res.json({data: req.file});
  });
});

app.listen(4000, () => {
  console.log("4000번 포트 서버 실행");
});
