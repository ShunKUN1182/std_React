const Example = () => {
    const clickHandler = () => {
        alert("ボタンがクリックされました。");
    };
    const clickHandler2 = () => {
        console.log("ボタンがクリックされました。");
    };
    return (
        <>
            <button type="button" onClick={clickHandler}>
                クリックしてね
            </button>
            <button type="button" onClick={clickHandler2}>
                クリックしてね
            </button>
        </>
    );
};

export default Example;
