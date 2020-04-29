import React from "react";

export default class Todo extends React.Component {
    constructor(props) {
        super();
    }

    render () {
        const { complete, edit, text } =  this.props;
        const icon = complete ? "\u2714" : "\u2716";
        if (edit) {
            return (
                <li>
                    <input value={text} focus="focused" />
                </li>
            );
        }

        return (
            <li style={{listStyleType: "none"}}>
                <span>{icon}</span>&nbsp;<span>{text}</span>
            </li>
        )
    }
}