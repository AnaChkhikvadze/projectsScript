import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [time, setTime] = useState('')
  const [dropdown, setDropdown] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    if (!time) {
      alert('Please add time needed')
      return
    }

    onAdd({ text, time, dropdown })

    setText = ""
    setTime = ""

  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task:</label>
        <input
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Deadline of the task:</label>
        <input
          type='date'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='complexity'>
        <label>Choose Task Complexity:</label>
        <select value={dropdown} onChange={e => setDropdown(e.target.value)} className="complexdrop">
          <option>Complexity:</option>
          <option>easy</option>
          <option>medium</option>
          <option>hard</option>
        </select>
      </div>

      <input type='submit' value='Save Task' className='btn' />
    </form>

  )
}

export default AddTask
