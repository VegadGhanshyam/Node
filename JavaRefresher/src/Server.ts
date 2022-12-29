import * as http from "http";



const Server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<html>");
  res.write("<h1>NodeJs is Future</h1>");
  res.write("</html>");
}).listen(3003)

