import React from "react";
import home from "../assets/home.png";

export default function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="content">
                    <p className="sub-title">Запуск скоро</p>
                    <h1 className="title">NFT, не похожий на другие</h1>
                    <p className="description">
                        Не пропустите релиз нашего нового NFT. Подпишитесь на уведомления, чтобы быть в курсе событий.
                    </p>
                    <button>Присоединиться</button>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={home} alt="home" />
                    </div>
                    <div className="ellipse-container">
                        <div className="ellipse pink"></div>
                        <div className="ellipse orange"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
