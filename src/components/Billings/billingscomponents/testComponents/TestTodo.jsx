import React from 'react'
import { Select , Input , Button  } from 'antd'
import { DeleteFilled } from '@ant-design/icons';
const TestTodo = () => {
  return (
    <div className='todo'>
        <Select placeholder="ACE LEVELS" />
        <Select className='labselect' placeholder="SURYA HEALTHCARE" />
        <Input className='notdisabled' defaultValue="0"/>
        <Input defaultValue="0" disabled/>
        <Input defaultValue="0" disabled/>
        <Button><DeleteFilled /></Button>
    </div>
  )
}

export default TestTodo