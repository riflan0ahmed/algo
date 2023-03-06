import { useEffect } from "react";

const FizzBuzz = () => {
    function FizzBuzz() {
        for (let i = 0; i < 100; i++) {
            // if (i % 3 == 0 && i % 5 == 0) {
            //     console.log("FizzBuzz");
            // } else if (i % 3 == 0) {
            //     console.log("fizz");
            // } else if (i % 5 == 0) {
            //     console.log("buzz");
            // } else {
            //     console.log(i);
            // }

            switch (true) {
                case i % 3 == 0 && i % 5 == 0:
                    console.log("FizzBuzz");
                    break;
                case i % 3 == 0:
                    console.log("Fizz");
                    break;
                case i % 5 == 0:
                    console.log("Buzz");
                    break;
                default:
                    console.log(i);
                    break;
            }
        }
    }

    useEffect(() => {
        FizzBuzz();
    }, []);

    return <>FizzBuzz</>;
};

export default FizzBuzz;
