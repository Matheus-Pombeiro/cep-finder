import { useTranslation } from "react-i18next";

const ModalContent = () => {
    const { t } = useTranslation();   // Translation reference

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="h1">{t("What is CEP?")}</h1>
            <p className="p">      
                {t("CEP is the acronym for Postal Address Code, created and used by the Post Office to facilitate the routing and delivery of correspondence to recipients. The CEP is essential information in correspondence, as it identifies all the details of the address of the person receiving or sending the correspondence.")}
            </p>
            <p className="p">
                {t("In Brazil, the CEP number is made up of eight digits, which identify the address of the recipient of the correspondence, facilitating its delivery.")}
            </p>
        </div>
    );
};

export default ModalContent;