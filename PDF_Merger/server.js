const express = require('express');
const path = require("path");
const multer = require('multer');
const upload = multer( {dest: 'uploads/'})
const { mergePdfs } = require('./test');
const app = express();
app.use("/static", express.static("public"))
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"index.html"));
})

app.post("/merge", upload.array('pdfs',12), async (req,res,next)=> {
    console.log(req.files)
    await mergePdfs(path.join(__dirname,req.files[0].path), path.join(__dirname,req.files[1].path))
    res.redirect("/static/merged.pdf" );
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})