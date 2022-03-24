let n=10;
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(i<=3)
        if(i+j==n+1 || i-j==0) {
            sp+="*"
        }
        if(i>=4)
            if(j==n-5) {
            sp+="*"
        }
        else {
            sp+=" "
        }
        sp+=" "
    } sp+="\n";
}
console.log(sp);