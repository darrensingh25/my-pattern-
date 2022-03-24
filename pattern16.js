let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=1;j<=n-i;j++) {
        sp+=" ";
    }
    for(k=1;k<=i;k++) {
        if(k==1 ||k==i  || i==n) {
            sp+="*";
        } else {
        sp+=" ";
        }
    }
    sp+="\n";
}
console.log(sp);


/*

    *
   **
  * *
 *  *
*****

*/