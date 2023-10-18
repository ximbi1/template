import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/alumnes', function (req, res) {
  const alumnes: any[] = ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito', 'Juanete'];
  res.send(alumnes);

});



app.get('/ufs', function (req, res) {
  const uf: any[] = ['M8', 'M7', 'M6', 'M09', 'M10', 'M11', 'M12', 'M13'];
  res.send(uf);

}
);


app.get('/total', function (req, res) {
  const alumnes: any[] = ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
  const uf: any[] = ['M8', 'M7', 'M6', 'M09', 'M10', 'M11', 'M12', 'M13'];
  const total: any[] = [alumnes, uf];
  res.send(total);

}
);

app.get('/', function (req: express.Request, res: express.Response) {
  const alumnes: any[] = ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
  const uf: any[] = ['M8', 'M7', 'M6', 'M09', 'M10', 'M11', 'M12', 'M13'];
  res.send({alumnes: alumnes, uf: uf});
});

app.listen(process.env.HOST_PORT, () => console.log(`Tamo escuxando el puerto ${process.env.HOST_PORT}!`));
