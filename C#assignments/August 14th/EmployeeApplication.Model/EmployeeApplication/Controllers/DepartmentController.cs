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

        [HttpPost("AddDepartment")]
        public void post(DepartmentDuplicate dept)
        {
            Department department = new Department();
            department.Name = dept.Name;
            department.LocationId = dept.LocationId;
            _context.Departments.Add(department);
            _context.SaveChanges();
        }

        [HttpDelete("DeleteDepartmentById")]
        public void delete(Department dept, int id)
        {
            dept.Id = id;
            _context.Remove(dept);
            _context.SaveChanges();
        }

        [HttpGet("GetById")]
        public IActionResult getById(int id)
        {
            return Ok(_context.Departments.Find(id));
        }

        [HttpGet("GetAll")]
        public IActionResult getAll()
        {
            return Ok(_context.Departments);
        }

        [HttpPut("Update")]
        public void put(int id, string name)
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
