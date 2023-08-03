function ShowResult()
{
    var students=
    [
        {"id":1,"Name":"Jubiya"},
        {"id":2,"Name":"Ramu"},
        {"id":2,"Name":"Sania"},
        {"id":4,"Name":"Arya"},
        {"id":5,"Name":"Sobin"}
    ]
    
    console.log("Name of Stuidents:");
    let namestring="";
    students.forEach(y=>{
        namestring = (namestring === "" ? y.Name : `${namestring} , ${y.Name}`)
    });
    console.log(namestring);

    console.log("Using reduce function");
    let fn=(namestring,y)=>{
        namestring=(namestring === "" ? y.Name : `${namestring} , ${y.Name}`)
    };
    students.reduce(fn);
    console.log(namestring);

}

