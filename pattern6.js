let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=0;j<=i-1;j++) {
        sp +=" ";
    }
    for(k=1;k<=2*(n-i)-1;k++) {
        sp+="*";
    }
    sp +="\n";
}
console.log(sp);


/*


*********
 *******
  *****
   ***
    *

*/