//Basic 1

function temperature(){

    //For Exercise 1
    //temp = (Math.random()*(-30)+25).toFixed(1);

    //For Exercise 3
    temp1 = Math.floor(Math.random()*65)-25; //Math.floor(Math.random()) * (max-min+1) + min)

    //console.log(`${temp0}°C`)
    console.log(`${temp}°C`);

    if (temp <= 10){
        console.log("The temperature is cold");
    }
    else if (temp < 30){
        console.log("The weather is moderate");
    }

    else if (temp => 30) {
        console.log("It is summer. Deal with it.");
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

    return hVal;
}

const myArray = [1, 7, 10, 5, 8, -3];

console.log("The highest vaule of this array is:", highestValue(myArray));

