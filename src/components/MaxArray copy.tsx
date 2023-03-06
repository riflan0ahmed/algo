import { useEffect } from "react";

const Something = () => {
    function findMostRepeated(array: any[]) {
        const counts = {};

        array.filter((x) => {
            counts[x] = (counts[x] || 0) + 1;
        });

        console.log(counts);

        if (counts) {
            let arr = Object.values(counts);
            const ans = Math.max(...arr);
            console.log(counts[ans]);
        }
    }

    useEffect(() => {
        let arrayContainer = [3, 7, 7, 7, 2, 3, 7, 3, 7, 2, 4, 9, 3];
        let result = findMostRepeated(arrayContainer);
    }, []);

    return <>Max Array</>;
};

export default Something;
