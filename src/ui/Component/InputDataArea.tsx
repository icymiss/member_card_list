import React from "react";
import {Container, Form} from "react-bootstrap";
import "./inputDataAreaStyle.css";

export default function InputDataArea(){
        return(
            <div>
                <div id={"inputDataArea-flex-container"}>
                    <div id={"1st-column"}>
                        <div id={"cardCode"}>
                            <div id={"inputMenuPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Card Code" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Start Date From" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="End Date To" />
                        </div>
                    </div>
                    <div id={"2nd-column"}>
                        <div id={"accountCode"}>
                            <div id={"inputMenuPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Account Code" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Start Date To" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Create Date From" />
                        </div>
                    </div>
                    <div id={"3rd-column"}>
                        <div id={"userName"}>
                            <div id={"inputMenuPic"}></div>
                            <Form.Control id={"placeholder"} placeholder="Name" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="End Date From" />
                        </div>
                        <div id={"cardCode"}>
                            <div id={"inputCalendarPic"}></div>
                            <Form.Control id={"placeholder"}placeholder="Create Date To" />
                        </div>
                    </div>
                </div>
            </div>

        )
}