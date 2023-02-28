async function fetchData() {
    var request = await fetch('https://reqres.in/api/users?page=2');
    var data = await request.json();
    return data.data;
}

fetchData().then(data => {
    console.log(data)
    data.forEach(element => {
        console.log(element)
        var div = document.createElement('div');
        div.className = 'col-md-4 w-25 card testimonial-card p-0 w-25 mt-2 mb-3 mx-3';
        div.innerHTML = `
                        <div class="card-up aqua-gradient"></div>
                        <div class="avatar mx-auto white">
                            <img style="height:113px" src="${element.avatar}"
                                class="rounded-circle img-fluid" alt="woman avatar">
                        </div>
                        <div class="card-body text-center">
                            <h4 class="card-title font-weight-bold">${element.first_name} ${element.last_name}</h4>
                            <hr>
                            <p>${element.email}</p>
                        </div>
        `
        document.getElementById("card-container").appendChild(div)
    });

})