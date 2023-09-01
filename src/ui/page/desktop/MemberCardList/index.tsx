import React from "react";
import InputDataArea from "../../../Component/InputDataArea";
import ButtonLayer from "../../../Component/ButtonLayer";
import Header from "../../../Component/Header";

import {Container} from "react-bootstrap";
import ResultTable from "../../../Component/ResultTable";

export default function MemberCardList(){
        return(
            <Container>
                <Header/>
                <InputDataArea/>
                <ButtonLayer/>
                <ResultTable/>
            </Container>
        )
    }
