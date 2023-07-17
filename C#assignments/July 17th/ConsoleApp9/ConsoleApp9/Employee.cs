using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp9
{
    internal class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfJoin { get; set; }
        public string Department { get; set; }
        public double Salary { get; set; }
        public char Jobtype  { get; set; }
        public Employee(int id,string name,DateTime doj,string dept,double sal, char jobtype)
        {
            Id = id;
            Name = name;
            DateOfJoin = doj;
            Department = dept;
            Salary = sal;
            Jobtype =jobtype;
        }
}
    interface IBonusCalculator
    {
        double CalculateBonus(Employee emp);
    }
    class PermanentEmployeeBonusCalculator : IBonusCalculator
    {
        public double CalculateBonus(Employee emp)
        {
            return 0.2 * emp.Salary;
        }
    }
    class ContractEmployeeBonusCalculator : IBonusCalculator
    {
        public double CalculateBonus(Employee emp)
        {
            return 0.15 * emp.Salary;
        }
    }
}
