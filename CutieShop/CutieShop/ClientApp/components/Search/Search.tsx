import * as React from "react"
import {RouteComponentProps} from "react-router"

export class Search extends React.Component<RouteComponentProps<{}>, {keyword : string}> 
{
    constructor(props) {
        super(props);
        let params = new URLSearchParams(this.props.location.search);
        this.state = { keyword: params.get("keyword") as string };
    }

    render() {
        return <div>
            <label>Bạn vừa tìm {this.state.keyword}</label>
        </div>;
    }    

    componentWillReceiveProps(newProps) {
        let params = new URLSearchParams(newProps.location.search);
        this.setState({ keyword: params.get("keyword") as string });
    }
}