function primeNumber(num) {

    if (num <= 0) {

        return false;
    }

    else if (num <= 1) {

        return false;
    }

    for (let i=2 ; i < num ; i++) {

        if (num % i == 0) {

            return false;
        }

    }

    return true;
}

function input() {
    
    let prime = document.getElementById("input");
    let number = prime.value;

    if (primeNumber(number)) {

        alert(`${number} is a Prime Number!`);

    }

    else {

        alert(`${number} is not a Prime Number!`);

    }
    
    prime.value = '';

}