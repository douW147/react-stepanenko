import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts"
import Blog from "./components/Blog/Blog";

function App() {
    return (
        <div className="App">
            <Header />
			<div className="router-container"></div>
            <Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/about" element={<About />}/>
				<Route path="/contacts" element={<Contacts />}/>
				<Route path="/blog" element={<Blog />}/>
            </Routes>
        </div>
    );
}

export default App;
