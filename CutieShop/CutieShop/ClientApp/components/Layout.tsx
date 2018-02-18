//ReSharper disable All
import * as React from 'react';
import { ChatBox } from "./chatBox/ChatBox";
import {Header} from "./LayoutComponents/Header"

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <Header/>
            <ChatBox />
            {this.props.children}
        </div>
    }
}
