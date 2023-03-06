import { useEffect } from "react";

const Factorial = () => {
    function factorialize(num: number) {
        let total = 1;

        for (let i = 1; i <= num; i++) {
            // console.log((total = total * i));
            console.log((total *= i));
        }
    }

    useEffect(() => {
        factorialize(5);
    }, []);

    return <>Cross Check</>;
};

export default Factorial;
