                // To find the largest alphabet in given string

let str="helloxieh"
let max=str[0];
for(i=1;i<=str.length;i++) {
    if(str[i] > max)
    max=str[i];
}
console.log(max)