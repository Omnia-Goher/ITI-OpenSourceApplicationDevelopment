let size = Number(prompt("How many numbers you want to get the sum and avg for?"))

if(!isNaN(size)){
    let arr = []
    let sum=0,avg,flag=false
    for(let i=0;i<size;i++){
        let num = Number(prompt("Enter number " + i+1 + " : "))
        if(!isNaN(num)){
            arr.push(num)
            sum = sum + num
        }
        else{
            alert("Please Enter correct numbers")
            flag=true
            break
        }
    }
    if(!flag){
        avg = sum / size
        alert(`the sum = ${sum} \nthe average = ${avg}`)    
    }
}else{
    alert("Please Enter correct size")
}