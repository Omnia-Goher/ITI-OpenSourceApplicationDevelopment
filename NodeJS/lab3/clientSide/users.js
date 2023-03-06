async function getData() {
    let response = await fetch("../data/clients.json")
    let data = await response.json();
    return data;
}

let show_users = document.getElementById("show-users");
let table = document.getElementById("users");

show_users.addEventListener('click', () => {
    let table_body = document.createElement("tbody");
    getData().then(data => {
        for (let item of data) {
            let tr = document.createElement("tr");
            for (let key in item) {
                let td = document.createElement("td");
                td.textContent = item[key];
                tr.appendChild(td);
            }
            table_body.appendChild(tr);
        }
    })
    table.appendChild(table_body)
})
