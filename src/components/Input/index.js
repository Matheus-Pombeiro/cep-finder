const Input = ({ changeAddress }) => {
    return (
        <div className="w-5/6 lg:w-4/6 space-y-1.5">
            <label
                htmlFor="cep"
                className="text-xl font-medium dark:text-white"
            >
                CEP
            </label>
            <input 
                type="text"
                id="cep"
                className="h-10 w-full px-3 text-lg text-gray-800 bg-gray-200 outline-none border border-gray-300 focus:ring ring-blue-100 focus:border-blue-200 rounded"
                placeholder="CEP..."
                onChange={e => changeAddress(e.target.value)}
            /> 
        </div>
    );
};

export default Input;