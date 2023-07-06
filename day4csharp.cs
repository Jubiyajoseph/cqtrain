using System;

namespace ConsoleApp4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Length of the string
            Console.WriteLine("Enter any word=");
            string str = Console.ReadLine();
            int length = str.Length;
            Console.WriteLine("Length of the entered word= " + length);


            //Reverse of the string
            string reverse = "";
            int Lastindex = str.Length - 1;
            while (Lastindex >= 0)
            {
           
                reverse = reverse + str[Lastindex];
                Lastindex--;
            }
            Console.WriteLine("Reverse word is {0}", reverse);

            //Index of a particular character
            string name = "jubiya";
            int index1 = name.IndexOf('y');
            Console.WriteLine("The Index Value of character 'y' is " + index1);

            //Append Hai at the beginning of the given string
            string modify = name.Insert(0, "Hai! ");
            Console.WriteLine("After appending\n"+ modify);

            //last character of the string
            char lastCharacter = name[name.Length - 1];
            Console.WriteLine("Last character of the name=" + lastCharacter);

            //Replace ‘a’ by ‘_’
            Console.WriteLine("NewString: " + name.Replace('a', '_'));

            //Calculate occurrence of given character in a string.
            string fullname = "jubiyajoseph";
            char ch = 'j';
            int count = 0;
            foreach (char c in fullname)
            {
                if (c == ch)
                {
                    count++;
                }
            }
            Console.WriteLine("Occurence of character 'j' is " + count);

            //Print the current date and time in different formats
            DateTime dateTime = DateTime.Now;
            Console.WriteLine(dateTime.ToString("F"));
            Console.WriteLine(dateTime.ToString("s"));

            //Find the difference between two dates
            var prevday = new DateTime(2023, 7, 5);
            var today = DateTime.Now;
            var diffOfDates = today - prevday;
            Console.WriteLine("Difference between two dates=" + diffOfDates);
            
            //Display Day, Month, Year of a given Date
            Console.Write("Current day=");
            Console.WriteLine(DateTime.Now.ToString("dddd"));
            Console.Write("Current month=");
            Console.WriteLine(DateTime.Now.ToString("MMMM"));
            Console.Write("Current year=");
            Console.WriteLine(DateTime.Now.ToString("yyyy"));
            
            //add 10 days to a given date
            DateTime newdate = new DateTime(2023, 7, 12);
            Console.WriteLine("Add 10 Days =" + newdate.AddDays(10));

            //Single Calculate  method, Calculate out add, out sub, out mult, out div
            float add, sub, mul, div;
            calculate(16,8, out add, out sub, out mul, out div);
            Console.WriteLine("Sum of two numbers=" + add);
            Console.WriteLine("Difference of two numbers=" + sub);
            Console.WriteLine("Product of two numbers=" + mul);
            Console.WriteLine("Quotient =" + div);
        }
        public static void calculate(float a, float b, out float add, out float sub, out float mul, out float div)
        {
            add = a + b;
            sub = a - b;
            mul = a * b;
            div = a / b;

        }
    }
}
