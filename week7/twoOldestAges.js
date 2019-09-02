function twooa(Arrayvalues) {
    Arrayvalues.sort(function(a,b){return b-a});
    let array = new Array();
    array.push(Arrayvalues[1]);
    array.push(Arrayvalues[0]);
    return array;
}

console.log(twooa([1, 2, 4, 5, 6, 7]));