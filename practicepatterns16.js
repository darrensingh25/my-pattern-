let n=5
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(j==1 || j==n ) {
            sp+="*";
        } else {
            sp+=" "
        }
    }
    sp+="\n"
}
console.log(sp)