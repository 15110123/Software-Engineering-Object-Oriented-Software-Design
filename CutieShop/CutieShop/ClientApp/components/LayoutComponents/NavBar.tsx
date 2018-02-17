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
                    <NavButton name="Hamster">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Bọ ú">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Thỏ">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Bò sát">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Chó">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
                <div className="col-lg-2">
                    <NavButton name="Mèo">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </NavButton>
                </div>
            </div>
        </div>;
    }
}