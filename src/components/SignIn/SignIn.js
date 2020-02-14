import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const SignIn = props => {
  let authenticated =  localStorage.getItem('checked') === "true" ? true : false  ;
  const [checked, setChecked] = React.useState(authenticated);
  const handleChange = event => {
    localStorage.setItem('checked', event.target.checked);
    setChecked(event.target.checked);
  };
  return (
    <div >
    <h1>SignIn to authenticate </h1>
    <Checkbox
        checked={checked}
        onChange={handleChange}
        value="secondary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  )

}

export default SignIn;