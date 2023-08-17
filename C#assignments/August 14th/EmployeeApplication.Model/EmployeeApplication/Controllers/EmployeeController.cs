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

        [HttpPost("AddEmployee")]
        public void post(EmployeeDuplicate emp)
        {
            Employee employee = new Employee();
            employee.FirstName = emp.FirstName;
            employee.LastName = emp.LastName;
            employee.PhoneNumber = emp.PhoneNumber;
            employee.Email = emp.Email;
            _context.Add(employee);
            _context.SaveChanges();
        }

        [HttpDelete("DeleteEmployeeById")]
        public void delete(Employee emp, int id)
        {
            emp.Id = id;
            _context.Remove(emp);
            _context.SaveChanges();
        }

        [HttpGet("GetById")]
        public IActionResult getById(int id)
        {
            return Ok(_context?.Employees.Find(id));
        }

        [HttpGet("GetAll")]
        public IActionResult getAll()
        {
            return Ok(_context.Employees);
        }

        [HttpPut("UpdateName")]
        public void put(int id, string fname,string lname)
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
