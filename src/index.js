import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 3000;
let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/css', express.static(path.join(__dirname, '/css')));

app.get('/', function(req, res) {
    res.render('notes');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
