// See https://aka.ms/new-console-template for more information

using ConsoleApp9;

DateTime dt = new DateTime(2023, 12, 01);
Employee emp = new Employee(1,"Jubiya",dt,"HR",29000.09, 'P');
IBonusCalculator ibc = null;
if (emp.Jobtype == 'P')
{
    ibc = new PermanentEmployeeBonusCalculator();
}     
else
{
    ibc = new ContractEmployeeBonusCalculator();
}
    
double bonusAmt = ibc.CalculateBonus(emp);
Console.WriteLine("Bonus amount:" + bonusAmt);
