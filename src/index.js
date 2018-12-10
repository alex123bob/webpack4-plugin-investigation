import FormContainer from './js/component/container/FormContainer'
import React from 'react'
import ReactDOM from 'react-dom'


const wrapper = document.getElementById("create-article-form")
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false