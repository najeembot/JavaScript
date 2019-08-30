// function for converting array of numbers to a range of consecutive numbers


function toRange(array) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1 || array[i + 1] - array[i] == 2) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    ranges.push(rstart == rend ? rstart+'' : rstart + '_' + rend);
  }
  return ranges.join(",");
}

toRange([2,3,4,5,10,18,19,20]);
// returns ["2-5", "10", "18-20"]
toRange([1,2,3,5,7,9,10,11,12,14 ]);
// returns ["1-3", "5", "7", "9-12", "14"]
toRange([1,2,3,4,5,6,7,8,9,10]);
console.log(toRange([1,2,3,4,6,8,10,12,7,15,3,29]));
// returns ["1-10"]

// function for converting string range of numbers to array 


function toArray(numberRange) {
  var array = numberRange.split(",");
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1 && array[i + 1] - array[i] == 2) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    ranges.push(rstart == rend ? rstart+'' : rstart + '_' + rend);
  }
  return ranges;
}

toArray("2,3,4,5,10,18,19,20");
// returns ["2-5", "10", "18-20"]
toArray("1,2,3,5,7,9,10,11,12,14");
// returns ["1-3", "5", "7", "9-12", "14"]
toArray("1,2,3,4,5,6,7,8,9,10");
console.log(toArray("2,4,6,8,5,6,7,8,9,10")[0]);
// returns ["1-10"]