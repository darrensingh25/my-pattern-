let n=12;
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=n-2;j++) {
        if(j==1 || i+j==n-1 || i-j ==2) {
            sp+="*"
        }
        else {
            sp+=" "
        }
        sp+=" "
    } sp+="\n"
}
console.log(sp)