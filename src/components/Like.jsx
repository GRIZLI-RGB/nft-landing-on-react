import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
    return (
        <div className="like">
            <div className="container">
                <div className="content">
                    <div className="image">
                        <img src={eth1} alt="eth1" />
                    </div>
                    <h2 className="title">NFT, не похожий на другие</h2>
                    <p className="description">
                        Не пропустите выпуск нашего нового NFT. Подпишитесь ниже, чтобы получать обновления, когда мы
                        выйдем в эфир.
                    </p>
                    <p className="description">
                        Всегда будьте в курсе событий, получайте уникальные акционные предложений и участвуйте в конкурсах!
                    </p>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={eth2} alt="eth2" />
                    </div>
                    <h2 className="title">NFT, не похожий на другие</h2>
                    <p className="description">
                        Не пропустите выпуск нашего нового NFT. Подпишитесь ниже, чтобы получать обновления, когда мы
                        выйдем в эфир.
                    </p>
                    <p className="description">
                    Всегда будьте в курсе событий, получайте уникальные акционные предложений и участвуйте в конкурсах!
                    </p>
                </div>
            </div>
        </div>
    );
}
