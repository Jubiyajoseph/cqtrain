using EmployeeApplication.Model.Models;
using EmployeeApplication.Repository.Context;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController: ControllerBase
    {
        public readonly EmployeeApplicationContext _context;
        public LocationController(EmployeeApplicationContext dbContext)
        {
            _context = dbContext;
        }

        [HttpPost("AddLocation")]
        public void post(Location location)
        {
            _context.Locations.Add(location);
            _context.SaveChanges();
        }

        [HttpDelete("DeleteLocationById")]
        public void delete(Location location,int id)
        {            
            location.Id = id;
            _context.Remove(location);
            _context.SaveChanges();
        }

        [HttpGet("GetById")]
        public IActionResult getById(int id)
        {
            return Ok(_context?.Locations.Find(id));
        }

        [HttpGet("GetAll")]
        public IActionResult getAll()
        {
            return Ok(_context.Locations);
        }

        [HttpPut("Update")]
        public void put(int id,string name)
        {
            var idvalue = _context?.Locations.Find(id);
            if(idvalue!=null)
            {
                idvalue.Name = name;
                _context?.SaveChanges();
            }
           
        }
    }
}
