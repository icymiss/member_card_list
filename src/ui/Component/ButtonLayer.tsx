import React from "react";
import {Button, Container} from "react-bootstrap";
import "./ButtonLayerStyle.css";

export default function ButtonLayer(){
        return (

            <div id={"button-flex-container"}>
                <div>
                    <Button id={"button"} size="lg">
                        NEW
                    </Button>{' '}
                    <Button id={"longer-button"}  size="lg" >
                        BULK CREATE NEW CARD
                    </Button>
                </div>
                <div>
                    <Button id={"button"} size="lg">
                        CLEAR
                    </Button>{' '}
                    <Button id={"button"}  size="lg" >
                        SEARCH
                    </Button>
                </div>
            </div>
        )
}