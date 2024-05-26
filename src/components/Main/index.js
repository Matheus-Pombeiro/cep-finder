import { useState } from "react";

import Input from "../Input";
import Address from "../Address";

const Main = () => {
    const [address, setAddress] = useState({});

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

    return (
        <main className="w-full h-full flex flex-col items-center gap-5">
            <section className="h-fit w-10/12 lg:w-7/12 xl:w-2/6 p-6 bg-white opacity-90 rounded-lg drop-shadow-lg flex flex-col justify-center items-center gap-4 dark:bg-neutral-700">
                <h1 className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text">CEP Finder</h1>
                <Input
                    changeAddress={(value) => handleAddress(value)} 
                />
                <Address address={address} />
                <button 
                    type="button"
                    onClick={() => setAddress({})}
                    className="px-3 py-1 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-400 rounded"
                >
                    Clean
                </button>
            </section>

        </main>
    );
};

export default Main;