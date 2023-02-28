do {
    let age =  Number(prompt("Enter Your age :"));
    let msg = "Do You want to continue ?"
    let result
    if (!isNaN(age) && age > 0) {
        if (age > 0 && age <= 10) {
            result = confirm(`Child \n${msg}`);
        }
        else if (age > 10 && age <= 18) {
             result = confirm(`Teenager \n${msg}`);
        }
        else if (age > 18 && age <= 50) {
            result = confirm(`Grown up \n${msg}`);

        }
        else {
            result = confirm(`Old \n${msg}`);
        }
        if (!result){
            break;
        }
    }
    else{
        break;
    } 

} while (true)