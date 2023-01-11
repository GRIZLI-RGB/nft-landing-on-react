import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
    return (
        <div className="releases">
            <div className="release orange">
                <div className="content">
                    <h2 className="title">Релиз / 12.12.2023</h2>
                    <p className="description">
                        Мы уже выпустили четыре NFT ограниченным тиражом, на которые можно сделать ставку через{" "}
                        <a href="#">OpenSea</a>
                    </p>
                    <p className="description">
                        Это будут единственные четыре таких NFT, которые мы когда-либо делали, так что не пропустите!
                    </p>
                    <p className="description">50% выручки идет на благотворительность.</p>
                    <a href="#" className="link">
                        Посмотреть <BsArrowRight />
                    </a>
                </div>
                <div className="image">
                    <img src={release1} alt="release" />
                    <div className="ellipse pink"></div>
                </div>
            </div>
            <div className="release green">
                <div className="card-container">
                    <Card image={release2} series="Gloop Series" title="Purple Man" price={3.95} tag="1094" time={2} />
                    <div className="ellipse orange"></div>
                </div>
                <div className="content">
                    <h2 className="title">Релиз / 12.12.2023</h2>
                    <p className="description">
                        Мы уже выпустили четыре NFT ограниченным тиражом, на которые можно сделать ставку через{" "}
                        <a href="#">OpenSea</a>
                    </p>
                    <p className="description">
                        Это будут единственные четыре таких NFT, которые мы когда-либо делали, так что не пропустите!
                    </p>
                    <p className="description">50% выручки идет на благотворительность.</p>
                    <a href="#" className="link">
                        Посмотреть <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}
