function Result()
{
    const students = [
        {
          "FirstName": "John",
          "LastName": "Doe",
          "Age": 20,
          "Department": "Computer Science"
        },
        {
          "FirstName": "Jane",
          "LastName": "Smith",
          "Age": 22,
          "Department": "Physics"
        },
        {
          "FirstName": "Michael",
          "LastName": "Johnson",
          "Age": 21, 
          "Department": "Mathematics"
        },
        {
          "FirstName": "Sarah",
          "LastName": "Williams",
          "Age": 19,
          "Department": "Computer Science"
        },
        {
          "FirstName": "Robert",
          "LastName": "Brown",
          "Age": 23,
          "Department": "Mathematics"
        },
        {
          "FirstName": "Emily",
          "LastName": "Davis",
          "Age": 20,
          "Department": "Computer Science"
        }
      ];

      //1. List the students whose department is computer science.
      const CSstudent = students.filter(x => x.Department === "Computer Science");
      console.log(CSstudent)

      //2. List the first name of students whose age is greater than  21
      const age = students.filter(x => x.Age > 21);
      const SName = age.map(x => x.FirstName);
      console.log(SName);

      //3. Check whether a student having a first name as Robert is present in the Computer Science Department. 
      //The result should be in boolean type
      const StudentCheck = students.some(x => x.FirstName === "Robert" && x.Department === "Computer Science");
      console.log(StudentCheck);

      //4. Check whether there is any student whose age is greater than 23 is studying in the Maths department.
      //The result should be in boolean type
      const Scheck=students.some(x => x.Age > 23 && x.Department === 'Mathematics')
      console.log(Scheck);


      //5. Check whether all the students are above an age group of 18.The result should be in boolean type.
      const StudCheck = students.every(x => x.Age >= 18)
      console.log(StudCheck);

      //6. Assuming that there is only one student having a first name as John, Print his department name.
      // const Studname=students.filter(x => x.FirstName === "John")
      // const Dname=Studname.map(x => x.Department)
      // console.log(Dname)       ///return an object

      const john = students.find(x => x.FirstName === "John");
      if (john)
      {
        console.log(john.Department);       //return a string
      }

}