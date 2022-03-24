let n = 5;
let sp = "";
for(i=1; i<=n-1; i++) {
    for(j=1; j<=i-1; j++) {
        sp += " ";
    }
    for(k=1; k<=n-i+1; k++) {
        sp += "*";
    }
    sp += "\n";
}
//console.log(sp);
for(i=1;i<=n;i++) {
    for(j=1;j<=n-i;j++) {
        sp+=" ";
    }
    for(k=1;k<=i;k++) {
        sp+="*";
    }
    sp+="\n";
}
console.log(sp);


/*

*****
 ****
  ***
   **
    *
   **
  ***
 ****
*****


*/