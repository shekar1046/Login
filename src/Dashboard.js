import React from 'react'
import {connect} from 'react-redux'
const Dashboard =(Dash)=>{
   const dash=Dash.Dash
const dshList=dash.map(resp=>{
    console.log(resp)
    return(
        <div className="card" key={resp.id}>
            <div className="card-body">
                <p className="card-title"><b>Name: {resp.name}</b></p>
                <p className="card-text">Email: {resp.email}</p>
                <p className="card-text">Age: {resp.age}</p>
                <p className="card-text">Gender: {resp.gender}</p>
                <p className="card-text">PhoneNo: {resp.phoneNo}</p>
            </div>
        </div>
    )
})
    return(
        <div className="dsh">
        {dshList}
        </div>
    )

}
const mapStateToProps=(state)=>{

    return {
      Dash:state.dashboard
  }
}
export default connect(mapStateToProps)(Dashboard)