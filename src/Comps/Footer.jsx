import React from 'react';
import "../App.css";
const Footer = () => {
    return (
        <footer className="text-center text-white" >
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        target="_blank" href="https://www.facebook.com/GhassaanK"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="fab fa-facebook-f green-icon"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        target="_blank" href="https://twitter.com/GhassaanK"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="fab fa-twitter green-icon"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        target="_blank" href="https://www.instagram.com/im.ghassaan"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="fab fa-instagram green-icon"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        target="_blank" href="https://www.linkedin.com/in/ghassaank/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="fab fa-linkedin green-icon"></i>
                    </a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        target="_blank" href="https://github.com/GhassaanK"
                        role="button"
                        data-mdb-ripple-color="dark"
                        style={{ marginRight: '5px' }}
                    >
                        <i className="fab fa-github green-icon"></i>
                    </a>
                </section>
            </div>

            <div className="text-center text-light p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                © 2023 Copyright 
                <a className="text-light" target="_blank" href="https://ghassaan.netlify.app"> Ghassaan</a>
            </div>
        </footer>
    );
};

export default Footer;