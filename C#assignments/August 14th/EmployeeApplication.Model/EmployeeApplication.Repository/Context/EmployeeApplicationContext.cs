using EmployeeApplication.Model.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeApplication.Repository.Context
{
    public class EmployeeApplicationContext: DbContext
    {
        public EmployeeApplicationContext(DbContextOptions option): base(option)
        {

        }
        public DbSet<Location> Locations { get; set; }

        public DbSet<Department> Departments { get; set; }

        public DbSet<Employee> Employees { get; set; }

    }
}
