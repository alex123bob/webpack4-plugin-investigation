import React, {Component} from 'react'

export const Business = ({name, salesman, createTime}) => (
    <div style={{borderRadius: 5, border: '1px solid #cccccc', padding: '5px', margin: '10px auto'}} className="businessCt">
        <div>Business Name: {name}</div>
        <div>Business Manager: {salesman}</div>
        <div>Business Create Time: {createTime}</div>
    </div>
)