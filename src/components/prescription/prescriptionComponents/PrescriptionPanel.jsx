import React from 'react'
import Navbar from '../../layoutes/header/Navbar'
import { Button , Form} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Search from 'antd/es/input/Search'
import PrescriptionForm from './PrescriptionForm'
import '../prescriptionStyles/PrescriptionPanel.scss'
import PrescriptionFormMiddle from './PrescriptionFormMiddle'
import PrescriptionFormTable from './PrescriptionFormTable'
let elements =[
    {
        element1: <Button type="primary" style={{alignSelf:"center" , marginRight:"400px" }} className="btn">Future Appointment</Button>
                ,
        element2: <Search placeholder='Search Patient' allowClear style={{marginLeft:"-200px" , marginRight:"-100px"}}/>,
        element3:<UserOutlined style={{ color: 'black', fontSize: '30px' , marginRight:"30px", marginLeft:"200px" }}/>,       
        buttons:null,
    }
]
const PrescriptionPanel = () => {

  return (
    <>
    <Navbar data={elements}/>
     <div className='mainprescription'>
        <div className='prescription1'>
            <PrescriptionForm/>
            <PrescriptionFormMiddle/>
        </div>
        <div className='prescription2'>
            <label htmlFor="" className='doctorName'>Dr Parshant Aggarwal (0)</label>
            <PrescriptionFormTable/>
            <label htmlFor="" className='doctorName'>Dr Bharti Aggarwal (0)</label>
            <PrescriptionFormTable/>
        </div>
     </div>
    </>
  )
}

export default PrescriptionPanel