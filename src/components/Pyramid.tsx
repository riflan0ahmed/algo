import { useEffect } from "react";

const Pyramid = () => {
  const pyramid = (value: number) => {
    for (let i = 0; i < value; i++) {
      let result = [];
      for (let j = 0; j <= i; j++) {
        // result = i * j;
        result.push("*");
      }

      console.log(result.join(" "));
    }
  };

  useEffect(() => {
    pyramid(5);
  }, []);

  return <>Pyramid</>;
};

export default Pyramid;
