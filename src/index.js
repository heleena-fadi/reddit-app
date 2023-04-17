const app = require('./app');

app.listen(app.get('port'), () => {
  console.log('server is running in http://localhost:5000');
});