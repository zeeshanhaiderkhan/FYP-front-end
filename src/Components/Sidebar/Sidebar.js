import "./Sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  ExitToApp,
  Report,
Assignment,
VerifiedUserOutlined
} from "@material-ui/icons";
import {FaPrescriptionBottle,FaStethoscope,FaBed,FaHospital,FaFileMedical,FaNotesMedical,FaPowerOff} from 'react-icons/fa'
import { Link } from "react-router-dom";
import {useContext} from 'react'
import { UserContext } from "../../App";
export default function Sidebar() {

  const User = useContext(UserContext);

  function SignOut(){
      localStorage.clear();
      User.setUser({role:''});
  }

  return (
    <div className="sidebar" >
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/doctors" className="link">
            <li className="sidebarListItem">
             <FaHospital className="sidebarIcon"/>
                Doctors
            </li>
            </Link>
            <Link to="/patients" className="link">
            <li className="sidebarListItem">
            <FaBed className="sidebarIcon" />
              Patients
            </li>
            </Link>
            <Link to="/admins" className="link">
            <li className="sidebarListItem">
            <FaBed className="sidebarIcon" />
              Admins
            </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Resources</h3>
          <ul className="sidebarList">
            <Link to="/appointments" className="link">
              <li className="sidebarListItem">
              <FaStethoscope className="sidebarIcon" />
                Appointments
              </li>
            </Link>
            <Link to="/dietplans" className="link">
              <li className="sidebarListItem">
              <FaNotesMedical className="sidebarIcon" />
                Diet Plans
              </li>
            </Link>
            <Link to="/prescriptions" className="link">
              <li className="sidebarListItem">
              <FaPrescriptionBottle className="sidebarIcon" />
                Prescriptions
              </li>
            </Link>
            
            
          </ul>
        </div>
     
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem" onClick={SignOut}>
              <ExitToApp className="sidebarIcon" />
              Sign Out
            </li>
            <li className="sidebarListItem">
              <VerifiedUserOutlined className="sidebarIcon" />
              {User.user.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/*<Link to="/mammograms" className="link">
              <li className="sidebarListItem">
              <FaPrescriptionBottle className="sidebarIcon" />
                Mammograms
              </li>
            </Link>*/