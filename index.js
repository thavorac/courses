const express = require("express");
const path = require("path");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload({
  limits: { fileSize: 50* 1024 * 1024}
}));
app.use(express.static(path.join(__dirname, 'public')));
app.post('/upload', (req, res) => {
  // upload file function
  let image;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  image = req.files.image;
  uploadPath = __dirname + '/public/uploads/' + image.name;

  // Use the mv() method to place the file somewhere on your server
  image.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
})
app.listen(3000);