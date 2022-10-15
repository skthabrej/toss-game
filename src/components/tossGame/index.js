import { Component } from "react";
import './index.css'

class TossGame extends Component {
    state = {
        total:0,
        heads:0,
        tails:0,
        imgUrl:"https://i.ibb.co/Jjq1tK7/Empty-Gold-Coin-Transparent.png",
        alt:"transparent"
    }

    onImageChange = () => {
        let url = ""
        let urlAlt = ""
        let {total,heads,tails} = this.state
        const randomImg = Math.ceil(Math.random()*2)
        if (randomImg === 1) {
            url="https://i.ibb.co/qd3cWsg/96362871-gold-dollar-coin-circle-coin-with-dollar-symbol-isolated-on-transparent-background-means-of.webp"
            urlAlt="transparent"
            heads = heads + 1
        } else {
            url="https://i.ibb.co/Jjq1tK7/Empty-Gold-Coin-Transparent.png"
            urlAlt="non-transparent"
            tails = tails + 1
        }

        total = tails+heads

        this.setState({
            imgUrl: url,
            alt:urlAlt,
            tails:tails,
            heads:heads,
            total:total
        })
    }


    render() {
        const {total,heads,tails,imgUrl,alt} = this.state
        return (
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Coin toss Game</h1>
                    <p className="paragraph">Heads (or) Tails</p>
                    <div className="img-container">
                        <img className="img-coins" src={imgUrl} alt={alt}/>
                    </div>
                    <button className="btn-style" onClick={this.onImageChange}>Toss Coin</button>
                    <div className="counts-container">
                        <span className="counts-paragraph">Total:{total}</span>
                        <span className="counts-paragraph">Heads:{heads}</span>
                        <span className="counts-paragraph">Tails:{tails}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default TossGame