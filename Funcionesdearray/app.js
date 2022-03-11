let employees = [
    { name: 'John', salary: 90000, hireDate: "July 1, 2010" },
    { name: 'Maria', salary: 75000, hireDate: "August 11, 2010" },
    { name: 'David', salary: 320000, hireDate: "December 1, 2010" },
]
const arrnum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ordenarra = arrnum.sort(function (num1, num2) //Funcion comparadora
{
    // refactorizando 
    // return num1 - num2; // ascendente
    return num2 - num1; // Descendente
    /*
        // console.log(num1, num2);
        if (num1 < num2) {
            return -1 //  si retorna un numero negativo  el num1 antes que num2 
        } else if (num1 > num2) {
            return 1 //si retorna positivo  num2 va antes que num1 
        } else {
           return 0; // Si retorna 0 la posicion queda intacta.
        }
    */
});
console.log(ordenarra);

// usando reduce sumar todos los valores
const aTotal = arrnum.reduce(function (total, current) {
    console.log(total, ' ', current);
    return total + current;
});
console.log("Total de sumar el array ", aTotal);

// usando reduce en la array employees, cuando estamos tratando con objetos es necesario pasarle un valor inicial al total para que no nos genere error "[object Object]75000320000"
const totalEmpl = employees.reduce((total, current) => total + current.salary, 0);
console.log(totalEmpl);

// desestructurando los valores de employees  [...employees] y la guardamos en emplSort si modificar el array original
const emplSort = [...employees].sort(function (a, b) { a.salary - b.salary }, 0);

console.log("Total general de todos los empleados", emplSort);

for (let index = 0; index < employees.length; index++) {
    console.log(employees[index]);

}

// Array array.forEach
employees.forEach((employee, index) => console.log(index, employee.name));

// usando filter:
const highTier = employees.filter((employee) => employee.salary > 75000)

console.log("Salarios alto ; ", highTier, "Array ", employees);
// Arraymap

const uppercase = employees.map(function (employe) {
    // conversion de nombres a mayuscula
    return employe.name.toLocaleUpperCase();
})
console.log(uppercase);

const employTier = employees.map(function (employ) {
    return {
        name: employ.name,
        tier: employ.salary > 75000 ? 'high' : 'mid'
    }
})
console.log(employTier);

// Metodos chainging 
const totalhighTier = employees
    .map(employ1 => employ1.salary) // extraigo solamente los salarios del array
    .filter(salary => salary > 75000) // filtro todos aquellos que sean mayores a 75000
    .reduce((total, current) => total + current); // opero sobre esos salarios realizando un totalizados de ellos. 

console.log(totalhighTier);