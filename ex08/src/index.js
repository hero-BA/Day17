// Lodash
const _ = require("lodash");

// Only change code below this line
// users nested array with four objects starts here

var users = [
  { firstName: "John", lastName: "Doe", age: 24, gender: "male" },
  { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
  { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
  { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
];

// users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
  var output = "";
  for(var i in users) {      
        for(var j in users[i]) {
            console.log(users[i][j]);  
            output = users[i][j];     
        }
      }  
  return output;
}

// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
  try {
    // add appropriate code here
  } catch (error) {
    return "Cannot read property 'firstName' of undefined"; // Change this line
    console.log(); // Change this line
  }
}

// findUser(lastName, gender) functions ends here
// Only change code above this line
getUsers();
findUser(); // Change this line

module.exports = findUser;
