//Basic 1

function temperature(){

    temp1 = Math.floor(Math.random()*10);
    //console.log(temp1);
    temp2 = Math.floor(Math.random()*(10)+5);
    //console.log(temp2);
    temp3 = Math.floor(Math.random()*(-10));
    //console.log(temp3);

    temp = temp1+temp2+temp3;
    console.log(temp);

    if (temp <= 10){
        console.log("The temperature is cold");
    }
    else if (temp > 10)
    {
        console.log("The weather is moderate");
    }
}

temperature();
console.log("")


//Basic 2

function highestValue(array){
    
    hVal = 0;

    for (i=0; i < array.length; i++){

        if (array[i] > hVal) {
            hVal = array[i];
        }
    }

    console.log(hVal);
    console.log("");
}

const myArray = [1, 7, 10, 5, 8, -3];

highestValue(myArray);

//Basic 3

