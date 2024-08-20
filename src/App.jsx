import Navbar from "./components/Navbar";
import EventList from "./components/EventList";
import Footer from "./components/Footer";
import JoinUs from "./components/JoinUs";
import Hero from "./components/Hero"
import "./App.css";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="">
        <Navbar />
      </div>
      <div className="bg-black ">
        <Hero />
      </div>
      <div>
        <div>
          <EventList />
          <JoinUs />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
