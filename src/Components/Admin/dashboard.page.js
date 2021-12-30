import CardButton from "../cardButton.component";
import React from 'react';
import {Col, Row } from 'react-bootstrap';
import DashboardButtonsBar from "./dashboardButtonsBar.component";
import NotificationBar from "../notifications.component";
import { Notification } from "../notifications.component";
import { IoIosNotifications } from "react-icons/io";
import ChartsSection from "./chartsSection.component";

function DashBoardPage(){
    return(
        <>
        <Row>
            <Col>
                <DashboardButtonsBar/>
            </Col>
            <Col md={4}>
                <h3>Notifications</h3>
                    <Notification icon={<IoIosNotifications/>}  title="New Appointment" datetime="21-10-2021" message="Shazia Booked Appointment"/>
                    <Notification icon={<IoIosNotifications/>}  title="New User Added" datetime="21-10-2021" message="Admin Azhar Added Patient"/>
                    <Notification icon={<IoIosNotifications/>}  title="New File Uploaded" datetime="21-10-2021" message="Nazia Uploaded X-Ray Report 2021"/>
            </Col>
           
        </Row>

        <Row>
            <Col>
                <ChartsSection/>
            </Col>
            <Col>
                <ChartsSection/>
            </Col>
            <Col>
                <ChartsSection/>
            </Col>
        </Row>
        
        </>
    );
}


export default DashBoardPage;
