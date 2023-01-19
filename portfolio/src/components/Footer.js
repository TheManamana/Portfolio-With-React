import React from "react";
import { Navbar } from "react-bootstrap";
import gitlogo from "../assets/github.png";

export default function Footer() {
    return (
        <Navbar fixed="bottom" className="justify-content-center bg-white border-top">
            <div>

                <a href="https://github.com/TheManamana" target="_blank">
                    <img src={gitlogo} height="50px" alt="GitHub" />
                </a>
            </div>
        </Navbar>
    );
}