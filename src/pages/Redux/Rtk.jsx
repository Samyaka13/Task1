import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../features/counter/counterSlice";
import { useEffect } from "react";
import { fetchUser } from "../../features/users/usersThunks";

function Rtk() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const {users,loading,error} = useSelector((state)=>state.users)
    useEffect(()=>{
        dispatch(fetchUser())
    },[dispatch])
    console.log(users);
    return (
        <div className="flex items-center gap-6 rounded-lg border p-6 shadow-md w-fit">

            <div className="flex gap-3">
                <button className="rounded bg-sky-500 px-4 py-2 text-white hover:bg-sky-600" onClick={() => dispatch(increment())}>
                    Increment
                </button>

                <button onClick={() => dispatch(decrement())} className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">
                    Decrement
                </button>

                <button onClick={() => dispatch(incrementByAmount(5))} className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
                    Increase by 5
                </button>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-sm text-gray-500">Count</h1>
                <span className="text-3xl font-bold">{count}</span>
            </div>

        </div>
    );
}

export default Rtk;
