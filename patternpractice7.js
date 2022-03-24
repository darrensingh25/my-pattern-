let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=1;j<=i;j++) {
        if(j==i) {
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
 *
  *
   *
    *

*/