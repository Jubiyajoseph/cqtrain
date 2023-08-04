CREATE DATABASE School

use School

CREATE TABLE Student(
Id INT IDENTITY,
[Name] VARCHAR(25),
[Address] VARCHAR(35),
Class VARCHAR(15),
Mark DECIMAL(5,2),
CONSTRAINT PK_Student PRIMARY KEY(Id)
)

--drop table Student

GO
CREATE OR ALTER PROC AddStudent
@StudName VARCHAR(25),
@StudAddress VARCHAR(35),
@StudClass VARCHAR(15),
@Mark DECIMAL(5,2)
AS
BEGIN
     INSERT INTO Student([Name],[Address] ,Class ,Mark)
	             VALUES(@StudName, @StudAddress, @StudClass, @Mark)

				 return @@identity;

END
GO
EXEC AddStudent @StudName="Jubiya", @StudAddress="xyz", @StudClass=CS2, @Mark=86.6
EXEC AddStudent @StudName="Riya", @StudAddress="ABC", @StudClass=IT2, @Mark=96.4
EXEC AddStudent @StudName="Ashwin", @StudAddress="pqr", @StudClass=EE2, @Mark=72.6



GO
CREATE OR ALTER PROC GetStudentDetails
AS
BEGIN
     SELECT * FROM Student

END
GO