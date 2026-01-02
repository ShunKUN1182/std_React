const Radiobtns = ({ RADIO_COLLECTION, fruit, onChange }) => {
    return (
        <>
            {RADIO_COLLECTION.map((val) => {
                return (
                    <label key={val}>
                        <input
                            type="radio"
                            value={val}
                            checked={fruit === val}
                            onChange={onChange}
                        />
                        {val}
                    </label>
                );
            })}
        </>
    );
};

export default Radiobtns;
