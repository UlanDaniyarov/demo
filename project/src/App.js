import React from "react";
import Button from "./component/ui/Button";
import StudentList from "./component/ui/StuddentList";


function App() {
  const studentList = [
    {id: '1', name: 'Bermet'},
    {id: '2', name: 'Aidana'},
    {id: '3', name: 'Syrttan'},
    {id: '4', name: 'Meerim'},
  ]
  
 
  return (
    <div>
      <StudentList students={studentList}/>
      <Button>delete todo</Button>
      <Button>add todo</Button>
      <Button>check todo</Button>
      
    </div>
  );
}

export default App;
