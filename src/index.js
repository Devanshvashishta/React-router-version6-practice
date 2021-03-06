import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes , Route, Navigate, Link,Outlet, useParams, NavLink,useNavigate,useLocation } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/myapps" element={<Navigate replace to="/learn"/>}/>
 <Route path="/learn" element={<Learn/>}>
   <Route path="courses" element={<Courses />} >
     <Route path=":courseid" element={<CourseId />}/>
   </Route>
   <Route path="bundles" element={<Bundles />} />
</Route>
<Route path="/dashboard" element={<Dashboard />}/> 
 </Routes>
 </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function Home (){

return (
  <div>
    <h1>Home Route</h1>
  </div>
)
}

function Learn (){

  return (
    <div>
      <h1>Learn</h1>
      <h4>All courses are listed here</h4>
      <Link  to="/learn/courses">Courses</Link> |
      <Link  to="/learn/bundles">Bundles</Link>  
      <Outlet/>

    </div>
  ) 
  }

  function Courses (){
    const courseList = ["React","Angular","Vue","Nodejs"]
    const randomCourseName = courseList[Math.floor(Math.random()*courseList.length)]

    return (
      <div>
        <h1>Course List</h1>
        <h4>Course card</h4>

        <p>More Test</p>
        <NavLink style={({isActive})=>{return{
          backgroundColor : isActive ? "pink":"yellow" 
        }
      }}
           to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>| | 
        <NavLink  to={`/learn/courses/tests`}>tests</NavLink>

        <Outlet /> 

      </div>
    )
    }

    
  function Bundles (){

    return (
      <div>
          <h1>Bundle list</h1>
          <h4>Bundle card</h4>
        
      </div>
    )
    }

    function CourseId (){
      const navigate = useNavigate()
      const {courseid} = useParams()

      return (
        <div>
          <h1>URL Params is : {courseid}</h1>
          <button onClick={()=>{navigate("/dashboard",{state: courseid})}}>Price</button>
          <Link to="/dashboard" state={"DJANGO"}>Test Link</Link>
        </div>
      )
      }
      function Dashboard(){
        const location = useLocation()

        return (
          <div>
              <h1>Info that I got here {location.state}</h1>
             
            
          </div>
        )
        }

reportWebVitals();
 