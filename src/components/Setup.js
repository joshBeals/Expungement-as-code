/**
 * Joshua Alele-Beals
 * joshbeals22@gmail.com
 * github.com/joshBeals
 */
import { Accordion } from "react-bootstrap";
import Conviction from "./alloy/Conviction";
import DateRange from "./alloy/DateRange";
import WaitingPeriod from "./alloy/WaitingPeriod";
import ExpungementLimit from "./alloy/ExpungementLimit";

function Setup() {
    return(
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Offense Categories</Accordion.Header>
                <Accordion.Body>
                    <Conviction />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Date Ranges (For Waiting Periods)</Accordion.Header>
                <Accordion.Body>
                    <DateRange />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Waiting Periods (Logic)</Accordion.Header>
                <Accordion.Body>
                    <WaitingPeriod />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Expungement Limits</Accordion.Header>
                <Accordion.Body>
                    <ExpungementLimit />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Setup;