class Person {
    constructor(name, age, hours, meals) {
        this.name = name;
        this.age = age;
        this.Sleep(hours);
        this.Eat(meals);
    }
    Sleep(hours) {
        this.sleep_mode = (hours == 7) ? `Happy` : (hours > 7) ? `Lazy` : `Tired`;
    }
    Eat(meals) {
        switch (meals) {
            case 1:
                {
                    this.health_rate = `50 Health Rate`;
                    break;
                }
            case 2:
                {
                    this.health_rate = `75 Health Rate`;
                    break;
                }
            case 3:
                {
                    this.health_rate = `100 Health Rate`;
                    break;
                }
        }
        return this.health_rate
    }
}

class Employee extends Person {
    #id;
    #salary;
    constructor(id, name, email, salary, age, isManager, workinghours, sleephours, meals) {
        super(name, age, sleephours, meals);
        this.#id = id;
        this.#salary = salary < 1000 ? 1000 : salary;
        this.email = email;
        this.isManager = isManager;
        this.work(workinghours);
    }
    get id() {
        return this.#id;
    }
    get salary() {
        return this.#salary;
    }
    set id(id) {
        this.#id = id;
    }
    set salary(salary) {
        this.#salary = salary;
    }
    work(hours) {
        this.workMood = (hours == 8) ? `Happy` : (hours > 8) ? `Lazy` : `Tired`;
    }
}

class Office { 
    employees = []
    hire(employee) {
        (this.employees).push(employee);
    }
    fire(id) {
        this.employees = this.employees.filter((emp) => emp.id != id);
    }
    getEmployee(id) {
        let employee = null;
        employee = (this.employees).find((emp) => emp.id == id);
        if (employee != null) {
            if (employee.isManager == true) {
                alert(`Manager is :` + printEmployee(employee, false));
            }
            else {
                console.log("employee")
                alert(`Employee is :` + printEmployee(employee, true));
            }
            return true
        }
        else
            return false;
    }
    getAllEmployess() {
        let i = 1, result, flag;
        let normal_employees = this.employees.filter((emp) => emp.isManager == false);
        if (normal_employees.length == 0 && managers.length == 0) {
            return false;
        }
        if (normal_employees.length != 0) {
            flag = true;
            normal_employees.forEach(emp => {
                result = `Employee no ${i} :`;
                alert(result + printEmployee(emp, flag));
                i++;
            })
        }
        else {
            result = "No Employees\n";
        }
        let managers = this.employees.filter((emp) => emp.isManager == true);
        i = 1;
        if (managers.length != 0) {
            flag = false;
            result = "Managers :";
            managers.forEach(manager => {
                result = `Manager no ${i} :`;
                alert(result + printEmployee(manager, flag));
                i++;
            })
        }
        else {
            result = "No Managers\n"
        }
        return true;
    }
}

let office = new Office();

function addEmployee(isManager) {
    let id = Number(prompt("Enter id:"));
    let name = prompt("Enter name: ");
    let age = Number(prompt("Enter age : "));
    let salary = Number(prompt("Enter salary : "));
    let email = prompt("Enter email : ");
    let meals = Number(prompt("Enter number of meals in day: "));
    let sleepHours = Number(prompt("Enter number of hours you sleep in day:"));
    let workingHours = Number(prompt("Enter number of working Hours you spend in day: "));

    if (!isNaN(id) && !isNaN(age) && !isNaN(salary) && !isNaN(meals) && !isNaN(sleepHours) && !isNaN(workingHours) &&
        name != null && name != "" && age > 0 && email != null && email != "") {
        let employee = new Employee(id, name, email, salary, age, isManager, workingHours, sleepHours, meals);
        office.hire(employee);
        return true
    }
    else {
        return false;
    }
}

function printEmployee(obj, flag) {
    let salary = '';
    if (flag) {
        salary = `Salary : ${obj.salary}`
    }
    return ` \n\nName : ${obj.name}\n Id : ${obj.id}\n ${salary}\n Email : ${obj.email}\n Age : ${obj.age}\n Working Mode : ${obj.workMood}\n Sleep Mode : ${obj.sleep_mode}\n Health Rate : ${obj.health_rate}`;
}

function officeApp() {
    loop: do {
        let choice = Number(prompt(` add new employee -> 1\n show all employees -> 2\n get employee -> 3\n fire employee -> 4\n\n Enter number to chose :`));
        if (!isNaN(choice) && choice > 0 && choice < 5) {
            switch (choice) {
                case 1: {
                    let type = Number(prompt(` add normal employee -> 1\n adding manager -> 2\n\n Enter number to chose:`));
                    if (!isNaN(type)) {
                        let isManager, outRange;
                        if (type == 1) {
                            isManager = false
                        } else if (type == 2) {
                            isManager = true;
                        } else {
                            outRange = true;
                        }
                        if (!outRange) {
                            if (addEmployee(isManager)) {
                                alert("employee added sucessfully");
                            }
                            else {
                                alert("please refresh and enter correct data");
                                break loop;
                            }
                        }
                        else {
                            alert("please enter correct choice");
                        }
                    }
                }
                    break;
                case 2: {
                    if (!office.getAllEmployess()) { 
                        alert("no employee data"); 
                    }
                }
                    break;
                case 3: {
                    let id = Number(prompt("Enter id :"));
                    if (!isNaN(id)) {
                        if (!office.getEmployee(id)) {
                            alert("ID Not Found please enter correct ID !!!");
                        }
                    }
                    else {
                        alert("please enter correct id data");
                    }
                }
                    break;
                case 4: {
                    let id = Number(prompt("Enter id :"));
                    if (!isNaN(id)) {
                        if (office.getEmployee(id)) {
                            office.fire(id);
                            alert(`Employee with id = ${id} is fired `);
                        }
                    }
                }
                    break;
            }
        }
        else{
            break loop;
        }
        let keep = confirm("Do you want to continue?");
        if (!keep){
            break loop;
        }
    } while (true)
}

officeApp();
