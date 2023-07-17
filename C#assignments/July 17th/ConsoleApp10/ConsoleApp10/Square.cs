using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp10
{
    class Square : Shape
    {
        public int Length { get; set; }
        public Square(int noOfSides,int length) : base(noOfSides)
        {
            NoOfSides = noOfSides;
            Length = length;
        }
        public override double CalculateArea()
        {
            double area = Length * Length;
            return area;
        }
    }
}
