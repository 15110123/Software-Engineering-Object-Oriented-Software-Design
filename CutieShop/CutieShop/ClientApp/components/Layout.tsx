//ReSharper disable All
import * as React from 'react';
import { ChatBox } from "./chatBox/ChatBox";

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-3'>
                        {
                            //Add nav here
                        }
                    </div>
                    <div className='col-sm-9'>
                        {this.props.children}
                    </div>
                </div>
            </div>
            <ChatBox />
        </div>
    }
}
