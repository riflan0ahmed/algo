import { useEffect } from "react";

const OddNumber = () => {
    function findOddNumber(value: number) {
        // minimum number is 2
        if (value < 2) {
            return console.log(false);
        } else if (value % 2 === 1) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }

    useEffect(() => {
        findOddNumber(21);
    }, []);

    return <>Odd Number </>;
};

export default OddNumber;
