const http = require("http");
const fs = require('fs');

let mainHTML = fs.readFileSync("../clientSide/main.html").toString()
let styleCSS = fs.readFileSync("../clientSide/style.css").toString()
let scriptJS = fs.readFileSync("../clientSide/script.js").toString()
let usersjs = fs.readFileSync("../clientSide/users.js").toString()
let icon = fs.readFileSync("../icon/document.ico");
let welcomeHTML
let file
let users_array = []

http.createServer((req, res) => {
    if (req.method == "GET") {
        switch (req.url) {
            case "/main.html":
                res.writeHead(200, "Ok", { "content-type": "text/html" })
                res.write(mainHTML)
                break

            case "/welcome.html":
                res.writeHead(200, "Ok", { "content-type": "text/html" })
                res.write(welcomeHTML);
                break

            case "/style.css":
                res.writeHead(200, "Ok", { "content-type": "text/css" })
                res.write(styleCSS)
                break

            case "/script.js":
                res.writeHead(200, "Ok", { "content-type": "text/javascript" })
                res.write(scriptJS)
                break

            case "/users.js":
                res.writeHead(200, "Ok", { "content-type": "text/javascript" })
                res.write(usersjs)
                break

            case "/data/clients.json":
                res.writeHead(200, "ok", { "content-type": "application/json" })
                res.write(file)
                break

            case "/favicon.ico":
                res.writeHead(200, "ok", { "content-type": "image/vnd.microsoft.icon" })
                res.write(icon)
                break

            default:
                res.write("Page Entered Not Found")
                break
        }
        res.end()
    }
    else if (req.method == "POST"){
        var user = {}
        req.on("end", () => {
            welcomeHTML = fs.readFileSync("../clientSide/welcome.html").toString();
            welcomeHTML = welcomeHTML.
                replace("{username}", user.username).
                replace("{email}", user.email).
                replace("{phone}", user.phone).
                replace("{address}", user.address);
            let data = fs.readFileSync('../data/clients.json');
            users_array = JSON.parse(data);
            users_array.push(user);
            fs.writeFileSync('../data/clients.json', JSON.stringify(users_array));
            file = fs.readFileSync("../data/clients.json").toString();
            res.write(welcomeHTML);
            res.end();
        })
        req.on("data", (result) => {
            let data = result.toString().split("&");
            for (let item of data) {
                let temp = item.split("=");
                if (temp[0] == "password" || temp[0] == "repeatedPassword") {
                    continue
                }
                user[temp[0]] = decodeURIComponent(temp[1].replaceAll("+", " "))
            }
        })
       
    }
})
    .listen("7000",
        () => {
            console.log("listen on Port 7000")
        }
    )