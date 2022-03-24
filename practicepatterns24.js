let n =5;
let string="";
for(i=1; i<=n; i++){
    for(j=1;j<=n; j++){
        if(j==(n+1)/2&& i>=(n+1)/2){
            string+="*";
        }else if((i+j)==n+1 && i<=(n+1)/2){

        string+="*";
       
       
        }else{
            string+=" "
        }
    }
    string+="\n";
}
console.log(string);