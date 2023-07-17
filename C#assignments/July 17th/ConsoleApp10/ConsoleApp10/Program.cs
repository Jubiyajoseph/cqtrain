using ConsoleApp10;

Triangle t = new Triangle(3, 4, 5, 6);
t.DisplayNoOfSides();
double Area_triangle = t.CalculateArea();
Console.WriteLine("Area of Triangle="+ Area_triangle);

Square sq = new Square(4,6);
sq.DisplayNoOfSides();
double Area_square = sq.CalculateArea();
Console.WriteLine("Area of Square=" + Area_square);

Rectangle r = new Rectangle(4, 6, 7);
r.DisplayNoOfSides();
double Area_rect = r.CalculateArea();
Console.WriteLine("Area of Rectangle=" + Area_rect);

