function buscarPrimos(num){
  var n = 1;
  primelist = "";
  search: while (n<num) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
	console.log(primelist);
	return primelist;
}

self.addEventListener("message", function(e){
	var num = e.data;
	var result;
	result=buscarPrimos(num);
	console.log(result);
	self.postMessage(result);
}, false);