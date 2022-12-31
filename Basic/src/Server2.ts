import * as http from "http";

const server=http.createServer((req: http.IncomingMessage,res:http.ServerResponse)=>{
    setTimeout(() => {
        console.log("Hello");
        res.writeHead(200, { "content-type": "text/html" });
        res.write("<html>");
        res.write("<h1>Hello World</h1>");
        res.write("</html>");
    }, 4000);
});
server.listen(3001);
