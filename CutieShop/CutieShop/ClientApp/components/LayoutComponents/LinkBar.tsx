import * as React from "react"
import "../../css/LinkBar/linkbar.css"

export class LinkBar extends React.Component<{drawerBtnClick ?: Function}, {}> {
    constructor(props) {
        super(props);
        this.drawerBtnClick = this.drawerBtnClick.bind(this);
    }

    render() {
        return <div id="stickyBar">
                   <span id="linkGroup">
                       <a href="#">Giới thiệu</a>
                       |
                       <a href="#">Bài viết</a>
                       |
                       <a href="#">Liên hệ</a>
                   </span>
                   <span id="profileBar">
                       <label>Chào bạn abc!</label>
                       <img src="https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg" alt="Profile image"/>
                       <label id="drawerBtn" onClick={this.drawerBtnClick}>&#9776;</label>
                   </span>
               </div>;
    }

    drawerBtnClick() {
        if (this.props.drawerBtnClick == null) return;
        this.props.drawerBtnClick();
    }
}