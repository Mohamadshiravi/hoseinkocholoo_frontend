import Footer from "./components/module/footer";
import Header from "./components/module/header";
import MobileNavbar from "./components/module/mobileNavbar";
import Home from "./components/template/home/home";

function App() {
  return (
    <main className="text-zinc-800 antialiased">
      <Header />
      <Home />
      <MobileNavbar />
      <Footer />
    </main>
  );
}

export default App;
