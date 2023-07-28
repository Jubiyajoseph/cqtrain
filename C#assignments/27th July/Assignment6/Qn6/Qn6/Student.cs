using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Qn6
{
    public class Student
    {
        public int Id { get; private set; }
        public string Name { get; set; }
        public  double Mark { get; set; }

        public Student(int id,string name,double mark)
        {
            Id = id;
            Name = name;
            Mark = mark;
        }
    }
}
