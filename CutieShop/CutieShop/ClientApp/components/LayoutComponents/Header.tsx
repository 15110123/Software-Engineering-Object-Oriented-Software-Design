import * as React from "react"
import "../../css/Header/header.css"
import {NavBar} from "./NavBar"
export class Header extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div id="header">
                   <div id="logo">
                       <img src="/img/svg/Logo.svg" id="imgLogo"/>
                   </div>
                   <div id="logoText">
                       <label>Thế giới thú cưng</label>
                   </div>
                   <div id="searchBar">
                       <div id="searchInput">
                           <button id="submitBtn" form="SearchForm"></button>
                           <form method="GET" id="SearchForm">
                               <input name="keyword" id="searchText" placeholder="banh chạy, lồng mica, dây xích chó,..."/>
                           </form>
                       </div>
                   </div>
            <NavBar/>
               </div>;
    }
}