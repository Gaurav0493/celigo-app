import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Company from '../Company/Company';
import Job from '../Job/Job'
import { Route, Redirect } from 'react-router-dom';
import { NavLink} from 'react-router-dom';
import Edit from '../Edit/Edit'

import './About.css'


const components = {
    company: Company,
    job: Job,
    edit: Edit
};

const About = props => {

    let authenticated = localStorage.getItem('checked') === "true" ? true : false;
    const [checked, setChecked] = React.useState(authenticated);

    return (
        <div >
            <h1>
                About Page
        </h1>
            <div className="about-container" >
                <List className="about-list" style={{ color: "#000000" }}>
                    {['Company', 'Job', 'Edit'].map((text, index) => (
                        <NavLink to={`/about/${text.toLowerCase()}`}>
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
                <div className="about-content">
                    {
                        (props.location.pathname.split('/')[2] !== "edit") ? (<Route path={`${props.match.path}`} component={components[props.location.pathname.split('/')[2]]} />) : ((props.location.pathname.split('/')[2] === "edit" && checked) ? (<Route path={`${props.match.path}`} component={components[props.location.pathname.split('/')[2]]} />): (<Redirect from="/about/edit" to="/signin" exact />))
                    }

                </div>
            </div>
        </div>
    )
}

export default About;
