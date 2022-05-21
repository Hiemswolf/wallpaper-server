import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const dir = path.join(__dirname, '../public/wallpapers');
const fileNames = fs.readdirSync(dir);


app.get('/', (req, res) => {
	res.sendFile(path.join(dir, fileNames[Math.floor(Math.random() * fileNames.length)]));
});

export default app;
