import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webpackOptions from '../webpack.config';

const compiler = webpack(webpackOptions);


const PORT = process.env.PORT || 3000;
let app = express();

app.use(middleware(compiler, {
  publicPath: '/js'
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));

app.get('/', function(req, res) {
    res.render('notes');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
