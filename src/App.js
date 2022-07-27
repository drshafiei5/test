
import { Routes, Route, Link } from "react-router-dom";
import { BsHouse, BsInfoSquare } from "react-icons/bs";
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import './App.css';


function App() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-auto bg-light sticky-top">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                        <Link to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                            <BsHouse size={28} />
                        </Link>
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                                    <BsInfoSquare size={28} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm p-3 min-vh-100">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </div>
            </div >
        </div >
    );
}

export default App;
