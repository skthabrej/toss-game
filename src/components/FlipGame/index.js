import { Component } from "react";
import './index.css'

class FlipGame extends Component {
    state = {
        total:0,
        happy:0,
        sad:0,
        imgUrl:"https://i.ibb.co/4tYVG3k/png-clipart-yellow-emoji-clapping-animation-hand-happy-face-face-people.png",
        alt:"Happy"
    }

    onImageChange = () => {
        let url = ""
        let urlAlt = ""
        let {total,happy,sad} = this.state
        const randomImg = Math.ceil(Math.random()*2)
        if (randomImg === 1) {
            url="https://i.ibb.co/4tYVG3k/png-clipart-yellow-emoji-clapping-animation-hand-happy-face-face-people.png"
            urlAlt="snake-eaten"
            happy = happy + 1
        } else {
            url="https://i.ibb.co/kQYQxgw/png-transparent-sad-emoji-emoji-smirk-face-smile-emoticon-lost-expression-orange-smiley-cartoon.png"
            urlAlt="snake"
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
                    <button className="btn-style" onClick={this.onImageChange}>Flip</button>
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