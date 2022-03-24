let n=3;
let string = "";
let d=65
for(i=1; i<=n; i++){
for(j=1; j<=n-i; j++){  
    string += " ";
    }

for(k=i; k>=1; k--){
    string +=String.fromCharCode((k-1)+d);
}

for(l=2; l<=i; l++){
    string +=String.fromCharCode((l-1)+d);


    }
string += "\n";
}
for(i=1; i<=n-1; i++){
    for(j=0; j<i; j++){  
        string += " ";
        }
    
    for(k=i; k<=1; k++){
        string +=String.fromCharCode(d+k);
    }
    
    for(l=2; l>=i; l--){
        string +=String.fromCharCode(d-l+2);
    
    
        }
    string += "\n";
    }
console.log(string);