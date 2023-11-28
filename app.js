var bmiCal = document.getElementById("bmiCal");

function bmiCalculator(weight,height){
    var kg = weight;
    var m = height;
    var bmi = kg/(m**2);
    var BMI = bmi.toFixed(2)
    if (BMI < 18.5){
        return "Your BMI is "+ BMI +"," + " so you are underweight."
    }
    else if (BMI> 18.5 && BMI <= 24.9){
        return "Your BMI is "+ BMI +"," + " so you have a normal weight."
    }
    else if(BMI > 24.9){
        return "Your BMI is "+ BMI +"," + " so you are overweight."
    }
        
}
var result =  bmiCalculator(73,1.665);
bmiCal.innerHTML = result;

