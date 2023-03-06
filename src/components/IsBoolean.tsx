import { useEffect } from "react";

const IsBoolean = () => {
    function IsBoolean(str: any) {
        return console.log(typeof str === "boolean");
    }

    useEffect(() => {
        IsBoolean([1, 2, 3]);
    }, []);
    return <>Is Boolean</>;
};

export default IsBoolean;
