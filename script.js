/* Домашнее задание
Напишите HTTP сервер и реализуйте два обработчика, где:
- По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
- А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
- Также реализуйте обработку несуществующих роутов (404).
- * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница */

const http = require("http");
let countMain = 0;
let countAbout = 0;
function serverLintener(req, res) {
  if (req.url === "/") {
    countMain++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<h1>Корневая страница</h1><a href='/about'>Перейти на страницу About</a><p>Счетчик Главной страницы: ${countMain}</p>`
    );
  } else if (req.url === "/about") {
    countAbout++;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<h1>Страница About</h1><a href='/'>Перейти на Главную страницу</a><p>Счетчик страницы About: ${countAbout}</p>`
    );
  } else {
    console.log(req.url);
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      "<img src='https://img.freepik.com/free-vector/404-error-concept-with-crying-baby_23-2147738894.jpg?t=st=1718193069~exp=1718196669~hmac=a949c878f5d761d0018a8f3693022fd2e7fac8e3f1ee96d684c1fa2b89c81932&w=740'><br><a href='/'>Перейти на Главную страницу</a>"
    );
  }
}
const server = http.createServer(serverLintener);
const port = 3000;
server.listen(port);
console.log("Сервер работает на порту " + port);
