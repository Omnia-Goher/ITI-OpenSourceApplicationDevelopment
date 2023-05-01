from classes.Employee import Employee
from database.mysql_handler import MySQLHandler
from prettytable import PrettyTable

class Manager(Employee):

    mysql_handler = MySQLHandler("localhost","root","",'employees',"employees")
    all_employees =  [list(row) for row in mysql_handler.get_all_employees()]

    def __init__(self,first_name,last_name,age,department,salary,Managed_department):
       super().__init__(first_name,last_name,age,department,salary)
       self.Managed_department = Managed_department
       Manager.mysql_handler.update_managed_department(self.id,self.Managed_department)

    @classmethod
    def show(cls,id):
        manager = None
        flag = False
        for man in Manager.all_employees:
           if man[0] == id:
               manager = man
               print(manager)
               if manager:
                    cls.print_manager([manager])
                    flag = True
               break
        if not flag:
            print(f"No Manager with id {id} exists in Database.")

    def print_manager(manager):
        table = PrettyTable()
        table.field_names = ["ID", "First Name","Last Name","Age","Department", "Salary","Managed Department"]
        if manager:
            for man in manager:
                if man[6]:
                    salary = "confidential"
                else:
                    salary = man[5]
                table.add_row([man[0],man[1], man[2],man[3], man[4],salary,man[6]])
            print(table)
        else:
            print("No Manager data in Database")
