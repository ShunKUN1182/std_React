import { useState } from "react";

const Example = () => {
    const [val, setVal] = useState("");
    const clearVal = () => setVal("");
    return (
        <div>
            <label htmlFor="456">ラベル</label>
            <div>
                <input
                    type="text"
                    id="456"
                    placeholder="hello"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                <textarea
                    id="456"
                    placeholder="good night"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
                <h3>{val}</h3>
                <button onClick={clearVal}>クリア</button>
            </div>
        </div>
    );
};

export default Example;
