import React, { Component } from "react";
import "./Coffee.scss";

class Coffee extends Component {
    render() {
        const { korName, engName, img, isNew, isBest} = this.props;

        return (
            <div className="Coffee">
                <div className="oneCoffee">
                    <div>
                        <img className="icon" src={`https://www.baristapaulbassett.co.kr/${img}`} />
                        <div className="text">
                            {korName}<span>{engName}</span>
                        </div>
                    </div>
                </div>


                {/* <div className="oneContainer">
                    <div>
                        <img className="icon" src={icon} />
                        <div className="text">
                            아이스 카라멜 마키아토 <span>Iced Caramel Macchiato</span>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Coffee