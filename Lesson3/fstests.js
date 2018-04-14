var fs = require('fs');
var obj = {
    "first_name":"Tigran",
    "last_name":"Serobyan",
    "age":13,
    "Tumo_student":true
};

function main(){
   fs.appendFileSync("obj.json", JSON.stringify(obj));
}
main();