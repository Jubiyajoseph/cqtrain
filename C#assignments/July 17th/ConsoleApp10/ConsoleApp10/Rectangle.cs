using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp10
{
    class Rectangle: Shape
    {
        public int Length { get; set; }
        public int Breadth { get; set; }

        public Rectangle(int noOfSides,int length,int breadth) : base(noOfSides)
        {
            Length = length;
            Breadth = breadth;
        }
        public override double CalculateArea()
        {
            double area = Length * Breadth;
            return area;
        }
    }
}
