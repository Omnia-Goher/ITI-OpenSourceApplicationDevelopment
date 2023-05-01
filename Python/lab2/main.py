from classes.Employee import Employee
from classes.Manager import Manager
import sys

class Main:
    def main(self):
        flag = True
        while flag:
            print()
            print("Welcome to the Employee Database")
            print("Please select an option:")
            print("1. Add new employee")
            print("2. List employees")
            print("3. Transfer employee by ID")
            print("4. Fire employee by ID")
            print("5. Quit program")

            choice = input("Enter your choice: ")
            if choice == "1":
                self.add_employee()
            elif choice == "2":
                Employee.List_employees()
            elif choice == "3":
                id = int(input("Please enter the ID of the employee you want to transfere: "))
                new_department = input("Please enter the new department for this employee: ") 
                Employee.transfer(id, new_department)
            elif choice == "4":
                id = int(input("Please enter the ID of the employee you want to fire: "))
                Employee.fire(id)
            elif choice == "5":
                print("Exiting the program...")
                sys.exit()
            else:
                print("Invalid choice. Please try again.")

    def add_employee(self):
        print("Please enter your data:")
        first_name = input("First Name: ")
        last_name = input("Last name: ")
        age = int(input("Age: "))
        department = input("Department: ")
        salary = float(input("Salary: "))
        if input("Is this a manager or not? (y/n): ").lower() == "y":
            managed_department = input("Managed department: ")
            Manager(first_name, last_name, age, department, salary, managed_department)
        else:
            Employee(first_name, last_name, age, department, salary)

        

app = Main()
app.main()
