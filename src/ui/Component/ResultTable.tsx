import {Button, Table} from "react-bootstrap";
import "./ResultTableStyle.css";

export default function ResultTable(){
    return(
        <div>
            <Table striped bordered hover>
                <thead >
                <tr>
                    <th>ID</th>
                    <th>Card Code</th>
                    <th>Account Code</th>
                    <th>Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Create Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    Array. from({length: 10}).map(()=>(
                    <tr>
                        <td>86514</td>
                        <td>49821881</td>
                        <td></td>
                        <td></td>
                        <td>2010-12-01</td>
                        <td>2029-04-05</td>
                        <td>2020-12-29 15:44:58</td>
                        <td>
                            <div id={"detailEdit-flex-container"}>
                                <Button id={"button-inResultTable"} variant="outline-info" size="lg">
                                Details
                                </Button>
                                <Button id={"button-inResultTable"} variant="outline-info" size="lg">
                                    Edit
                                </Button>
                            </div>
                        </td>

                    </tr>
                    ))
                }
                </tbody>
            </Table>
        </div>
    )
}