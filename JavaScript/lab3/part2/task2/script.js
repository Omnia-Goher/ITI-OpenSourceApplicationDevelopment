let phoneBook_array = []
do{
    let operation = prompt(`Phone book app \n\nEnter the operation you want to perform (add/search) : `)
    let flag
    if(operation == "add"){
        let contact = prompt("Enter Contact name : ")
        let phoneNumber = prompt("Enter phone number : ")
        let obj = {contact: contact,
            phone :phoneNumber}
        phoneBook_array.push(obj)
    }else if(operation == "search"){
        let input = prompt("Enter contact name or phone number to search : ")
        let res = false,name,phone
        for(let i=0;i<phoneBook_array.length;i++){
            if(phoneBook_array[i].contact == input || phoneBook_array[i].phone == input){
                name = phoneBook_array[i].contact
                phone = phoneBook_array[i].phone
                res = true
            }
        }
        if(res){
            alert(`Contact info is \nname : ${name} \nphone number : ${phone}`)
        }else{
            alert("Contact not found!!")
        }
    }else{
        alert("Please Enter correct operation")
    }
    flag = confirm(`Do You want to continue?`);
    if (!flag){
        break;
    }
}
while(true)