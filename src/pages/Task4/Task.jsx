import UserInfoCard from "../../components/Card/UserInfoCard";

function Task() {
    return (
        <div className="w-full p-4">
            <div className="flex flex-wrap gap-4 justify-start">
                <UserInfoCard id={1} />
                <UserInfoCard id={2} />
                <UserInfoCard id={3} />
                <UserInfoCard id={4} />
                <UserInfoCard id={5} />
                <UserInfoCard id={6} />
                <UserInfoCard id={7} />
                <UserInfoCard id={8} />
            </div>
        </div>
    );
}

export default Task;
