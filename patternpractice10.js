let n=5;
let sp=""
let cnt=1;
for(i=1;i<=n;i++) {
    for(j=1;j<=n-i;j++) {
        sp+="  ";
    }
    for(k=1;k<=i;k++) {  
        sp+=cnt;
        sp+="  "
        if(cnt<10) {
            sp+=" "
        } 
        cnt++
    }
    sp+="\n"
}
console.log(sp)