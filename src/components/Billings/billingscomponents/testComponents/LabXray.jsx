import React, { useState } from 'react'
import {Button, Form , Input} from 'antd'
import './LabXray.scss';
import { PlusOutlined} from '@ant-design/icons';
import TestTodo from './TestTodo';
const LabXray = () => {
  const [elemArray , setElement] = useState([<TestTodo/>])
  const handleCreateTest = () => {
       setElement([...elemArray , <TestTodo/>])
  }
  return (
    <div>
        <Form
         className='labsform'
        >
            <div className='head'>
                <div className='headChild'><p>Test name</p></div>
                <div className='headChild'><p>Lab</p></div>
                <div className='headChild'><p>Charges/Discount</p></div>
                {/* <div className='headChild'></div> */}
                <PlusOutlined className='plusbtn' onClick={handleCreateTest} />
            </div>
            <div className='testplace'>
                {elemArray.map((elem)=>(
                  elem
                ))}
                <div className='totalBill'><div>Discount:Nan/-</div> <div>Net:<Input className='netamount' defaultValue="0"/></div></div>
                <Button className='save'>Save & Print</Button>
            </div>
        </Form>
    </div>
  )
}

export default LabXray