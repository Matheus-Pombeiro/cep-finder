import { useTranslation } from "react-i18next";

const Address = ({ address }) => {
    const { t } = useTranslation();   // Translation reference

    return (
        <div className="w-5/6 lg:w-3/6 p-5 border bg-gray-200 border-gray-300 rounded-md drop-shadow flex flex-col justify-center items-center dark:bg-neutral-800 dark:border-neutral-700">
            <ul>
                <li className="li">CEP: {address.cep}</li>
                <li className="li">{t("State")}: {address.state}</li>
                <li className="li">{t("City")}: {address.city}</li>
                <li className="li">{t("Neighborhood")}: {address.neighborhood}</li>
                <li className="li">{t("Street")}: {address.street}</li>
                <li className="li">DDD: {address.ddd}</li>
            </ul>
        </div>
    );
};

export default Address;