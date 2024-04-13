import React , {useState} from "react";
import { Card, Grid, Typography, Button } from "@mui/material";
import { Link, useNavigate, useLocation} from "react-router-dom";
import profile from "./images/profile.png";
import student from "./images/student.png";
import progress from "./images/progress.png";
import rec from "./images/recomm.png";
import logo from "./images/logo.png";
import quiz from "./images/ideas.png";

function SSideBar() {

    const [selectedButton, setSelectedButton] = useState('dashboardstudent');
    const navigate = useNavigate();
   
    const handleButtonClick = (buttonname, path) => {
       
        setSelectedButton(buttonname);
        navigate(path);
        
    }

    return (
        <div style={{ textAlign: 'left' }}>
            <img src={logo} style={{ width: '190px', marginLeft:'15%' , marginBottom: '10px', marginTop: '25px' }} />
            <hr />
            <nav>
                <ul style={{ listStyle: 'none', marginTop: '40px' }}>
                    <li>
                        <Button onClick={() => handleButtonClick('profile',"/studentDashboard")} style={{ backgroundColor: selectedButton === 'dashboardstudent' ? "#ffc700" : '#000', width: '80%',padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                 <img src={profile} style={{ width: '20px' }} />
                                <Typography style={{ fontSize: '112%', marginLeft: '15px',textTransform: 'none',color:'#fff'}}>Profile</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('recommendations',"/recommendations")} style={{ backgroundColor: selectedButton === 'recommendations' ? "#ffc700" : '#000', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                <img src={progress} style={{ width: '20px', marginTop: '3px' }} />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px',textTransform: 'none',color:'#fff' }}>Recommendations</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('performance',"/performance")} style={{ backgroundColor: selectedButton === 'performance' ? "#ffc700" : '#000', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                <img src={rec} style={{ width: '20px', marginTop: '3px' }} alt="Review Icon" />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px', textAlign: 'left',textTransform: 'none',color:'#fff' }}>Performance</Typography>
                        </Button>
                    </li>
                    <li>
                        <Button onClick={() => handleButtonClick('quiz',"/quiz")} style={{ backgroundColor: selectedButton === 'quiz' ? "#ffc700" : '#000', color: '#000', width: '80%', padding: '8px', textAlign: 'left', marginLeft: '1px',justifyContent:'flex-start',paddingLeft:'5%' }}>
                                <img src={quiz} style={{ width: '20px', marginTop: '3px' }} alt="Review Icon" />
                                <Typography style={{ fontSize: '110%', marginLeft: '15px', textAlign: 'left',textTransform: 'none',color:'#fff' }}>Quiz</Typography>
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SSideBar;
