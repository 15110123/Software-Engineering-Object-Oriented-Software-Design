//ReSharper disable All
import * as React from "react"
import "../../css/chatBox/chatbox.css"
//import jsScript from "../../js/chatbox.js"

export class ChatBox extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return <div id="chatbox-container" className="hover-fx">
            <div id="chatbox-main" style={{ display: "none"}}>
                       <div id="chatbox-form-container">
                           <form id="chatbox-form">
                        <textarea id="chatbox-form-input" form="chatbox-form" name="message" rows={1}></textarea>
                           </form>
                       </div>
                   </div>
                   <div id="chatbox-footer">
                       <span id="chatbox-icon-container">
                    <img id="chatbox-icon" src="/img/svg/ChatBoxIcon.svg"/>
                       </span>
                       <span id="chatbox-label-container">
                           <label>Hãy chat với chúng mình!</label>
                       </span>
                   </div>
               </div>
    }

    componentDidMount() {
        //jsScript();
    }
}