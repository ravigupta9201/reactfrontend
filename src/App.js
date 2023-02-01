import './App.css';
import React, { useState , useEffect} from 'react';
import axios from 'axios'

function App() {
  const [students, setStudents] = useState([])
  
  useEffect(()=>{
    async function getAllStudent(){
      try {
        const students = await axios.get('http://localhost:8000/apis/student')
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    };
    getAllStudent()
  },[])

  return (
    <div className="App">
      <h1>Connect React & Express js</h1>
      {
        students.map((student, i)=>{
          return (
            <h2 key={i}>{student.name} {student.email}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
