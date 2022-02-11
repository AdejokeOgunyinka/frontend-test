import logo from "./logo.svg";
import "./App.css";
import Button from "./components/atoms/Button";
import Link from "./components/atoms/LinkWithArrow";
import DownloadButton from "./components/atoms/DownloadBtn";
import Navbar from "./components/molecules/Navbar";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          text="Join our Community"
          textColor="#2d2d2d"
          bgColor="#07969E"
        />
        <Link text="Start Investing Now" rightArrow />
        <DownloadButton apple />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
