from database.mysql_handler import MySQLHandler
from prettytable import PrettyTable



class Employee:

    mysql_handler = MySQLHandler("localhost","root","",'employees',"employees")
    all_employees =  [list(row) for row in mysql_handler.get_all_employees()]

    def __init__(self,first_name,last_name,age,department,salary):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.department = department
        self.salary = salary
        self.Managed_department = None
        self.id = self.insert() 
        Employee.all_employees.append(self)
        
        
    def insert(self):
        return Employee.mysql_handler.insert_employee(self)
    
    @staticmethod
    def transfer(id,new_department):
        employee = None
        flag = False
        for emp in Employee.all_employees:
           if emp[0] == id:
               employee = emp
               if employee:
                    employee[4] = new_department
                    Employee.mysql_handler.update_department(id,new_department)
                    flag = True
                    print(f"Employee's Department with id {id} is Updated.")
               break
        if not flag:
            print(f"No Employee with id {id} exists in Database.")

    @staticmethod
    def fire(id):
       employee = None
       flag = False
       for emp in Employee.all_employees:
           if emp[0] == id:
               employee = emp
               if employee:
                    Employee.mysql_handler.delete(id)
                    Employee.all_employees =  [list(row) for row in Employee.mysql_handler.get_all_employees()]
                    print(Employee.all_employees)
                    flag = True
                    print(f"Employee with id {id} is fired.")
               break
       if not flag:
            print(f"No Employee with id {id} exists in Database.")

    @classmethod
    def List_employees(cls):
        employees = Employee.mysql_handler.get_all_employees()
        cls.print_employee_table(employees)

    def print_employee_table(employees):
        table = PrettyTable()
        table.field_names = ["ID", "First Name","Last Name","Age","Department", "Salary","Managed Department"]
        if employees:
            for emp in employees:
                if emp[6]:
                    salary = "confidential"
                else:
                    salary = emp[5]
                table.add_row([emp[0],emp[1], emp[2],emp[3], emp[4],salary,emp[6]])
            print(table)
        else:
            print("No Employee data in Database")

    @classmethod
    def show(cls,id):
        employee = None
        flag = False
        for emp in Employee.all_employees:
           if emp[0] == id:
               employee = emp
               print(employee)
               if employee:
                    cls.print_employee_table([employee])
                    flag = True
               break
        if not flag:
            print(f"No Employee with id {id} exists in Database.")
