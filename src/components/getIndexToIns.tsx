import { useEffect } from "react";

const GetIndexToIns = () => {
    function getIndexToIns(arr: any[], num: number) {
        // const findUniqueCharacter = new Set(arr);

        // const newArr = [...findUniqueCharacter].sort((a, b) => a - b);
        const newArr = arr.sort((a, b) => a - b);

        if (newArr.length === 0) return 0;

        const checkIsGreater = newArr.findIndex((item) => item >= num);

        return console.log(checkIsGreater === -1 ? arr.length : checkIsGreater);
    }

    useEffect(() => {
        getIndexToIns([2, 5, 10], 15);
    }, []);

    return <>Get Index To Ins</>;
};

export default GetIndexToIns;
