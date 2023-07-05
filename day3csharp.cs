// print first 20 numbers using for loop
using System.Runtime.Intrinsics.Arm;

int i;
Console.WriteLine("First 20 numbers");
for (i=0; i<20; i++)
{
    Console.WriteLine(i+1);
}

//print odd numbers less than 50 using while loop
Console.WriteLine("Odd numbers less than 50 ");
int j = 0;
while(j<50)
{
    if(j%2 !=0)
    {
        Console.WriteLine(j);
    }
    j++;
}

//Large among 3 numbers
int firstnum = 13;
int secondnum = 8;
int thirdnum = 20;

if(firstnum > secondnum)
{
    if(firstnum > thirdnum)
    {
        Console.WriteLine("First number is largest");
    }
    else 
    {
        Console.WriteLine("Third number is largest");
    }
}
else if (secondnum > thirdnum)
{
    Console.Write("Second Number is the largest");
}
else
{
    Console.Write("Third Number is the largest");
}

//Reverse of a number
int n, r, rev=0;
Console.Write("To find the reverse of a number,Enter a number: ");
n = Convert.ToInt32(Console.ReadLine());
while (n != 0)
{
    r = n % 10;
    rev = rev * 10 + r;
    n /= 10;
}
Console.Write("Reversed Number: " + rev);

//Sum of digits of a number
int num, sum = 0, m;
Console.Write("\nTo find the sum of digits of a number,Enter a number: ");
num = Convert.ToInt32(Console.ReadLine());
while (num > 0)
{
    m = num % 10;
    sum = sum + m;
    num = num / 10;
}
Console.Write("Sum of digits of a number= " + sum);


//Sum of the squares of the digits of a number
int number, digit, sqsum = 0;
Console.WriteLine("\nTo find the sum of squares of digits of a number,Enter a number");
number = Convert.ToInt32(Console.ReadLine());
while(number > 0)
{
    digit = number % 10;
    sqsum += digit * digit;
    number = number / 10;
}
Console.WriteLine("Sum of the squares of the digits of a number=" + sqsum);

//check prime number
int nmbr, count = 0;
Console.WriteLine("\nTo check a prime number,Enter any number");
nmbr = Convert.ToInt32(Console.ReadLine());
for (int k = 1; k <= nmbr; k++)
{
    if (nmbr % k == 0)
    {
        count++;
    }
}
if(count == 2)
{
    Console.WriteLine("It is a prime number");
}
else
{
    Console.WriteLine("Not a prime number");
}

//Print all prime numbers below 100
Console.WriteLine("\nPrime numbers below 100");
for (i=2; i<100; i++)
{
    for(j=2; j<i; j++)
    {
        if( i % j == 0)
        {
            break;
        }
    }
    if(i == j)
    {
        Console.WriteLine(i);
    }
}

//fibonacci series
int n1 = 0, n2 = 1, n3, numbr;
Console.WriteLine("Print fibonacci series,Enter the number of elements: ");
numbr = Convert.ToInt32(Console.ReadLine());
Console.Write(n1 + " " + n2 + " ");   
for (i = 2; i < numbr; i++)    
{
    n3 = n1 + n2;
    Console.WriteLine(n3 + " ");
    n1 = n2;
    n2 = n3;
}

//check palindrome
int input, d, reverse = 0, temp;
Console.Write("To find the palindrome of a number,Enter a number: ");
input = Convert.ToInt32(Console.ReadLine());
temp = input;
while (input != 0)
{
    d = input % 10;
    reverse = reverse * 10 + d;
    input /= 10;
}
if( temp == reverse)
{
    Console.WriteLine("Palindrome number");
}
else
{
    Console.WriteLine("Not a palindrome number");
}

//Tax calculation program, input the amount and display the tax
double Amount,amt;
Console.WriteLine("\nEnter the amount=");
amt = Convert.ToDouble(Console.ReadLine());
if( amt < 1000)
{
    
    Amount = amt + amt * 5 / 100;
    Console.WriteLine("Amount after adding tax=" + Amount);
}
else if( amt >= 10000 && amt <= 15000)
{
    Amount = amt + amt * 7.5 / 100;
    Console.WriteLine("Amount after adding tax=" + Amount);
}
else if (amt >=15000 && amt < 20000)
{
    Amount = amt + amt * 10 / 100;
    Console.WriteLine("Amount after adding tax=" + Amount);
}
else if (amt >= 20000 && amt < 25000)
{
    Amount = amt + amt * 12.5 / 100;
    Console.WriteLine("Amount after adding tax=" + Amount);
}
else
{
    Amount= amt + amt * 15 / 100;
    Console.WriteLine("Amount after adding tax=" + Amount);
}

//Input a character from console and display the sports name corresponding to it

Console.WriteLine("Enter a character=");
test: char ch = char.Parse(Console.ReadLine());
switch (ch)
{
    case 'c':
        Console.WriteLine("Cricket");
        break;

    case 'f':
        Console.WriteLine("Football");
        break;
    case 'h':
        Console.WriteLine("Hockey");
        break;

    case 't':
        Console.WriteLine("Tennis");
        break;

    case 'b':
        Console.WriteLine("Badminton");
        break;

    default:
        Console.WriteLine("Invalid input, please try again");
        goto test;
        break;
}

//print pattern
for (int i = 0; i < 5; i++)
{
    for (int j = 0; j <= i; j++)
    {
        Console.Write("* ");
    }
    Console.Write("\n");
}