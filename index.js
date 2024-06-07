const express = require('express');
const path = require('path');

const app = express();

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
