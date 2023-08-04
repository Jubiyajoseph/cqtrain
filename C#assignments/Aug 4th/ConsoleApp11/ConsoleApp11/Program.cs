// See https://aka.ms/new-console-template for more information

using ConsoleApp11;

Student student1 = new Student();
//int id = student1.AddStudentDetails("Habibullah","jkl","EC1",58.9);
//int id = student1.AddStudentDetails("Jeena", "mno", "CE2", 78.3);
int id = student1.AddStudentDetails("Hasif", "jmofl", "EC1", 58.9);
Console.WriteLine("ID=" + id);
student1.GetDetails();
