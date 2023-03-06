import { useEffect } from "react";

const EvenNumber = () => {
    // Remove duplicate and check whether both array are equal
    function crossCheck(params: string, param2: string) {
        let removeDuplicates = new Set(params);
        var convertArr = [...removeDuplicates];
        let convertArr2 = param2.split("");

        if (convertArr.length === convertArr2.length) {
            return convertArr.every((element) => {
                if (convertArr2.includes(element)) {
                    return console.log(true);
                } else {
                    return console.log(false);
                }
            });
        } else {
            return console.log(false);
        }
    }

    useEffect(() => {
        crossCheck("nalfir", "riflan");
    }, []);

    return <>Cross Check</>;
};

export default EvenNumber;
