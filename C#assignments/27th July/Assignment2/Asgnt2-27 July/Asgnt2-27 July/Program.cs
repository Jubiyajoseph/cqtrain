// See https://aka.ms/new-console-template for more information

using Asgnt2_27_July;

Console.Write("Enter a character: ");
try
{
    char input = Console.ReadKey().KeyChar;
    Console.WriteLine("\nSports name=");
    switch (input)
    {
        case 'c':
            {
                Console.WriteLine("Cricket");
                break;
            }
        case 'f':
            {
                Console.WriteLine("Football");
                break;
            }
        case 'h':
            {
                Console.WriteLine("Hockey");
                break;
            }
        case 't':
            {
                Console.WriteLine("Tennis");
                break;
            }
        case 'b':
            {
                Console.WriteLine("Badminton");
                break;
            }
        default: throw new InvalidUserInputException("Invalid Input.");
    }
}
catch (InvalidUserInputException e)
{
    Console.WriteLine(e.Message);
}
Console.ReadLine();

