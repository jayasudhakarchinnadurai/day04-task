var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
   
    for(let i of result){
      console.log(i.flags)
      console.log( `Name:${i.name}`)
      console.log( `Region:${i.region}`)
      console.log( `Sub-Region${i.subregion}`)
      console.log(`Population:${i.population}`)
    
    }
    
}

// use console 
var obj1 = {"name":"person1","age":"1"};
var obj2 = {"name":"person1","age":"1"};

var value=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            value=false;
            break;
        }
    }
}
else {
    value=false;
}
console.log(value);

