string="";
n=10;
count=0;
for(i=1; i<=n; i++){
for(j=1; j<=2*n-1; j++){

if(j>=n-i+1 && j<=n+i-1){
    afterz=String.fromCharCode(count+65);
    string+=afterz+ " ";
    count++;

    if(afterz=="Z"){
    count=0;
    }
}

    else{

    string+="  ";
}

}

string+="\n";

}

console.log(string);