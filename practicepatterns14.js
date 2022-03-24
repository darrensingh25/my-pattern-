let n=5
let sp=""
for(i=1;i<=n;i++) {
    for(j=1;j<=i-1;j++) {
        sp+=" "
    }
    for(k=1;k<=n-i+1;k++) {
        sp +=k + " "
    }
    sp+="\n";
}
console.log(sp)
