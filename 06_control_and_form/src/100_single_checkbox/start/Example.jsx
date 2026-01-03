import { useState } from "react";

const Example = () => {
    const [isChecked, setisChecked] = useState(true);
    const toggleChecked = (e) => {
        setisChecked((prevState) => !prevState);
    };
    return (
        <div>
            <label htmlFor="my-check">チェック：</label>
            <input
                type="checkbox"
                id="my-check"
                checked={isChecked}
                onChange={() => toggleChecked()}
            />
            <div>{isChecked ? "ON" : "OFF"}</div>
        </div>
    );
};

export default Example;
