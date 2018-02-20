import * as React from "react"
import "../../../css/Drawer/drawerprofile.css"

export class DrawerProfile extends React.Component<{imgUrl : string}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="drawerProfile">
            <img id="profileImg" src={this.props.imgUrl} alt="Profile image"/>
                   <span id="profileInfo">
                       <label id="profileName">{window.user.Name}</label>
                       <label id="profilePoint">{window.user.Point} điểm</label>
                   </span>
                   <div id="profileLink">
                       <div className="profileLinkWrapper">
                           <a href="#">Đăng xuất</a>
                       </div>
                   </div>
               </div>;
    }
}