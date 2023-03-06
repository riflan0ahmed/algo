import { useEffect } from "react";

const Bouncer = () => {
    // check for Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
    function bouncer(arr: any[]) {
        return console.log(arr.filter((item) => !!item));
    }

    useEffect(() => {
        bouncer([7, "ate", "", false, 9]);
    }, []);

    return <>Bouncer</>;
};

export default Bouncer;
