//ReSharper disable All
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    params = new URLSearchParams(this.props.location.search);

    public render() {
        return <div>
            <label>
            </label>
               </div>;
    }
}
