using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp10
{
    class Triangle : Shape
    {
        public int SideLength1 { get; set; }
        public int SideLength2 { get; set; }
        public int SideLength3 { get; set; }

        public Triangle(int noOfSides,int sideLength1, int sideLength2,int sideLength3): base(noOfSides)
        {
            SideLength1 = sideLength1;
            SideLength2 = sideLength2;
            SideLength3 = sideLength3;
        }
        public override double CalculateArea()
        {
            double s = (SideLength1+ SideLength2+ SideLength3)/2;
            double area = Math.Sqrt(s*(s- SideLength1)* (s - SideLength2)* (s - SideLength3));
            return area;
        }
    }
}
