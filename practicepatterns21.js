let n=5;
let sp=""
let k=0
for(i=1;i<=n;i++) {
   k=i
    for(j=1;j<=n;j++) {
        if(j<=i) {
            sp+=k
            k--;
        } else {
            sp+=" "
        }
        sp+="  "
    } sp+="\n";
}
console.log(sp)