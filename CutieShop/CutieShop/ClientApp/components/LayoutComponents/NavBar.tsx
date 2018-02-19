import * as React from "react"
import { NavButton } from "./NavButton"

export class NavBar extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{marginTop: "25px" }}>
            <div className="row" style={{ margin: "0 5px 0 5px", textAlign: "center" }}>
                <div className="col-lg-2">
                    <NavButton name="Hamster" icon="/img/svg/HamsterIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Bọ ú" icon="/img/svg/GuineaPigIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Thỏ" icon="/img/svg/RabbitIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Bò sát" icon="/img/svg/TurtleIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Chó" icon="/img/svg/DogIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Mèo" icon="/img/svg/CatIcon.svg">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
            </div>
        </div>;
    }
}