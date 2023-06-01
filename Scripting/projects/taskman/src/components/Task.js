import { FaTimes, FaClock } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
  return (
    <div className='box'
    >
      <h2>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h2>
      <h3><FaClock />{task.time}</h3>
      <p className='drop'>{task.dropdown}</p>
    </div>
  )
}

export default Task
