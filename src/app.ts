import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/wallpapers/Pack.jpg'));
});

export default app;