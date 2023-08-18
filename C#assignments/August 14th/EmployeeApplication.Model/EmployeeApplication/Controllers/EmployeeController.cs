using EmployeeApplication.Model.Models;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController: ControllerBase
    {
        public readonly EmployeeApplicationContext _context;
        public EmployeeController(EmployeeApplicationContext dbContext)
        {
            _context = dbContext;
        }

        [HttpPost]
        public void Post(EmployeeDuplicate emp)
        {
            Employee employee = new Employee();
            employee.FirstName = emp.FirstName;
            employee.LastName = emp.LastName;
            employee.PhoneNumber = emp.PhoneNumber;
            employee.Email = emp.Email;
            employee.DepartmentId = emp.DepartmentId;
            _context.Add(employee);
            _context.SaveChanges();
        }

        [HttpDelete("deleteEmployeeById/{id}")]
        public void Delete(Employee emp, int id)
        {
            emp.Id = id;
            _context.Remove(emp);
            _context.SaveChanges();
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_context?.Employees.Find(id));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Employees);
        }

        [HttpPut("updateName")]
        public void Put(int id, string fname,string lname)
        {
            var idvalue = _context?.Employees.Find(id);
            if (idvalue != null)
            {
                idvalue.FirstName = fname;
                idvalue.LastName = lname;
                _context?.SaveChanges();
            }
        }
    }
}
