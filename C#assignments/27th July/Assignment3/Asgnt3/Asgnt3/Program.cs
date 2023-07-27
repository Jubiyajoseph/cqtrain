// See https://aka.ms/new-console-template for more information


using Asgnt3;

Console.WriteLine("Enter some words=");
string input = Console.ReadLine();
Console.WriteLine("Enter the word to find the occurence=");
string word = Console.ReadLine();
int value = StringExtensionClass.WordCount(input,word);
Console.WriteLine("Occurence of the word "+ word + " is "+ value);