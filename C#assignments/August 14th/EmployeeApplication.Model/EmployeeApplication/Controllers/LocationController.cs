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

        [HttpPost]
        public void Post(Location location)
        {
            _context.Locations.Add(location);
            _context.SaveChanges();
        }

        [HttpDelete("deleteLocationById/{id}")]
        public void Delete(Location location,int id)
        {            
            location.Id = id;
            _context.Remove(location);
            _context.SaveChanges();
        }

        [HttpGet("getById/{id}")]
        public IActionResult GetById(int id)
        {
            return Ok(_context?.Locations.Find(id));
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_context.Locations);
        }

        [HttpPut("{id}")]
        public void Put(int id,string name)
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
