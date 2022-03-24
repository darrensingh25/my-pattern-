let n = 5;
let sp = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    sp += " ";
  }
  for (let k = 1; k <=i; k++) {
    sp += "*";
  }
  sp += "\n";
}
console.log(sp);


/* let n = 5;
let sp = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if(j>=n-i+1) {
      sp+="*"
    } else {
      sp+=" "
    }
    sp += "";
  }
  sp += "\n";
}
console.log(sp);

 */


/*

    *
   **
  ***
 ****
*****


*/