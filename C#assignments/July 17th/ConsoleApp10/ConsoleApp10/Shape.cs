using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp10
{
  abstract class Shape
    {
        public int NoOfSides { get; set; }

        public void DisplayNoOfSides()
        {        
            Console.WriteLine("Number of sides="+ NoOfSides );
        }
        public Shape(int noOfSides)
        {
            NoOfSides = noOfSides;
        }
        public abstract double CalculateArea();
    }
}
