let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(i==1 || i==n-1 || j==1 || j==n-1){
        sp+="*";
    } else {
    sp+="\n";
    }
}
}
console.log(sp)