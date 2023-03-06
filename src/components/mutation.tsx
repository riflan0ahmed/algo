import { useEffect } from "react";

const Mutation = () => {
    function mutation(arr: any[]) {
        let first = arr[0].toLowerCase().split("");
        let second = arr[1].toLowerCase().split("");

        return second.every((item: any) => console.log(first.indexOf(item) !== -1));
    }

    useEffect(() => {
        mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
    }, []);

    return <>Mutation</>;
};

export default Mutation;
