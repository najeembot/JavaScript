function strCount(strobj) {
   var count = 0;
   for(var key in strobj){
       if (typeof key === "string") {
       	count++;
       }
   }
   return count;
}

var myO = {name:"hi",fname:"ni",lname:"ri"}


console.log(strCount(myO));