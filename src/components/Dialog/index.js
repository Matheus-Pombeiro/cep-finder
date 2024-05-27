import { forwardRef } from "react";

import { useTranslation } from "react-i18next";

const Dialog = forwardRef(({ children, toggleDialog }, ref) => {
    const { t } = useTranslation();   // Translation reference

    return (
        <dialog
            className="w-11/12 lg:w-5/12 rounded-lg drop-shadow"
            ref={ref}
            onClick={(e) => {
                if (e.currentTarget === e.target) toggleDialog();
            }}
        >
            <div className="p-5 flex flex-col justify-center items-center gap-4">
                {children}
                <button
                className="px-3 py-1 bg-blue-500 text-white font-medium text-lg rounded hover:bg-blue-600 active:bg-blue-400"
                    onClick={toggleDialog}
                >
                    {t("Close")}
                </button>
            </div>
        </dialog>
    );
});

export default Dialog;