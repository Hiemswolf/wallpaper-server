import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const dir = path.join(__dirname, '../public/wallpapers');
const fileNames = fs.readdirSync(dir);

interface Wallpaper {
	name: string,
	title: string,
	url: string
}

let wallpapers: Array<Wallpaper> = [];

for (const fileName of fileNames) {
	wallpapers = [...wallpapers, {
		name: fileName,
		title: fileName.slice(0, -4),
		url: `/wallpapers/${fileName}`
	}];
}


app.get('/', (req, res) => {
	res.send(wallpapers[Math.floor(Math.random() * wallpapers.length)]);
});

export default app;
