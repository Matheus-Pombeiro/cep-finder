import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div 
      className="h-dvh bg-cover bg-center flex flex-col items-center gap-14"
      style={{ backgroundImage: "url(/assets/cep-finder-background.jpg)" }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
