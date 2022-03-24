let n=10;
let sp=""
let k=65
for(i=1;i<=n;i++) {
    for(j=1;j<=2*n-1;j++) {
        if(j>=n-i+1 && j<=n+i-1) {
            afterz=String.fromCharCode(k);
            sp+=afterz;
            sp+=" ";
            if(afterz=='Z') {
                k=65-1;
            }
            k++
        } else {
            sp+="  "
        }

    }
    sp+="\n";
}
console.log(sp)