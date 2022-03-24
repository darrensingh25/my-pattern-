let n=5;
let sp="";
for(i=1;i<=n;i++) {
  for(j=1;j<=n-i;j++) {
    sp+=" ";
   }
   for(k=1;k<=i;k++) {
     sp+=k
   }
    sp+="\n";
  }
console.log(sp);
