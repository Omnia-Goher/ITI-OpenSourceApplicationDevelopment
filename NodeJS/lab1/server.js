const http = require("http")
const fs = require('fs');
var data
var result
http.createServer((req,res)=>{
    if(req.url == "/" || req.url == "/favicon.ico"){
        res.end("please enter url ex: /2/3/add")
    }
    else{
        var content
        data = req.url.split("/")
        console.log(data)
        if(data.length == 4 && !isNaN(data[1]) && !isNaN(data[2]) && (data[3] == "add" || data[3] == "sub" || data[3] == "multiply" || data[3] == "div")){
            data[1] = parseInt(data[1])
            data[2] = parseInt(data[2])
            if(data[3] == "add"){
                result = data[1] + data[2]
                content = `${data[1]} + ${data[2]} = ${result}`
            }else if(data[3] == "sub"){
                result = data[1] - data[2]
                content = `${data[1]} - ${data[2]} = ${result}`
            }else if(data[3] == "multiply"){
                result = data[1] * data[2]
                content = `${data[1]} * ${data[2]} = ${result}`
            }else if(data[3] == "div"){
                result =  Math.round((data[1] / data[2]) * 100) / 100
                content = `${data[1]} / ${data[2]} = ${result}`
            }
            res.end(content)
            fs.appendFile('result.txt', `\nrequest: ${content}`, err => {
                if (err) {
                  console.error(err);
                }else{
                    console.error("file written successfully");
                }
            });
        }
       else{
         res.end("please enter url ex: /2/3/add")
       }
    }  
})
.listen("7000",()=>{console.log("listening to port");})




