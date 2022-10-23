Prime or not

 let num=14;
 let prime = true;
    if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % 2 == 0) {
            prime = false;
            break;
        }
    }

    if (prime== true) {
        console.log("Yes");
    } else {
        console.log("No");
    }
