import { useEffect } from "react";

const EvenNumber = () => {
    function findEvenNumber(value: number) {
        // minimum number is 2
        if (value < 2) {
            return console.log(false);
        } else if (value === 2) {
            return console.log(true);
        } else if (value % 2 === 0) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }

    useEffect(() => {
        findEvenNumber(10);
    }, []);

    return <>Even Number </>;
};

export default EvenNumber;
