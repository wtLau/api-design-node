const http = require("http");

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    console.log("hello from the server");
    response.end();
  }
});

server.listen(3001, () => {
  console.log("server on http://localhost:3001");
});
