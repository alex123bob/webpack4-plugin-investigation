import FormContainer from './js/component/container/FormContainer'
import PyramidContainer from './js/component/container/PyramidContainer'
import PerforamceExamplContainer from './js/component/container/PerformanceExampleContainer'
import FiberContainer from './js/component/container/FiberContainer'
import {ProjectList} from './js/component/container/ProjectList'
import {BusinessList} from './js/component/container/BusinessList'
import {WithSubscription} from './js/component/container/WithSubscription'
import FACCList from './js/component/container/FACCList'
import {Project} from './js/component/presentational/Project'
import FACCOnPropList from './js/component/container/FACCOnPropList'
import {FACCOnPropChildRenderer} from './js/component/container/FACCOnPropChildRenderer'
import FACCCmpInjList from './js/component/container/FACCCmpInjList'
import React from 'react'
import ReactDOM from 'react-dom'
import { ProjectListPropsBased } from './js/component/container/ProjectListPropsBased';


// const wrapper = document.getElementById("create-article-form")
// wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false

const container = document.querySelector('.container')
// const Cmp = WithSubscription(
//     ProjectListPropsBased, 
//     fetch('https://dqjczs.sinaapp.com/libs/projectcategory.php?action=get&start=0&limit=300&debug=true')
//         .then(res => res.json())
//         .then(res => res.items)
// )
// container ? ReactDOM.render(<Cmp />, container) : false

/** Original(commonly used Function As Child Component) */
// container ? ReactDOM.render(<FACCList>
//     {
//         project => <Project key={project.projectId} projectName={project.projectName} captain={project.captain} projectTime={project.projectTime}></Project>
//     }
// </FACCList>, container) : false

/** Render Props for FACC, readable */
// container ? ReactDOM.render(
//     <FACCOnPropList render={FACCOnPropChildRenderer}></FACCOnPropList>, container
// ) : false

/** FACC: Component Injection */
container && ReactDOM.render(<FACCCmpInjList render={Project} />, container)