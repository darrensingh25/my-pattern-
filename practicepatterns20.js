let n=10;
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(j==1 || j==n || i==1 || i==n) {
            sp+="*"
        } else {
            sp+=" "
        }
    } sp+="\n";
}
console.log(sp)