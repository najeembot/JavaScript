var myObj = {
	prop1 : "value1",
	prop2 : "value2",
	method : ""
};
var myMethod = function (a,b,c) {
	 rvalue = a + b + c;
	return rvalue + this.prop1;
}
var values = ["first", "second", "third"];
// implicit binding 
myObj.method = myMethod;
alert(myObj.method("a", "b", "c"));
// explicit binding
alert(myMethod.call(myObj, values[0]));
alert(myMethod.apply(myObj, values));
// hard-binding
myMethod = myMethod.bind(myObj);
alert(myMethod(values.join()));
// new binding 
function foo(something) {
  this.a = something;
}

var obj1 = {};

var bar = foo.bind( obj1 );
bar( 2 );
alert( obj1.a ); // 2

var baz = new bar( 3 );
alert( obj1.a ); // 2
alert( baz.a ); // 3


