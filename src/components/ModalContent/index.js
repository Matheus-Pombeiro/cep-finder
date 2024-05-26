const ModalContent = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="h1">What is CEP?</h1>
            <p className="p">      
                CEP is the acronym for Postal Address Code, created and used by the Post Office to facilitate the routing and delivery of correspondence to recipients. The CEP is essential information in correspondence, as it identifies all the details of the address of the person receiving or sending the correspondence.
            </p>
            <p className="p">
                In Brazil, the CEP number is made up of eight digits, which identify the address of the recipient of the correspondence, facilitating its delivery.
            </p>
        </div>
    );
};

export default ModalContent;