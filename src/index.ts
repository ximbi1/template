import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/alumnes', function (req, res) {
    const alumnes: any[] =  [ 'Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
    res.send(alumnes);

});



app.get('/ufs', function (req, res) {
    const uf: any[] =  ['M8', 'M7', 'M6','M09', 'M10', 'M11', 'M12', 'M13' ];
    res.send(uf);

}
);

app.get('/alumnes/:uf', function (req, res) {
    const alumnes: any[] =  ['Pepito', 'Juanito', 'Jaimito', 'Pablito', 'Pedrito'];
    res.send(alumnes);

}
);




app.get('/', function (req, res) {

    res.send(`  
<form action="/my-handling-form-page" method="post">
<div>
  <label for="name">Name:</label>
  <input type="text" id="name" name="user_name">
</div>
<div>
  <label for="mail">E-mail:</label>
  <input type="email" id="mail" name="user_email">
</div>
<div>
  <label for="msg">Message:</label>
  <textarea id="msg" name="user_message"></textarea>
</div>
<div class="button">
  <button type="submit">Send your message</button>
</div>
</form>`)
res.redirect('/otra-pagina')



}

);


app.listen(process.env.HOST_PORT, () => console.log(`Tamo escuxando el puerto ${process.env.HOST_PORT}!`));
