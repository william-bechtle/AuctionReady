const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const imageUploadPath = '../build/images';
var a;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, imageUploadPath)
  },
  filename: function(req, file, cb) {
    cb(null, a =`${file.fieldname}_dateVal_${Date.now()}_${file.originalname}`)
  }
})

app.use(express.static(path.join(__dirname, '..', 'build')));


app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const imageUpload = multer({storage: storage})

app.post('/images', imageUpload.single('file'), (req, res) => {
  console.log(a)
  console.log('POST request received to /images.');
  console.log('Axios POST body: ', req.body);
  res.send(a);
})

app.listen( 4000, process.env.IP, function() {
  console.log(`Server is running on port 4000`);
});