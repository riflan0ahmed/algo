import { useEffect } from "react";

const FindElement = () => {
    function findElement(arr: any[], func: Function) {
        let num = 0;
        for (let i = 1; i <= arr.length; i++) {
            num = arr[i];
            if (func(num)) {
                return console.log(num);
            }
        }
        return undefined;
    }

    useEffect(() => {
        findElement([1, 3, 5, 8, 9, 10], (num: number) => num % 2 === 0);
    }, []);
    return <>Find Element</>;
};

export default FindElement;
