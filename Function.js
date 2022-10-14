function quadratic(a,b,c){
   

    let inner_portion = b * b - 4 * a * c;

    if (inner_portion > 0) {
        r1 = (-b + Math.sqrt(inner_portion)) / (2 * a);
        r2 = (-b - Math.sqrt(inner_portion)) / (2 * a);
    
        console.log("The roots of quadratic equation are " + r1 + " and " + r2);
    }

    else if (inner_portion == 0) {
        r1 = r2 = -b / (2 * a);
    
        
        console.log(" The roots of quadratic equation are " + r1 + " and " + r2)
    
    }

    

    console.log(quadratic(a,b,c));

}


