import { useEffect } from "react";

const FrankenSplice = () => {
    function frankenSplice(arr1: any[], arr2: any[], n: number) {
        const start = arr2.slice(0, n);
        const end = arr2.slice(-n);

        return console.log([...start, ...arr1, ...end]);
    }

    useEffect(() => {
        frankenSplice([1, 2, 3], [4, 5, 6], 1);
    }, []);

    return <>Franken Splice</>;
};

export default FrankenSplice;
