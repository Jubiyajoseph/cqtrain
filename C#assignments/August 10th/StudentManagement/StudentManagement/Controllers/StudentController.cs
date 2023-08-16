using Microsoft.AspNetCore.Mvc;
using StudentManagement.Models;

namespace StudentManagement.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        [HttpPost]
        public void Insert(string name, string address, string classname, decimal mark)
        {
            Query q = new Query();
            Student student = new Student();
            student.Name = name;
            student.Address = address;
            student.Class = classname;
            student.Mark = mark;
            q.AddStudentDetails(student);

        }

        [HttpGet]
        public IActionResult Get()
        {
            Query q = new Query();
            return Ok(q.GetDetails());
        }


    }
}
