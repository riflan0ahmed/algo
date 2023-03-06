import { useEffect } from "react";

const TruncateString = () => {
    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return console.log(str);
        } else {
            return console.log(str.slice(0, num) + "...");
        }
    }

    useEffect(() => {
        truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length - 2);
    }, []);
    return <>Truncate String</>;
};

export default TruncateString;
