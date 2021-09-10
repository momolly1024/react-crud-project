import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import List from "./pages/List";
import Footer from "./component/Footer";
import Title from "./component/Title";
import Weight from "./pages/Weight";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Container maxWidth="sm">
                <Router>
                    <Breadcrumbs aria-label="breadcrumb" className="Nav_link">
                        <NavLink to="/" className="Nav_link">
                            <p>List ٩(ˊᗜˋ )و</p>
                        </NavLink>

                        <NavLink
                            activeClassName="active"
                            to="/Weight"
                            className="Nav_link"
                        >
                            <p>Weight (˘•ω•˘) </p>
                        </NavLink>
                        <NavLink
                            activeClassName="active"
                            to="/About"
                            className="Nav_link"
                        >
                            <p>About (๑•́ ₃ •̀๑) </p>
                        </NavLink>
                    </Breadcrumbs>

                    <div>
                        <Route exact={true} path="/" component={List} />
                        <Route exaxt path="/Weight" component={Weight} />
                        <Route exaxt path="/About" component={About} />
                    </div>
                </Router>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
