import React from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select,
  } from 'antd';
import './billingStyles/BillingForm.scss'
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
};
const BillingForm = () => {
  return (
    <div style={{width:"350px"}}>
        <Form
            {...formItemLayout}
            variant="filled"
            className='mainForm1'
        >
          <div className="formline1">
            <Input disabled style={{width:'160px' , height:"32px"}}/> 
            <Input placeholder='Full Name' variant="filled" style={{width:'160px', height:"32px" , backgroundColor:"rgb(235,235,235)"}}/>
          </div>
          <div className="formline1">
            <Input placeholder='Mobile' style={{width:'105px', height:"32px"  , backgroundColor:"rgb(235,235,235)"}}/> 
            <Select defaultValue={'Marital Status'} style={{width:'105px', height:"30px",borderRadius:"5px" , color:"rgb(222, 226, 230)" , backgroundColor:"rgb(235,235,235)"}} />
            <Select defaultValue={'Select Gender'} style={{width:'100px', height:"30px",borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}} />
          </div>
          <div className="formline1">
            <span>
                <label htmlFor="DatePicker">DOB</label>
                <br />
                <DatePicker style={{width:'160px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            </span>
            <span>
                <label htmlFor="Select">Occupation</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'160px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}} />
            </span>
          </div>
          <div className="formline1">
            <span>
                <Select defaultValue={'Nothing Selected'} style={{width:'160px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
            <span>
                <Select defaultValue={'Nothing Selected'} style={{width:'160px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
          </div>
          <div className="formline1">
          <span>
                <label htmlFor="DatePicker">Visit Date</label>
                <br />
                <DatePicker style={{width:'105px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            </span>
            <span>
                <label htmlFor="Select">Slot</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'105px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
            <span>
                <label htmlFor="Select">Visit type</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'100px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
          </div>
          <div className="formline1">
            <Select defaultValue={'Nothing Selected'} style={{width:'160px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}} />
            <Select defaultValue={'Nothing Selected'} style={{width:'160px', height:"30px" ,borderRadius:"5px" , backgroundColor:"rgb(235,235,235)"}} />
          </div>
          <div className='btnForm1'>
            <Button type="primary" >Save Patient Info</Button>
            <Button type="primary">Generate Invoice</Button>
          </div>
        </Form>
    </div>
  )
}

export default BillingForm