// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            else {
                event.preventDefault()
                event.stopPropagation()
                var username = document.getElementById("validationCustomUsername").value
                var password = document.getElementById("inputPassword").value
                console.log(username, password)
                if (username == "omnia" && password === "12345") {
                    document.getElementById("pass").classList.remove("d-none");
                    document.getElementById("fail").classList.add("d-none");
                }
                else {
                    document.getElementById("fail").classList.remove("d-none");
                    document.getElementById("pass").classList.add("d-none");
                }
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

document.body.style.backgroundColor = "#2c89e5";