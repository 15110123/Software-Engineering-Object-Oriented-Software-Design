//ReSharper disable All
import * as React from 'react';
import { ChatBox } from "./ChatBox/ChatBox";
import {Header} from "./LayoutComponents/Header"
import {Drawer} from "./LayoutComponents/Drawer/Drawer"
import {LinkBar} from "./LayoutComponents/LinkBar"
import {LoginDialog} from "./Dialog/LoginDialog/LoginDialog"

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {isLoggedIn : boolean}> {
    drawer : any;
    loginDialog : any;

    constructor(props) {
        super(props);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.toggleLoginDialog = this.toggleLoginDialog.bind(this);
        this.setToLoggedIn = this.setToLoggedIn.bind(this);

        this.state = { isLoggedIn: window.user != null };
    }

    public render() {
        return <div>
            <LoginDialog ref={(o) => {this.loginDialog = o}} loginSuccess={this.setToLoggedIn}/>
            {this.state.isLoggedIn && <Drawer ref={(o) => { this.drawer = o }} />}
            <LinkBar drawerBtnClick={this.toggleDrawer} loginLinkClick={this.toggleLoginDialog} isLoggedIn={this.state.isLoggedIn}/>
            <Header/>
            <ChatBox />
            {this.props.children}
        </div>
    }

    toggleDrawer() {
        this.drawer.toggleDrawer();
    }

    toggleLoginDialog() {
        this.loginDialog.toggleDialog();
    }

    //Change to logged in style
    setToLoggedIn() {
        this.setState({ isLoggedIn: true });
    }
}
