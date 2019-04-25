import React from 'react';
import { connect } from 'react-redux';

//in this component, we're using redux to display info instead of hold things locally
function Account (props){
       
    return(
        <div>
             {/* // return <h1>Account</h1> */}
            <h1>Account</h1>
            <p>{props.auth.balance}</p>
        </div>
    )
   


}
const mapStateToProps = reduxState => reduxState; //required func that connect is expecting us to pass in 
export default connect(mapStateToProps)(Account);