import { useEffect } from "react";

const MaxArray = () => {
    function maxArray(value: any[]) {
        let result = [] as number[];

        value.map((item) => {
            return result.push(Math.max(...item));
        });

        return console.log(result);
    }

    useEffect(() => {
        maxArray([
            [4, 5, 1, 3],
            [13, 27, 18, 26],
            [32, 35, 37, 39],
            [1000, 1001, 857, 1],
        ]);
    }, []);

    return <>Max Array</>;
};

export default MaxArray;
