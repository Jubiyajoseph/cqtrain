// See https://aka.ms/new-console-template for more information

using ConsoleApp9;

DateTime dt = new DateTime(2023, 12, 01);
Employee emp = new Employee(1,"Jubiya",dt,"HR",29000.09, 's');
IBonusCalculator ibc=null;
if (emp.Jobtype == 'P')
{
    ibc = new PermanentEmployeeBonusCalculator();
}     
else if (emp.Jobtype == 'C')
{
    ibc = new ContractEmployeeBonusCalculator();
}
else
{
    Console.WriteLine("Enter valid jobtype");
}
    
double? bonusAmt = ibc?.CalculateBonus(emp);
Console.WriteLine("Bonus amount:" + bonusAmt);
