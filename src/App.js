import Header from "./components/Header";

const App = () => {
  return (
    <div 
      className="h-dvh bg-cover bg-center"
      style={{ backgroundImage: "url(/assets/cep-finder-background.jpg)" }}
    >
      <Header />
    </div>
  );
};

export default App;
