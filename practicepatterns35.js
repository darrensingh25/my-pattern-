string=""
n=5;
for(i=1; i<=n; i++){
    for(j=1; j<=n*2-1; j++){
        if(j>=n-i+1 && j<=n+i-1){
            if(j<=n){
                string+=j
                string+=""
            }
            else if(j>n){
                string+=n-j+n;
            }
        }
        else{
            string+=" "
        }
    }
    string+="\n"
}
console.log(string);