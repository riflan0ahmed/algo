import { useEffect } from "react";

const PrimeNumber = () => {
    function findPrimeNumber(value: number) {
        // minimum number is 2
        if (value < 2) {
            return console.log(false);
        } else {
            for (let i = 2; i < value; i++) {
                if (value % i == 0) {
                    return console.log(false);
                }
            }

            return console.log(true);
        }
    }

    useEffect(() => {
        findPrimeNumber(7);
    }, []);

    return <>Prime Number {}</>;
};

export default PrimeNumber;
