let shape = prompt("Enter name of the shape")
let area
if (shape == "circle") {
    let radius = Number(prompt("Enter circle radius (Area =  π × r^2): "))
    if (!isNaN(radius)) {
        area = Math.PI * Math.pow(radius, 2)
        area = Math.round(area * 100) / 100
        alert(`Circle area is π × r^2 = ${area}`)
    } else {
        alert("please Enter correct number")
    }
} else if (shape == "triangle") {
    let hight = Number(prompt("Enter triangle hight (Area = ½ × b × h) : "))
    let base = Number(prompt("Enter triangle base (Area = ½ × b × h) : "))
    if (!isNaN(hight) && !isNaN(base)) {
        area = 0.5 * hight * base
        alert(`Triangle area is ½ × b × h  = ${area}`)
    } else {
        alert("please Enter correct number")
    }

} else if (shape == "square") {
    let length = Number(prompt("Enter square length of side (Area = a^2) : "))
    if (!isNaN(length)) {
        area = Math.pow(length,2)
        alert(`Square area is ½ × b × h  = ${area}`)
    } else {
        alert("please Enter correct number")
    }
} else if (shape == "rectangle") {
    let length = Number(prompt("Enter rectangle length (Area = l × w) : "))
    let width = Number(prompt("Enter rectangle width (Area = l × w) : "))
    if (!isNaN(length) && !isNaN(width)) {
        area = length * width
        alert(`Rectangle area is l × w  = ${area}`)
    } else {
        alert("please Enter correct number")
    }
} else if (shape == "parallelogram") {
    let base = Number(prompt("Enter parallelogram base (Area = b × h) : "))
    let hight = Number(prompt("Enter parallelogram vertical hight (Area = b × h) : "))
    if (!isNaN(base) && !isNaN(hight)) {
        area = base * hight
        alert(`Parallelogram area is b × h  = ${area}`)
    } else {
        alert("please Enter correct number")
    }
} else if (shape == "trapezium") {
    let length1 = Number(prompt("Enter parallelogram a length of parallel side (Area = ½(a+b) × h) : "))
    let length2 = Number(prompt("Enter parallelogram b length of parallel sides (Area = ½(a+b) × h) : "))
    let hight = Number(prompt("Enter parallelogram hight (Area = ½(a+b) × h) : "))
    if (!isNaN(length1) && !isNaN(length2) && !isNaN(hight)) {
        area = (0.5*(length1 + length2)) * hight
        alert(`Trapezium area is ½(a+b) × h  = ${area}`)
    } else {
        alert("please Enter correct number")
    }
} else if (shape == "ellipse") {
    let minor_axis = Number(prompt("Enter ellipse minor axis (Area = πab , a = ½ minor axis) : "))
    let majot_axis = Number(prompt("Enter ellipse major axis (Area = πab , b = ½ major axis) : "))
    if (!isNaN(majot_axis) && !isNaN(minor_axis)) {
        area = Math.PI * (0.5*minor_axis) * (0.5*majot_axis)
        area = Math.round(area * 100) / 100
        alert(`Ellipse area is πab = ${area}`)
    } else {
        alert("please Enter correct number")
    }
}
else {
    alert("Please Enter correct shape")
}