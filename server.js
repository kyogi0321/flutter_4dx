const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9002;

// 빌드된 Flutter 웹 파일을 제공
const webDir = path.join(__dirname, 'build/web');
app.use(express.static(webDir));

// 기본 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(webDir, 'index.html'));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});
