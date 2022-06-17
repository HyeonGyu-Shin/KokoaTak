import express from "express";
import path from "path";

const server = express();

server.use('/public', express.static(path.join(__dirname, "public")));

server.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});


server.listen(3000, () => {
    console.log(`server start!`);
})
