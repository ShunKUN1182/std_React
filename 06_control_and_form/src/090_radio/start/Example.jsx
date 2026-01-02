import { useState } from "react";
import Radiobtns from "./components/Radiobtns";

const Example = () => {
    const [fruit, setFruit] = useState("Apple");
    const onChange = (e) => setFruit(e.target.value);
    const RADIO_COLLECTION = ["Apple", "Banana", "Mango"];
    return (
        <div>
            <Radiobtns RADIO_COLLECTION={RADIO_COLLECTION} fruit={fruit} onChange={onChange} />
            <h3>私は{fruit}だよ</h3>
        </div>
    );
};

export default Example;
