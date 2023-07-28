using Qn6;

List<Student> students = new List<Student>();
students.Add(new Student(1, "John Doe", 85));
students.Add(new Student(2, "Liam Smith", 70));
students.Add(new Student(3, "Mary James", 62));
students.Add(new Student(4, "Davide James", 55));
students.Add(new Student(5, "Lionel Messi", 100));
students.Add(new Student(6, "Ronaldo", 90));
students.Add(new Student(7, "Neymar", 85));


//Find the student with max mark
Student maxmark = students.MaxBy(x => x.Mark);
Console.WriteLine("The Person with maximum Mark is :" + maxmark.Name);

//List the student whose mark is greater than 75
var stdMark = students.Where(student => student.Mark > 75).Select(x => x);
Console.WriteLine("\nStudents with Mark greater than 75:");
foreach (var item in stdMark)
{
    Console.WriteLine("Name: " + item.Name);
    Console.WriteLine("Mark: " + item.Mark);
}

//List the student whose name ends with ‘s’
var stdName = students.Where(student => student.Name.EndsWith('s')).Select(x => x);
Console.WriteLine("\nStudent whose Name ends with s:");
foreach (var item in stdName)
{
    Console.WriteLine("Name: " + item.Name);
}

// Find the student whose name is ‘Lionel Messi’
var stdntName = students.Where(student => student.Name.Equals("Lionel Messi")).Select(x => x);
Console.WriteLine("\nDetails of Student Lionel Messi :");
foreach (var item in stdntName)
{
    Console.WriteLine("Id: " + item.Id);
    Console.WriteLine("Name: " + item.Name);
    Console.WriteLine("Mark: " + item.Mark);
}

//Display the mark of the student whose name is ‘Ronaldo’
var studentdName = students.Where(student => student.Name.Equals("Ronaldo")).Select(x => x);
Console.WriteLine("\nMark of Student whose Name is Ronaldo :");
foreach (var item in studentdName)
{
    Console.WriteLine(item.Mark);
}