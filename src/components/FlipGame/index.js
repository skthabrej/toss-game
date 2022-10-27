import { Component } from "react";
import './index.css'

class FlipGame extends Component {
    state = {
        total:0,
        happy:0,
        sad:0,
        imgUrl:"https://i.postimg.cc/rmKvPQRG/emoticon-g756e3677e-1920.png",
        alt:"Happy"
    }

    onImageChange = () => {
        let url = ""
        let urlAlt = ""
        let {total,happy,sad} = this.state
        const randomImg = Math.ceil(Math.random()*2)
        if (randomImg === 1) {
            url="https://i.postimg.cc/rmKvPQRG/emoticon-g756e3677e-1920.png"
            urlAlt="Happy"
            happy = happy + 1
        } else {
            url="https://i.postimg.cc/MpJqj2MC/emoji-gbcd5245e0-1920.png"
            urlAlt="sad"
            sad = sad + 1
        }

        total = sad+happy

        this.setState({
            imgUrl: url,
            alt:urlAlt,
            sad:sad,
            happy:happy,
            total:total
        })
    }


    render() {
        const {total,happy,sad,imgUrl,alt} = this.state
        return (
            <div className="bg-container">
                <div className="card-container">
                    <h1 className="heading">Happy or Sad Game</h1>
                    <p className="paragraph">Transition</p>
                    <div className="img-container">
                        <img className="img" src={imgUrl} alt={alt}/>
                    </div>
                    <button className="btn-style" onClick={this.onImageChange}>C L I C K</button>
                    <div className="counts-container">
                        <span className="counts-paragraph">Total:{total}</span>
                        <span className="counts-paragraph">Happy:{happy}</span>
                        <span className="counts-paragraph">Sad:{sad}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default FlipGame