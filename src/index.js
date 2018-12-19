import FormContainer from './js/component/container/FormContainer'
import PyramidContainer from './js/component/container/PyramidContainer'
import PerforamceExamplContainer from './js/component/container/PerformanceExampleContainer'
import FiberContainer from './js/component/container/FiberContainer'
import React from 'react'
import ReactDOM from 'react-dom'


const wrapper = document.getElementById("create-article-form")
wrapper ? ReactDOM.render(<FiberContainer />, wrapper) : false