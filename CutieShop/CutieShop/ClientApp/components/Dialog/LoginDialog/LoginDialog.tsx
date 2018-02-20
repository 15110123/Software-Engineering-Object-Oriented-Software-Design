import * as React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Dialog from "material-ui/Dialog";
import FlatButton from 'material-ui/FlatButton';

export class LoginDialog extends React.Component<{loginClick ?: Function}, { isOpen: boolean }> {
    actions = [
        <FlatButton
            label="Đăng nhập"
            primary={true}
            onClick={this.loginClick}
        />
    ];

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.loginClick = this.loginClick.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);
    }

    render() {
        return <MuiThemeProvider>
            <Dialog title="Đăng nhập" actions={this.actions} modal={false} open={this.state.isOpen} onRequestClose={this.toggleDialog}>
                Cửa sổ đăng nhập!
                   </Dialog>
        </MuiThemeProvider>;
    }

    toggleDialog() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    loginClick() {
        this.toggleDialog();
        if (this.props.loginClick == null) return;
        this.props.loginClick();
    }
}