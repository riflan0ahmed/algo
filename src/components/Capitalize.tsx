import { useEffect } from "react";

const Capitalize = () => {
    function titleCase(str: string) {
        return console.log(
            str
                .split(" ")
                .map((item) => item.slice(0, 1).toLocaleUpperCase() + item.slice(1).toLocaleLowerCase())
                .join(" ")
        );
    }

    useEffect(() => {
        titleCase("I'm a little tea pot");
    }, []);
    return <>Is Capitalize</>;
};

export default Capitalize;
