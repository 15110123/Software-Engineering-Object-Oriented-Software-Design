//ReSharper disable All
import * as React from 'react';
import { ChatBox } from "./chatBox/ChatBox";
import {Header} from "./LayoutComponents/Header"
import {Drawer} from "./LayoutComponents/Drawer/Drawer"
import {LinkBar} from "./LayoutComponents/LinkBar"

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    drawer : any;

    constructor(props) {
        super(props);
        this.drawerBtnClick = this.drawerBtnClick.bind(this);
    }

    public render() {
        return <div>
            <Drawer ref={(o) => {this.drawer = o}}/>
            <LinkBar drawerBtnClick={this.drawerBtnClick}/>
            <Header/>
            <ChatBox />
            {this.props.children}
        </div>
    }

    drawerBtnClick() {
        this.drawer.toggleDrawer();
    }
}
