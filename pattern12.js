let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=0;j<=n-i;j++) {
        sp+="*";
    }
    sp+="\n";
}
//console.log(sp);
for(i=1;i<=n;i++) {
    for(j=0;j<=i;j++) {
        sp+="*";
    }
    sp+="\n";
}
console.log(sp);


/*


*****
****
***
**
*
**
***
****
*****
******

*/