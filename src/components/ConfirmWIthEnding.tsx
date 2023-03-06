import { useEffect } from "react";

const ConfirmWithEnding = () => {
    function confirmWithEnding(str: string, chr: string) {
        // return console.log(str.endsWith(chr));

        let splitStr = str.split("");
        const splitChr = chr.split("");
        const splitChrLength = splitChr.length;

        const lastChr = splitStr.slice(-splitChrLength);

        if (lastChr.length === splitChr.length) {
            const result = lastChr.every((item: string) => splitChr.includes(item));
            return console.log(result);
        }

        return false;
    }

    useEffect(() => {
        confirmWithEnding("riflan", "lan");
    }, []);

    return <>Confirm Character With Ending</>;
};

export default ConfirmWithEnding;
