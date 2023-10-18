import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
app.get('/alumnes', function (req, res) {
    const alumnes = ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
    res.send(alumnes);
});
app.get('/ufs', function (req, res) {
    const uf = ['M8', 'M7', 'M6', 'M09', 'M10', 'M11', 'M12', 'M13'];
    res.send(uf);
});
app.get('/alumnes/:uf', function (req, res) {
    const alumnes = ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
    res.send(alumnes);
});
app.listen(process.env.HOST_PORT, () => console.log(`Tamo escuxando el puerto ${process.env.HOST_PORT}!`));
//# sourceMappingURL=index.js.map