import AssignedPatients from "../Doctor/AssignedPatients"
import {useContext} from 'react'
import DoctorDashboardNav from './DoctorDashboardNav';

import { UserContext } from "../../App"
export default function DoctorDashboard(){
    const User = useContext(UserContext);
    const did = User.user._id;
    return(<>
        
        <AssignedPatients did={did} />
    </>)
}