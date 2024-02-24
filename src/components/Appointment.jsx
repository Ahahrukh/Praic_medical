import React from 'react'
import Navbar from './layoutes/header/Navbar'
import '../styles/Appointment.scss'
import { DatePicker, Flex , Input, Space , Select , Button } from 'antd'
import FormComponent from './sectionComponents/FormComponent'
import Slots from './sectionComponents/slots/Slots'
import { Tables } from './sectionComponents/table/Tables'
import Middle from './sectionComponents/middleSection/Middle'

const Appointment = () => {
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
              </div>,
     element2: <div className="date">
                <p>24Feb-25Feb</p>
                <p>Confrence</p>
               </div>,
      buttons:<Button type="primary" className="btn">Future Appointment</Button>,
    }
  ]
  return (
    <>
      <Navbar data={elements}/>
      <div className="mainsection" >
        <Flex gap="middle" vertical>
          <Flex style={{gap:"20px"}}>
            <div className="section" style={{marginTop:"25px" , marginLeft:"10px" }}>
            <Space direction='vertical'>
              <Input.Search
                  placeholder="input search text"
                  allowClear
                  style={{
                    width: '480px',
                  }}
                />
            </Space>
            <FormComponent/>
            <Slots/>
            </div>
            <div className="sectionMid" style={{border:"1px solid rgb(193, 192, 192)" , marginTop:"30px", marginRight:"8px" }}>
            <div className='headerDate'><p className='next'>&#171;</p><h2> 20/03/2024 </h2><p className='next'>&#187;</p></div>
              <Middle/>    
            </div>
            <div className="sectionlast" style={{border:"1px solid rgb(193, 192, 192)" , marginTop:"30px" , marginRight:"20px"}}>
              <div className='patientDetails'>
                <DatePicker style={{marginLeft:"140px"}}/>
                <Flex style={{justifyContent:"space-between", marginTop:"20px"}}>
                  <div className='doctorsName'>
                    <p>Dr Bharti Aggarwal</p>
                    <p>(13)</p>
                  </div>
                 <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"35px"}} />
                </Flex>
                <Tables/>
              </div>
              <div className='patientDetails2'>
                <DatePicker style={{marginLeft:"140px"}}/>
                <Flex style={{justifyContent:"space-between", marginTop:"20px"}}>
                  <div className='doctorsName'>
                    <p>Dr Parshant Aggarwal</p>
                    <p>(13)</p>
                  </div>
                 <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"35px"}} />
                </Flex>
                <Tables/>
              </div>
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  )
}

export default Appointment