using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement
{
    internal class Employee
    {
        public int Empid { get; set; }
        public string Empname { get; set; }
        public double Empsalary { get; set; }
        public Employee(int id)
        {
            Empid = id;
        }
        public Employee(int id,string name) : this(id)
        {
            Empname = name;
        }
        public Employee(int id, string name, double salary) : this(id,name)
        {
            Empsalary = salary;
        }

        public void Display()
        {
            Console.WriteLine("Employee Id=" + Empid);
            Console.WriteLine("Name of the Employee=" + Empname);
            Console.WriteLine("Salary of the Employee=" + Empsalary);
        }
    }
}
