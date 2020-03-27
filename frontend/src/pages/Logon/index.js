import React from 'react';

import './styles.css';

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>

            </section>

            <form>
                <h1>Faça seu losssaaaagon</h1>

                <input type="text" placeholder="Sua ID"/>
            </form>

            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}