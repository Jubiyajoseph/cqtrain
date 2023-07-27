// See https://aka.ms/new-console-template for more information

using EmployeeModel;

Employee emp1 = new Employee("John Doe",15000,"Contract");
Employee emp2 = new Employee("Liam Smith", 20000,"Permanent");
Employee emp3 = new Employee("Mary James", 15000,"Contract");

int numberofEmployees = Employee.EmployeeCount();
Console.WriteLine( "Total number of Employees="+ numberofEmployees);