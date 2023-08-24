using EmployeeApplication.Model.Models;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EmpAngularAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        public readonly EmployeeApplicationContext _context;
        public EmployeeController(EmployeeApplicationContext dbContext)
        {
            _context = dbContext;
        }

        [HttpPost]
        public void Post(Employee emp)
        {
            _context.Add(emp);
            _context.SaveChanges();
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_context?.Employees.Find(id));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Employees);
        }

        [HttpDelete("{id}")]
        public void delete(int id)
        {
            Employee employee = new Employee();
            employee.Id = id;
            _context?.Remove(employee);
            _context?.SaveChanges();
        }
        [HttpPut]
        public void Put(Employee emp, int id)
        {
            var idvalue = _context?.Employees.Find(id);
            if (idvalue != null)
            {
                idvalue.FirstName = emp.FirstName;
                idvalue.LastName = emp.LastName;
                idvalue.DateOfBirth = emp.DateOfBirth;
                idvalue.Age = emp.Age;
                idvalue.DateOfJoining = emp.DateOfJoining;
                idvalue.Country = emp.Country;
                _context?.SaveChanges();
            }
        }
    }
}
