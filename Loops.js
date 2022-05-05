for(var i=0 ; i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}
arr=[11,22,33,44];
arr.forEach(element => {
    
    console.log(element);
});
var j=0;
while(j<10){
    j++;
    console.log(j);

}
var i=10;
do{
    i--;
    if(i==5){
        continue;
    }
    console.log(i);

}while(i>0);