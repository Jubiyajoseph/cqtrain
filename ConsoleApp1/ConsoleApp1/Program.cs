// See https://aka.ms/new-console-template for more information

Console.WriteLine("Enter ur name=");
string name = Console.ReadLine();

Console.WriteLine("Enter ur age= ");
int age = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Enter sex: ");
char gender = Convert.ToChar(Console.ReadLine());

Console.WriteLine("Enter a bolean value=");
bool b = Convert.ToBoolean(Console.ReadLine());

Console.WriteLine("\nDetails");
Console.WriteLine("Name=" + name);
Console.WriteLine("Age=" + age);
Console.WriteLine("Sex=" + gender);
Console.WriteLine("Boolean value=" + b);