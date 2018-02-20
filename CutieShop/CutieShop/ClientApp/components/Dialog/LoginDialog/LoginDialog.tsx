import * as React from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import "../../../css/Dialogs/logindialog.css"

export class LoginDialog extends React.Component<{ loginSuccess?: Function }, { isOpen: boolean }> {
    actions;

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.loginClick = this.loginClick.bind(this);
        this.toggleDialog = this.toggleDialog.bind(this);

        this.actions = [
            <FlatButton
                label="Đăng nhập"
                primary={true}
                onClick={this.loginClick} />
        ];
    }

    render() {
        return <MuiThemeProvider>
            <Dialog title="Đăng nhập" actions={this.actions} modal={false} open={this.state.isOpen} onRequestClose={this.toggleDialog} paperClassName="loginDialog">
                {this.renderTextField("Tên đăng nhập", false)}
                {this.renderTextField("Mật khẩu", true)}
            </Dialog>
        </MuiThemeProvider>;
    }

    //Method for rendering text field with same style
    renderTextField(label, isPassword) {
        const fieldType = isPassword ? "password" : "text";
        return <TextField floatingLabelText={label} type={fieldType} fullWidth={true
        } className="loginTextField" underlineFocusStyle={{ borderColor: "#1B5E20" }} floatingLabelFocusStyle={
            { color: "#1B5E20" }} underlineStyle={{ borderColor: "#616161" }} />;
    }

    toggleDialog() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    loginClick() {
        //Add "checking auth" codes here 

        this.toggleDialog();
        //Testing profile 
        window.user = { Name: "Nguyễn Văn A", Point: 25, ProfileImg: "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/68dd54ca-60cf-4ef7-898b-26d7cbe48ec7/10-dithering-opt.jpg"};
        if (this.props.loginSuccess == null) return;
        this.props.loginSuccess();
    }
}