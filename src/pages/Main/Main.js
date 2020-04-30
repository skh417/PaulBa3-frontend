import React, { Component } from "react";
import MainOne from "./MainOne/MainOne";
import MainTwo from "./MainTwo/MainTwo";
import "./Main.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.oneRef = React.createRef();
    this.twoRef = React.createRef();
    this.state = {
      veryLeft: 50,
    };
  }

  moveScroll = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      // oneReft로 이동
      console.log(this.state.veryLeft);
      if (this.state.veryLeft === 50) {
        window.scroll({
          top: this.oneRef.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      } else {
        console.log("올라가지마ㅠㅠ");
        // window.scroll(0, this.twoRef.offsetTop);
        window.scrollTo(0, this.twoRef.offsetTop);
      }
    } else if (e.nativeEvent.wheelDelta < 0) {
      // twoRef로 이동
      window.scroll({
        top: this.twoRef.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };

  scrollHorizontal = (e) => {
    if (e.nativeEvent.wheelDelta > 0) {
      // 마우스 휠 UP
      this.setState({
        veryLeft: this.state.veryLeft + 100,
      });
      if (this.state.veryLeft >= 50) {
        this.setState({ veryLeft: 50 });
      }
    } else {
      // 마우스 휠 DOWN
      this.setState({
        veryLeft: this.state.veryLeft - 100,
      });
      // console.log('width', window.innerWidth / document.documentElement.clientWidth * 100)
      // console.log('실제 width', window.innerWidth)
      // console.log('최대치', (window.innerWidth) * 1.2)
      // console.log('left', this.state.veryLeft)
      // console.log(`만약 왼쪽값 ${this.state.veryLeft}이 윈도우 width ${-window.innerWidth}보다 커진다면, `)
      // if (this.state.veryLeft <= -(window.innerWidth * 1.2)) {
      //     this.setState({ veryLeft: -(window.innerWidth * 1.8) })
      // }

      if (this.state.veryLeft <= -1200) {
        console.log(this.state.veryLeft);
        this.setState({ veryLeft: -1200 });
      }
    }
  };

  render() {
    return (
      <div className='Main' onWheel={this.moveScroll}>
        <div
          ref={(ref) => {
            this.oneRef = ref;
          }}
        >
          <MainOne />
        </div>
        <div
          ref={(ref) => {
            this.twoRef = ref;
          }}
        >
          <MainTwo
            veryLeft={this.state.veryLeft}
            scrollHorizontal={this.scrollHorizontal}
          />
        </div>
      </div>
    );
  }
}

export default Main;
