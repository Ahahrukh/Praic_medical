import React from 'react'
import './billingStyles/MyInvoice.scss'
const MyInvoice = () => {
  return (
    <>
    <p className='invoice'>My Invoices (0)</p>
    <div className="scrollable-div2">
        
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Paid</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr className='rows'>
                    <td>
                        <p className='name'>Amarjit Kumar</p>
                        <p className='small'>234567</p>
                    </td>
                    <td>
                        <p className='appointmentdate'>09:40 AM 2</p>
                        <p className='small smallold'>old</p>
                    </td>
                    <td><button>pending</button></td>
                </tr> */}
            </tbody>
        </table>
    </div>
    </>
  )
}

export default MyInvoice