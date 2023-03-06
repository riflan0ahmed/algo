import { useEffect } from "react";

const RepeatString = () => {
    function repeatStringNumTimes(str: string, num: number) {
        let result = [];

        for (let i = 1; i <= num; i++) {
            result.push(str);
        }

        return result.join("");
    }

    useEffect(() => {
        repeatStringNumTimes("abc", 3);
    }, []);
    return <>Repeat String</>;
};

export default RepeatString;
