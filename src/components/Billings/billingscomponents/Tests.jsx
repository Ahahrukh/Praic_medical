import React , { useState } from 'react'
import { Collapse } from 'antd';
import './billingStyles/tests.scss';
import LabXray from './testComponents/LabXray';
const Tests = ({data}) => {
  const items = [
    {
      key: data.key,
      label: data.label,
      children: data.children,
    }
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className='mainCollaps'>
      <Collapse 
        className='collaps' 
        items={items} 
        defaultActiveKey={['1']} 
        onChange={onChange}
      />
    </div>
  )
}

export default Tests