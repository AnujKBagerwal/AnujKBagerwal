import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import TextArea from 'react-textarea-autosize'
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import { addList, addCard } from '../actions'

export class TrelloActionButton extends Component {
    state = {
        formOpen: false,
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        })
    }

    handleInputChange = e => {
        this.setState({
            ...this.state,
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addList(text))
            this.setState({ text: "" })
        }
    }

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            dispatch(addCard(listID, text))
            this.setState({ text: "" })
        }
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit"
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div className="openForButtonGroup"
                onClick={this.openForm}
                style={{
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}>
                <AddIcon>add</AddIcon>
                <p>{buttonText}</p>
            </div>
        )
    }

    rederForm = () => {

        const { list } = this.props;

        const placeholder = list ? "Enter List Title" : "Enter Title for Card";

        const buttonTitle = list ? "Add List" : "Add Card";

        return (
            <div>
                <Card
                    style={{
                        minHeight: 80,
                        minWidth: 272,
                        padding: "6px 8px 2px"
                    }}>
                    <TextArea
                        className="cardTextArea"
                        placeholder={placeholder}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        onBlur={this.closeForm}
                        autoFocus
                    />
                </Card>
                <div className="formButtonGroup">
                    <Button
                        onMouseDown={list ? this.handleAddList : this.handleAddCard}
                        variant="contained"
                        style={{
                            color: "white",
                            backgroundColor: "#5aac44"
                        }}>
                        {buttonTitle}
                    </Button>
                    <CloseIcon
                        style={{
                            marginLeft: 8,
                            cursor: "pointer"
                        }}>Close</CloseIcon>

                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.rederForm() : this.renderAddButton()
    }
}

export default connect()(TrelloActionButton);
