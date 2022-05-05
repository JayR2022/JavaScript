alert("Loops2");

let a = 100;
let aFlag = false;

while (aFlag==false){

    if (a%2 == 0){
        console.log("-");
    }

    else{
        console.log("*");
    }
    a++;


    if (a >200){
        aFlag= true;
    }
}