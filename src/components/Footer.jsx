import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    const links = [
        {
            title: "О проекте",
            data: ["Запуск", "Документы"],
        },
        {
            title: "NFT",
            data: ["OpenSea", "Обучение"],
        },
        {
            title: "Контакты",
            data: ["Пресса", "Поддержка"],
        },
        {
            title: "Социальные сети",
            data: ["Twitter", "Instagram"],
        },
    ];

    const socialLink = [<BsFacebook />, <BsTwitter />, <BsInstagram />, <FaTiktok />];

    return (
        <footer>
            <div className="upper">
                <div className="brand-container">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                    </div>
                    <p>Эксклюзивные NFT-коллекции</p>
                    <ul>
                        {socialLink.map((link, index) => (
                            <li key={index}>{link}</li>
                        ))}
                    </ul>
                </div>
                <div className="links">
                    {links.map(({ title, data }, index) => {
                        return (
                            <div className="link" key={index}>
                                <h4>{title}</h4>
                                <ul>
                                    {data.map((link, index2) => (
                                        <li key={index2}>{link}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="lower">
                <span>&copy; Copyright 2023 NFTLanding</span>
                <span>Запуск в декабре 2023 года</span>
            </div>
        </footer>
    );
}
