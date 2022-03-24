let n=5;
let sp="";
for(i=0;i<=n;i++){
    for(j=1;j<=i;j++) {
        sp +="\*";
    }
    sp +="\n";
    }
    for(i=4;i>=1;i--) {
        for(j=1;j<=i;j++) {
            sp +="*";
        }
            sp +="\n";
}
console.log(sp);

/*

*
**
***
****
*****
****
***
**
*

*/


