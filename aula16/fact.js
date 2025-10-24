
var fac = 1 
let factorial = function factorial (x){
        if (x == 0 || x == 1 ){
            return 1
        }
        else{
            return x * (factorial (x-1))
        }
}

console.log(factorial(3))