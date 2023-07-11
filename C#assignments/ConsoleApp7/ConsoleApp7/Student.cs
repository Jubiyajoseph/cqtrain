using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp7
{
    internal class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Mark { get; set; }
        public char Grade  { get;  }

        public Student(int id,string name,int mark)
        {
            Id = id;
            Name = name;
            Mark = mark;
            Grade = Calculate(Mark);
        }
        public char Calculate(int Mark)
        {
            if (Mark >= 90)
                return 'A';
            else if (Mark >= 80 && Mark < 90)
                return 'B';
            else if (Mark >= 70 && Mark < 80)
                return 'C';
            else if (Mark < 70)
                return 'D';
            else
                return 'F';
        }
        public void Display()
        {
            Console.WriteLine("StudentId="+ Id);
            Console.WriteLine("Srtudent name="+ Name);
            Console.WriteLine("Mark="+ Mark);
            Console.WriteLine("Grade : " + Grade);
        }
    }
}
