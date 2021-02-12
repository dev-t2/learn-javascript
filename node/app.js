import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send('Hello world!!'));

app.listen(port, () => console.log(`${port}번 포트에서 서버 실행 중...`));
