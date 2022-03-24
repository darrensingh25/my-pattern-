let n=10;
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(j==1 || j==n || i+j == n+1) {
            sp+="*"
        } else {
            sp+=" "
        }
        sp+=" "
    } sp+="\n";
}
console.log(sp)