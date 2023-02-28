let str = prompt("Please Enter any word:")

let a_count = 0, e_count = 0, o_count = 0, u_count = 0, i_count = 0

let str_array = Array.from(str);

str_array.forEach(char => {
    switch (char) {
        case 'a':
            a_count++;
            break;
        case 'o':
            o_count++;
            break;
        case 'e':
            e_count++;
            break;
        case 'u':
            u_count++;
            break;
        case 'i':
            i_count++;
            break;
        default:
            break;
    }
})

alert(`number of a = ${a_count} 
number of o = ${o_count}
number of e = ${e_count}
number of u = ${u_count}
number of i = ${i_count}`)
