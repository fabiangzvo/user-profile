import Navbar from "@components/navbar";
import Home from "@components/home";
import About from "@components/about";
import Interest from "@components/interest";
import Contact from "@components/contact";

export default function App() {
  return (
    <main className="main">
      <Navbar />
      <Home />
      <About />
      <Interest />
      <Contact />
    </main>
  );
}
