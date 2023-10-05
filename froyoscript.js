let flavors = prompt("Please enter a list of comma-separated froyo flavors ")
flavors;
let flavList = {};
let flavor = flavors.split(",");
for (var i=0; i<flavor.length; i++){
    flavList[flavor[i]] = (flavList[flavor[i]] ||0) +1;
}
console.log(flavList);