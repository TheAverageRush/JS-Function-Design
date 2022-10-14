function quadratic(a,b,c) {
    
let r1, r2;


let inner_eq = b * b - 4 * a * c;


if (inner_eq > 0) {
    r1 = (-b + Math.sqrt(inner_eq)) / (2 * a);
    r2 = (-b - Math.sqrt(inner_eq)) / (2 * a);

    
    console.log("Roots are " + r1 + "and " + r2);
    
}


else if (inner_eq == 0) {
    r1 = r2 = -b / (2 * a);

    
    console.log("Roots are: " + r1 + "and" +r2);
}


else {
    let RP = (-b / (2 * a)).toFixed(2);
    let IP = (Math.sqrt(-inner_eq) / (2 * a)).toFixed(2);

    console.log(" Roots are " + RP + IP+"i"+ " and " + RP + "- " + IP+"i");
}


}

quadratic(13,100,53);