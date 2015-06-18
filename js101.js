//problem 1: Find the sum of all the multiples of 3 or 5 below 1000.
var threesum = 0;
for (i=3; i<1000; i+=3) {
  threesum += i;
}
var fivesum = 0;
for (i=5; i<1000; i+=5) {
  fivesum += i;
}
alert(threesum + fivesum);

//problem 2: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var fibtot = 0;
var fibform = function(x) { 
  for (x=0; x<34; x++) {
  i = (Math.round((Math.pow(((1 + Math.sqrt(5))/2), x )) / (Math.sqrt(5))));
    if (i % 2 === 0) {
      fibtot +=i; 
    }
  }
}
fibform();
console.log(fibtot);

//problem 3: What is the largest prime factor of the number 600851475143 ?
var i = 2;
var primefactor = function(n) {
  while (i < n) {
    if (n % i == 0) {
      n /= i;
      i = 2;
    }
    else {
      i++;
    }
  }
}
primefactor(600851475143);
alert(i);