import { useEffect } from "react";

const LongestString = () => {
    const findLongestWord = (value: string) => {
        let splitWord = value.split(" ");

        const longestWord = Math.max(...splitWord.map((word) => word.length));

        return console.log(longestWord);
    };

    useEffect(() => {
        findLongestWord("The quick brown fox jumped over the lazy dog");
    }, []);

    return <>Longest String</>;
};

export default LongestString;
