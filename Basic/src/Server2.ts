import * as http from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    setTimeout(() => {
      console.log("Hello123");
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<html>");
      res.write("<h1>Hello World</h1>");
      res.write("</html>");
    }, 2000);
    console.log("2145");
  }
);
server.listen(3001);

const Server2 = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<html>");
    res.write("<h1>Not Found</h1>");
    res.write("</html>");
  }
);
Server2.listen(3002);
