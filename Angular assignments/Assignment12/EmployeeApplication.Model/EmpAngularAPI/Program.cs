using EmployeeApplication.Repository.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<EmployeeApplicationContext>(option =>
{
    option.UseSqlServer(builder.Configuration["ConnectionString:SqlServer"]);
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "_myAllowSpecificOrigins",
             policy =>
             {
                 //policy.WithOrigins("http://localhost:4200", "http://localhost:19006");
                 policy.AllowAnyHeader();
                 policy.AllowAnyMethod();
                 policy.AllowAnyOrigin();
             });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("_myAllowSpecificOrigins");


//app.UseCors(policy => policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());



app.UseAuthorization();

app.MapControllers();

app.Run();
