// See https://aka.ms/new-console-template for more information

int[] Array = { 1, 2, 3, 4, 5 };

List<int> newList = new List<int>();

Console.WriteLine("Array elements\n");
foreach (int num in Array)
{
    Console.WriteLine(num);
    newList.Add(num * 2);
}
Console.WriteLine("\nNew Elements  ");
foreach (int i in newList)
{
    Console.WriteLine(i );
}
