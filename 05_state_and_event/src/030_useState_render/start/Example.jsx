import { useState } from "react";

const Example = () => {
    let displayVal;
    let [val, setVal] = useState();
    console.log("再レンダリングされました");
    return (
        <>
            <p>aaaaa</p>
            <input
                type="text"
                onChange={(e) => {
                    console.log(e.target.value);
                    setVal(e.target.value);
                    // displayVal = e.target.value;
                }}
            />
            = {val}
        </>
    );
};

export default Example;
