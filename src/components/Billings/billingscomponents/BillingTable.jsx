import React from 'react'
import { Button } from 'antd'
import './billingStyles/BillingTable.scss'
const BillingTable = () => {
  return (
    <div className="scrollable-div1">
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Visit</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr className='rows'>
                    <td>
                        <p className='name'>Amarjit Kumar</p>
                        <p className='small'>234567</p>
                    </td>
                    <td>
                        <p className='appointmentdate'>09:40 AM 2</p>
                        <p className='small smallold'>old</p>
                    </td>
                    <td><button className='status'>pending</button></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default BillingTable