'use strict';
const app = require('./app');
const PORT = process.env.PORT || 9000;

app.listen(PORT, (err) => {
  err ? 
    console.log(`Что-то пошло не так: ${err}`) : 
    console.log(`Сервер на порту ${PORT}`);
});