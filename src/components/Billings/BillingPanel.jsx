import React from 'react'
import Navbar from '../layoutes/header/Navbar'
import { Flex , Space ,Input , Button } from 'antd'
import './BillingPanel.scss'
import BillingForm from './billingscomponents/BillingForm'
import BillingTable from './billingscomponents/BillingTable'
import MyInvoice from './billingscomponents/MyInvoice'
import Tests from './billingscomponents/Tests'
import LabXray from './billingscomponents/testComponents/LabXray'
let variableArray=[
  {
    key: '1',
    label: 'Lab',
    children: <LabXray/>,
  },
  {
    key: '2',
    label: 'X-ray',
    children: <LabXray/>,
  }
  ,
  {
    key: '3',
    label: 'Daycare/Procedure',
    children: <LabXray/>,
  },
  {
    key: '4',
    label: 'Dietician',
    children: <LabXray/>,
  },
  {
    key: '5',
    label: 'Physiotherapist',
    children: <LabXray/>,
  },
  {
    key: '6',
    label: 'Psychologist',
    children: <LabXray/>,
  }
]
let elements =[
  {
    element1:<div className='elementdata'> 
                <div className="appointment">
                  <p>Appointment Total</p>
                  <h2>117</h2>
                </div>
                <div className="appointment">
                    <p>Appointment Confirmed</p>
                    <h2>49</h2>
                </div>
                <div className="appointment">
                  <p>Appointment Cancelled</p>
                  <h2>33</h2>
                </div>
                <div className="appointment">
                  <p>Collection</p>
                  <h2>3</h2>
                </div>
            </div>,
    element2: <div className="date">
                <p>24Feb-25Feb</p>
                <p>Confrence</p>
              </div>,
    buttons:null
  }
]
export const BillingPanel = () => {
  return (
    <>
      <Navbar data={elements}/>
      <div className="mainsection1" >
        <Flex gap="middle" vertical>
          <Flex style={{gap:"10px"}}>
            <div className="section1" style={{marginTop:"25px" , marginLeft:"10px" }}>
            <Space direction='vertical'>
              <Input.Search
                  placeholder="Search Patient ID , Name , Phone or Email"
                  allowClear
                  style={{
                    width: '360px',
                  }}
              />
            </Space>
            <BillingForm/>
            </div>
            <div className="section1 section1-tests" style={{border:"1px solid rgb(193, 192, 192)", width:"520px" , marginTop:"30px", marginRight:"8px" }}>
              {variableArray.map((elem)=>(
                <Tests data={elem}/>
              ))}
            </div>
            <div className="section1" style={{border:"1px solid rgb(193, 192, 192)", width:"290px" , height:"270px" , marginTop:"30px", marginRight:"8px" , padding:"20px"}}>
                <MyInvoice/> 
            </div>
            <div className="section1" style={{border:"1px solid rgb(193, 192, 192)" , width:"310px" , marginTop:"30px" , marginRight:"20px"}}>
              <div className='patientDetails1'>
                <p>Patient List</p>
                <Flex style={{justifyContent:"space-between", marginTop:"15px"}}>
                  <div className='doctorsName1'>
                    <p>Dr Bharti Aggarwal(13)</p>
                  </div>
                 
                </Flex>
                <BillingTable/>
              </div>
              <div className='patientDetails21'>
                <p>Patient List</p>
                <Flex style={{justifyContent:"space-between", marginTop:"15px"}}>
                  <div className='doctorsName1'>
                    <p>Dr Parshant Aggarwal(13)</p>
                  </div>
                </Flex>
                <BillingTable/>
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  )
}
