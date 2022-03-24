
let n=5;
let sp="";
for(i=1;i<=n;i++) {
    for(j=1;j<=n;j++) {
        if(i==n-j+1 || i==j-n+5)
        {
            sp+="*";
        }
        else {
            sp+=" "
        }

    }
    sp+="\n";
}
console.log(sp);