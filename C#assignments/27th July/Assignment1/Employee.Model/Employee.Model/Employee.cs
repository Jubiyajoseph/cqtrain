using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeModel
{
    public class Employee
    {
        public string Id { get; private set; }
        public string  Name { get; set; }
        public double Salary { get; set; }
        public  string  EmployeeType { get; set; }

        private static int count;
        static Employee()
        {
            count = 0;
        }
        public Employee(string name, double salary, string employeeType)
        {
            int a = count + 1000;
            Id = "Emp" + a.ToString();
            count++;
            Name = name;
            Salary = salary;
            EmployeeType = employeeType;
        }
        public static int EmployeeCount()
        {
            return count;
        }
    }
}
