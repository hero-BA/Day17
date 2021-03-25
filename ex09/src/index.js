// Lodash
const _ = require('lodash');

// Only change code below this line
// users nested array with four objects starts here
var users = [
    { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male" },
    { id: 2, firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { id: 3, firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { id: 4, firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" },
  ];

// users nested array with four objects ends here

// getUser function - list of users starts here

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


// getUser function - list of users ends here

// findUser(id) function starts here
function findUserById(id) {
    try {

        // add appropriate code here

    } catch (error) {
        return "Cannot read property 'id'" // Change this line
        console.log(); // Change this line
    }
}

// findUserById(id) functions ends here
// Only change code above this line
getUsers();
findUserById();  // Change this line

module.exports = findUserById;