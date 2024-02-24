import React from 'react'
import {
    Button,
    DatePicker,
    Form,
    Input,
    Select
  } from 'antd';
import './FormComponent.scss'
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
const FormComponent = () => {
  return (
    <div className='maindiv'>
        <Form
            {...formItemLayout}
            variant="filled"
            className='mainForm'
        >
          <div className="formline">
            <Input disabled style={{width:'230px', height:"30px"}}/> 
            <Input placeholder='Full Name' variant="filled" style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}}/>
          </div>
          <div className="formline">
            <Input placeholder='Email' style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}}/> 
            <Input placeholder='Full Name' variant="filled"  style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}}/>
          </div>
          <div className="formline">
          <Select defaultValue={'Marital status'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
          <Select defaultValue={'Select Diet'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
          <Select defaultValue={'Select Gender'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
          </div>
          <div className="formline">
            <span>
                <label htmlFor="DatePicker">DOB</label>
                <br />
                <DatePicker style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)" , padding:"0px 10px 11px 10px"}} />
            </span>
            <span>
                <label htmlFor="Select">Attending doctor</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            </span>
            <span>
                <label htmlFor="Select">Concultancy</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            </span>
          </div>
          <div className="formline">
            <span>
                <label htmlFor="DatePicker">Visit Date</label>
                <br />
                <DatePicker style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)", padding:"0px 10px 11px 10px"}} />
            </span>
            <span>
                <label htmlFor="Select">Slot</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
            <span>
                <label htmlFor="Select">Occupation</label>
                <br />
                <Select defaultValue={'Nothing Selected'} style={{width:'140px', height:"30px" , backgroundColor:"rgb(235,235,235)"}}  />
            </span>
          </div>
          <div className="formline">
            <Select defaultValue={'Nothing Selected'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            <Select defaultValue={'Nothing Selected'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
          </div>
          <div className="formline">
            <Input placeholder='Address' style={{width:'230px', height:"30px"}}/>
            <Select defaultValue={'Nothing Selected'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
            <Select defaultValue={'Nothing Selected'} style={{width:'230px', height:"30px" , backgroundColor:"rgb(235,235,235)"}} />
          </div>
          <div className='btnForm'>
            <Button type="primary" >Save Patient Info</Button>
            <Button type="primary">Take New Appointment</Button>
          </div>
        </Form>
    </div>
  )
}

export default FormComponent