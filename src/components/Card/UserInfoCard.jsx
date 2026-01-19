import { useEffect, useState } from "react";

const UserInfoCard = ({ id }) => {
    const nameKeyOnline = `cardNameOnline${id}`;
    const nameKeyOffline = `cardNameOffline${id}`;
    const genderKeyOnline = `cardGenderOnline${id}`;
    const genderKeyOffline = `cardGenderOffline${id}`;
    const getStoredData = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    };
    const checkInternet = async () => {
        try {
            await fetch("https://www.google.com/favicon.ico", {
                method: "HEAD",
                mode: "no-cors",
            });
            return true;
        } catch {
            return false;
        }
    };
    const setStoredData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };
    const [name, setName] = useState(
        getStoredData(nameKeyOnline)?.value ||
        ""
    );
    const [conflict, setConflict] = useState(false)
    const removeItemLocalStorage = (key) => {
        localStorage.removeItem(key);
    }
    const [gender, setGender] = useState(
        getStoredData(genderKeyOnline)?.value ||
        ""
    );
    useEffect(() => {
        const handleOnline = async () => {
            const isOnline = await checkInternet();
            if (!isOnline) return;

            const offlineName = getStoredData(nameKeyOffline);
            const onlineName = getStoredData(nameKeyOnline);
            const offlineGender = getStoredData(genderKeyOffline);
            const onlineGender = getStoredData(genderKeyOnline);

            if (
                (offlineName && onlineName && offlineName.value !== onlineName.value) ||
                (offlineGender && onlineGender && offlineGender.value !== onlineGender.value)
            ) {
                setConflict(true);
            } 
        };

        window.addEventListener("online", handleOnline);
        return () => window.removeEventListener("online", handleOnline);
    }, []);
    const handleNameChange = async (e) => {
        const value = e.target.value;
        setName(value);

        const isOnline = await checkInternet();

        if (isOnline) {
            setStoredData(nameKeyOnline, { value });
        } else {
            setStoredData(nameKeyOffline, { value });
        }
    };
    const handleGenderChange = async (e) => {
        const value = e.target.value;
        setGender(value);

        const isOnline = await checkInternet();

        if (isOnline) {
            setStoredData(genderKeyOnline, { value });
        } else {
            setStoredData(genderKeyOffline, { value });
        }
    };
    const genderOption = ["Male", "Female", "Other"]
    const keepOfflineData = () => {
        const offlineName = getStoredData(nameKeyOffline);
        const offlineGender = getStoredData(genderKeyOffline);

        if (offlineName) {
            setStoredData(nameKeyOnline, offlineName);
            setName(offlineName.value);
            removeItemLocalStorage(nameKeyOffline);
        }

        if (offlineGender) {
            setStoredData(genderKeyOnline, offlineGender);
            setGender(offlineGender.value);
            removeItemLocalStorage(genderKeyOffline);
        }

        setConflict(false);
    };
    const keepOnlineData = () => {
        removeItemLocalStorage(nameKeyOffline);
        removeItemLocalStorage(genderKeyOffline);
        setGender(getStoredData(genderKeyOnline).value)
        setName(getStoredData(nameKeyOnline).value)

        setConflict(false);
    };
    return (
        <div className="w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
                User Information Card {id}
            </h2>

            <div className="mb-4">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleNameChange}
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                    Gender
                </label>

                <div className="flex gap-4">
                    {genderOption.map((option) => (
                        <label
                            key={option}
                            className="flex items-center gap-1 text-sm text-gray-600"
                        >
                            <input
                                type="radio"
                                name={`gender-${id}`}
                                value={option}
                                checked={gender === option}
                                onChange={handleGenderChange}
                                className="accent-blue-600"
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            {conflict && (
                <div className="mt-6 rounded-md  bg-yellow-100 text-sm">
                    <p className="mb-3 font-medium text-yellow-800">
                        You changed data while offline. What do you want to keep?
                    </p>

                    <div className="flex gap-3">
                        <button
                            onClick={keepOfflineData}
                            className="rounded bg-green-600 px-3 py-1 text-white"
                        >
                            Keep Offline Changes
                        </button>

                        <button
                            onClick={keepOnlineData}
                            className="rounded bg-red-600 px-3 py-1 text-white"
                        >
                            Keep Online Data
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserInfoCard;