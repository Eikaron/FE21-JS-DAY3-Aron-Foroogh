function gradePointAverage(points){

let grade = [];
let sum = 0;

for (j = 0; j < points.length; j++){
    sum += points[j][1]
}   

average = sum/points.length;

for (i = 0; i < 5; i++){

    if (points[i][1] < 60){
        grade[i] = "F";
    } 

    else if (points[i][1] < 70){
        grade[i] = "D";
    }

    else if (points[i][1] < 80){
        grade[i] = "C";
    }

    else if (points[i][1] < 90) {
        grade[i] = "B";
    }

    else{
        grade[i] = "A"
    }

    console.log(`${points[i][0]}:`, grade[i]);
}



console.log(`Class average: ${average}`);
}

const points = [["Martin",76], ["Thomas",85], ["Fatima",65], ["Maria",93],["David",81]];

gradePointAverage(points);


//FizzBuzz

let result = "";

for (i = 1; i < 101; i++){

    if (i % 3 == 0){
        result3 = "Fizz";
    }

    else {
        result3 = "";
    }

    if (i % 5 == 0){
        result5 = "Buzz";
    }

    else {
        result5 = "";
    }

    result = result3+result5;
    
    if (result == ""){    
        console.log(i);
    }
    else {
    console.log(result);
    }
}