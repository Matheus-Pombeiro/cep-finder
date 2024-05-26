import { useRef, useState } from "react";

import { AiFillQuestionCircle } from "react-icons/ai";

import Input from "../Input";
import Address from "../Address";
import ModalContent from "../ModalContent";
import Dialog from "../Dialog";

const Main = () => {
    const [address, setAddress] = useState({});     // Declare an object that contains the address based on the cep

    const [dialogContent, setDialogContent] = useState(null);

    // Declare a function that hadle the adress through an API using the CEP
    const handleAddress = (value) => {
        const cep = value;

        setAddress({ cep });

        if (cep && cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    setAddress(previousAddress => ({
                        ...previousAddress,
                        state: data.uf,
                        city: data.localidade,
                        neighborhood: data.bairro,
                        street: data.logradouro,
                        ddd: data.ddd
                    }))
                })
        };
    };

    const dialogRef = useRef(null);

    const toggleDialog = () => {
        if (!dialogRef.current) return;

        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    };

    return (
        <main className="w-full h-full flex flex-col items-center gap-5">
            <section className="h-fit w-10/12 lg:w-7/12 xl:w-2/6 p-6 bg-white opacity-90 rounded-lg drop-shadow-lg flex flex-col justify-center items-center gap-4 dark:bg-neutral-700">
                <h1 className="h1">CEP Finder</h1>
                <Input
                    changeAddress={(value) => handleAddress(value)} 
                />
                <Address address={address} />
            </section>

            <button 
                onClick={() => {
                    setDialogContent(<ModalContent />)
                    toggleDialog()
                }}
            >
                <AiFillQuestionCircle 
                    size={80}
                    title="Know More"
                />
            </button>

            <Dialog
                ref={dialogRef}
                toggleDialog={toggleDialog}
            >
                {dialogContent}
            </Dialog>
        </main>
    );
};

export default Main;