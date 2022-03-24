let n = 5;
let sp = "";
for(i=1; i<=n; i++) {
    for(j=n; j>=i; j--) {   //  for(j=1;j<=n-i+1;j++)   //for(j=1;j<=n-i;j++)
        sp += "*";
    }
    sp += "\n";
}
console.log(sp);


/*

******
*****
****
***
**
*


*/
