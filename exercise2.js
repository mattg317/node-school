var sumtot = process.argv.slice(2,process.argv.length);
var sum =0;
for(var i = 0, n=sumtot.length; i<n; i++){
	sum+=Number(sumtot[i]);
}

console.log(sum);
