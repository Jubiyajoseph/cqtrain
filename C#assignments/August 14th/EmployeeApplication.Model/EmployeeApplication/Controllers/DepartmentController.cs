using EmployeeApplication.Model.Models;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController: ControllerBase
    {
        public readonly EmployeeApplicationContext _context;
        public DepartmentController(EmployeeApplicationContext dbContext)
        {
            _context = dbContext;
        }

        [HttpPost]
        public void Post(DepartmentDuplicate dept)
        {
            Department department = new Department();
            department.Name = dept.Name;
            department.LocationId = dept.LocationId;
            _context.Add(department);
            _context.SaveChanges();
        }

        [HttpDelete("deleteDepartmentById/{id}")]
        public void Delete(Department dept, int id)
        {
            dept.Id = id;
            _context.Remove(dept);
            _context.SaveChanges();
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_context.Departments.Find(id));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Departments);
        }

        [HttpPut("{id}")]
        public void Put(int id, string name)
        {
            var idvalue = _context?.Departments.Find(id);
            if (idvalue != null)
            {
                idvalue.Name = name;
                _context?.SaveChanges();
            }
        }
    }
}
