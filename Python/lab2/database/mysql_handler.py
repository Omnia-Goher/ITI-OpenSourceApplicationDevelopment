import mysql.connector
from mysql.connector import Error

class MySQLHandler:

    def __init__(self, host, user, password, database,table):
        self.host = host
        self.user = user
        self.password = password
        self.database = database
        self.table=table
        self.connection = None
                 
    def connect(self):
        try:
            self.connection=mysql.connector.connect(
                host=self.host,
                user=self.user,
                password=self.password,
                database=self.database
            )
        except Error as err:
            print(f"SQL Error ... Error Connecting to DataBase: {err}")

    def disconnect(self):
        if self.connection:
            self.connection.close()
    
    def insert_employee(self,data):
        sql = f"INSERT INTO {self.table} (first_name, last_name, age, department, salary) VALUES (%s, %s, %s, %s, %s)"
        values = (data.first_name, data.last_name, data.age, data.department, data.salary)
        try:
            self.connect()
            cursor = self.connection.cursor()
            cursor.execute(sql,values)
            self.connection.commit()
            employee_id= cursor.lastrowid
            cursor.close()
            self.disconnect()
            return employee_id
        except Error as err:
            print("SQL Error ... Error in inserting the record: ", err)

    def update_department(self,id,new_department):
        sql = f"UPDATE {self.table} SET department = %s where id = %s"
        values=(new_department,id)
        try:
            self.connect()
            cursor = self.connection.cursor()
            cursor.execute(sql,values)
            self.connection.commit()
            cursor.close()
            self.disconnect()
        except Error as err:
           print("SQL Error ... Error Updating department: ", err)

    def update_managed_department(self,id,managed_department):
        query = f"UPDATE {self.table} SET managed_department = %s where id = %s"
        values=(managed_department,id)
        try:
            self.connect()
            cursor = self.connection.cursor()
            cursor.execute(query,values)
            self.connection.commit()
            cursor.close()
            self.disconnect()
        except mysql.connector.Error as err:
           print("SQL Error ... Error Updating Managed Department: ", err)
    
    def get_all_employees(self):
        sql = '''SELECT id, first_name, last_name, age, department, salary, managed_department
                    FROM employees'''
        try:
            self.connect()
            cursor = self.connection.cursor()
            cursor.execute(sql)
            employees = cursor.fetchall()
            cursor.close()
            self.disconnect()
            return employees
        except mysql.connector.Error as err:
            print(f"SQL Error ... Error in Retrieving Employees data from Database: {err}")  


    def delete(self,id):
        sql=f"""delete from {self.table} where id={id}"""
        try:
            self.connect() 
            cursor = self.connection.cursor()
            cursor.execute(sql)
            self.connection.commit()
            cursor.close()
            self.disconnect()  
        except Error as e:
           print("SQL Error ... Error in Deleting Employee record: ", e)