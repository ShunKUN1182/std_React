import Profile from "./components/Profile";

const Example = () => {
    return (
        <>
            <ul>
                <li>
                    <Profile name="a" age={20} hobbies={["c", "d"]} />
                </li>
            </ul>
        </>
    );
};

export default Example;
