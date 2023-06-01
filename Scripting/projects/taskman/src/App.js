import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
   const Reset = ()=>{
     setTasks([])   
   }
  return (
    <div>
      <div className='container'>
        <h1>Task Manager</h1>
        <div>
          <>
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
              />
            ) : (
              'No Tasks'
            )}
            <button className='btn' onClick={Reset} style={{background:"#A30000"}}>Clear all tasks</button>
          </>
        </div>
      </div>
    </div>
  )
}

export default App
