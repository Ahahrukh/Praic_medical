import { Form, Select , Input } from 'antd'
import React from 'react'
import '../prescriptionStyles/PrescriptionFormMiddle.scss'
const PrescriptionFormMiddle = () => {
  return (
    <div>
        <Form className='prescriptionFormMiddle'>
            <Select placeholder="Select Treatment" style={{width:"400px"}} />
            <div className='textArea' style={{marginTop:"40px"}}>
             <label htmlFor="" >Diagnosis</label>
              <Input.TextArea placeholder='Diagnosis' style={{width:"80%"}} />
            </div>
            <div className='textArea'>
             <label htmlFor="">Notes</label>
              <Input.TextArea placeholder='Notes' style={{width:"80%"}} />
            </div>
            <div className='textArea'>
             <label htmlFor="">Self Notes</label>
              <Input.TextArea placeholder='Self Notes' style={{width:"80%"}} />
            </div>
            <div className='textArea'>
             <label htmlFor="">Spl Inst.</label>
              <div style={{width:"80%"}}>
                <label htmlFor="" style={{color:"red" , fontWeight:"400"}} >Cold Alc/Tob Cnt Prec R/BP R/Sugar OA S/S Hypo PF DC F/P Wt no steroid #</label>
                <Input.TextArea style={{width:"100%"}} />
              </div>
            </div>
        </Form>
    </div>
  )
}

export default PrescriptionFormMiddle