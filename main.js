// created the constant variable, kelvin, set to 293 so the number don't change
const kelvin = 293;

// created a variable, Celsius, with the kelvin to celsius formula
 var celsius = kelvin - 273;

// created a Fehrenheit variable with the celsius formula
// added math.floor to rounded down to the nearest number
// followed proper PEMDAS Rules so the formula can work
var fahrenheit = Math.floor((celsius * (9/5)) + 32);

// created a new variable for newtons
// used the Math.floor() to round the number to the nearest number
// Followed PEMDAS Rules
var newtons = Math.floor(celsius * (33/100));


// create a console.log to display to output of kelvin input converted to fahrenheit
// used ' ' and plus sign to connect the numbers and string together
// included a space after "is" and before "degrees" so there is proper spacing
console.log ('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

// created a console.log() to display a string interpolation with the newton number
// used ' ' and plus sign to connect the numbers and string together
// included a space after "is" and before "degrees" so there is proper spacing
console.log ('The temperature is ' + newtons + ' Newtons.')
