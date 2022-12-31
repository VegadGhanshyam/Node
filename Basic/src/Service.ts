import * as http from "http";
import fs from "fs";
const Server = http
  .createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // console.log(req.url, req.socket.remoteAddress, req.headers, req.method);
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write(
        '<body><form  action="/message" method="POST"><label>Username</label><input type="text" name="username">'
      );
      res.write('<label>Password</label><input type="text" name="Password">');
      res.write('<button type="submit">send</button></form></body>');
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      console.log("call");
      const data: any = [];
      req.on("data", (chunk) => {
        data.push(chunk);
      });
      req.on("end", () => {
        const parseBody = Buffer.concat(data).toString();
        console.log(parseBody);
        const message = parseBody;
        const indexof1 = message.indexOf("=");
        const indexof2 = message.indexOf("&");
        const username = message.slice(indexof1 + 1, indexof2);
        console.log(username);

        fs.writeFileSync("demo.txt", message);
        res.write("<html>");
        res.write(
          `<body><form  action="/" method="POST"><h1>Welcome ${username}</h1>`
        );

        res.write('<button type="submit">previous</button></form></body>');
        res.write("</html>");
      });

      //   res.writeHead(302, { Location: "/message" });
      //   return res.end();
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<html>");
    res.write("<h1>NodeJs is Future</h1>");
    res.write("</html>");
  })
  .listen(3000);
