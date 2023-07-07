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

//Rewrite the above program using stringbuilder

using System;
using System.Text;

namespace ConsoleApp6
{
    internal class Program
    {
        static void Main(string[] args)
        {            
            Console.WriteLine("Enter the input string:");
            string input = Console.ReadLine();
            StringBuilder sb = new StringBuilder(input);
            Console.WriteLine("Length of the String = " + sb.Length);

            Console.WriteLine("Enter the character to be found:");
            char charval = char.Parse(Console.ReadLine());
            int index = 0;
            for (int i = 0; i < sb.Length; i++)
            {
                if (charval == sb[i])
                {
                    index = i;
                    break;
                }
            }
            Console.WriteLine($"Character {charval} found at index : {index} ");

            
            StringBuilder sb1 = new StringBuilder();
            for (int i = sb.Length - 1; i >= 0; i--)
            {
                sb1.Append(sb[i]);
            }
            
            Console.WriteLine("Reverse of the string=" + sb1);

            Console.WriteLine("After appending Hai in the beginning=");
            Console.WriteLine(sb.Insert(0, "Hai "));

            Console.WriteLine("Replace 'a' with '_'");
            Console.WriteLine(sb.Replace("a", "_"));

            Console.WriteLine("Enter the character to check occurance:");
            char occur = char.Parse(Console.ReadLine());
            int freq = 0;
            for (int i = 0; i < sb.Length; i++)
            {
                if (sb[i] == occur)
                {
                    freq++;
                }
            }
            Console.WriteLine($"No. of occurrences of char {occur} : {freq}");

        }
    }
}
//Write a program to do the below datetime calculation

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
using System;
using System.Text;

namespace ConsoleApp4
{
    internal class Program
    {
        static void Main(string[] args)
        {
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