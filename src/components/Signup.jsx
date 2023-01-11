import React from "react";
import signup from "../assets/signup.png";

export default function Signup() {
    return (
        <div className="signup">
            <div className="container">
                <div className="content">
                    <p className="sub-title">Запуск скоро</p>
                    <h1 className="title">NFT, не похожий на другие</h1>
                    <p className="description">
                        Не пропустите релиз нашего нового NFT. Присоединяйтесь к рассылке, чтобы быть в курсе всех
                        событий.
                    </p>
                    <button>Присоединиться</button>
                </div>
                <div className="image-container">
                    <div className="image">
                        <img src={signup} alt="home" />
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
