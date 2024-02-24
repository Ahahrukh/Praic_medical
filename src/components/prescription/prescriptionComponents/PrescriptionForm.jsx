import { Button, DatePicker, Form, Input, Select } from 'antd'
import React from 'react'
import '../prescriptionStyles/PrescriptionForm.scss'
import { MailOutlined } from '@ant-design/icons'
const PrescriptionForm = () => {
  return (
    <div>
        <div className='frommainsection'>
          <Form>
            <h4>Patient Info</h4>
            <div className="fomrlines">
                <Input disabled />
                <Input placeholder='Full name' />
                <Input placeholder='Email' />
                <Input placeholder='Mobile' />
                <Select placeholder='Select Marital Status' />
                <Select placeholder='Select Diet' />
            </div>
            <div className="fomrlines">
              <Select placeholder='Select Gender' />
              <Select placeholder='Select Occupation' />
              <DatePicker className='date' placeholder='MM/DD/YY' />
              <Input placeholder='Adderess' />
              <Select placeholder='Select Education' />
              <Select placeholder='Select City' />
              <Button>Save Patient</Button>
            </div>
            <h4 className='visitInfo'>Visit Info</h4>
            <div className="fomrlines">
              <Select placeholder='Select Gender' />
              <Select placeholder='Select Occupation' />
              <Select placeholder='Select Occupation' />
              <Input placeholder='Adderess' />
              <Select placeholder='Select Occupation' />
              <MailOutlined />
              <Button>Reports</Button>
            </div>
            <div className="fomrlines">
              <Input placeholder="Height(FT'IN)" />
              <Input placeholder='Weight' />
              <Input placeholder='Fever' />
              <Input placeholder='BP S' />
              <Input placeholder='BP D' />
              <Input placeholder='BMI' />
              <Select placeholder='Select Occupation' />
            </div>
          </Form>
        </div>
    </div>
  )
}

export default PrescriptionForm