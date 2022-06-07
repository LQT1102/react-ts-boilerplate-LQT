import React from "react";
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import loadable from "./utils/loadable";

const DemoPage = loadable(() => import("./pages/DemoPage"));

function App() {
    return (
        <React.Fragment>
            <Helmet
                titleTemplate="React.js Boilerplate"
                defaultTitle="React.js Boilerplate"
            >
                <meta
                    name="description"
                    content="A React.js Boilerplate application"
                />
            </Helmet>
            <Routes>
                <Route path="/" element={<DemoPage />}>
                    <Route path="/demo" element={<DemoPage />} />
                </Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;
