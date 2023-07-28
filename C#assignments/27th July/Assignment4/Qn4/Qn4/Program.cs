// See https://aka.ms/new-console-template for more information

using Qn4;
MyGenericComparer<int> obj1 = new MyGenericComparer<int>();
Console.WriteLine("Larger value= "+ obj1.Compare(5,8));

MyGenericComparer<double>obj2 = new MyGenericComparer<double>();
double value = obj2.Compare(16.9, 5.25);
Console.WriteLine("Larger Value= " + value);

MyGenericComparer<string> obj3 = new MyGenericComparer<string>();
string val = obj3.Compare("Hi", "hi");
Console.WriteLine("Larger Value= " + val);

