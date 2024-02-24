import React from 'react'
import { Button } from 'antd'
const PrescriptionFormTable = () => {
  return (
    <div className="scrollable-div">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Patient Id</th>
                    <th>Visit Time</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr className='rows'>
                    <td>
                        <p className='name'>Amarjit Kumar</p>
                        <p className='small'>987654331</p>
                    </td>
                    <td className='patientId'>2053245</td>
                    <td>
                        <p className='appointmentdate'>09/01/2024</p>
                        <p className='small'>09:45 AM 2a</p>
                    </td>
                    <td><Button style={{width:"70px" , fontSize:"10px" , height:"30px"}}>complete</Button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PrescriptionFormTable