"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
const fs_1 = __importDefault(require("fs"));
const Server = http
    .createServer((req, res) => {
    // console.log(req.url, req.socket.remoteAddress, req.headers, req.method);
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write('<body><form  action="/message" method="POST"><label>Username</label><input type="text" name="username">');
        res.write('<label>Password</label><input type="text" name="Password">');
        res.write('<button type="submit">send</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        console.log("call");
        const data = [];
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
            fs_1.default.writeFileSync("demo.txt", message);
            res.write("<html>");
            res.write(`<body><form  action="/" method="POST"><h1>Welcome ${username}</h1>`);
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
//# sourceMappingURL=Service.js.map