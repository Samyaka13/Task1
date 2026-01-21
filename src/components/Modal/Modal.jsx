const Modal = ({ open, onClose, title, para,children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg w-125 max-w-full">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <div className="flex-col">
                    <h1 className="text-2xl flex font-bold">{title}</h1>
                    <h1 className="font-medium flex pt-1">{para}</h1>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
