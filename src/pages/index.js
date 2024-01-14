import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Main } from 'next/document'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const tasksList = [
  {
    _id: 1,
    task: 'task 1',
    complete: true
  },
  {
    _id: 2,
    task: 'task 2',
    complete: false
  },
  {
    _id: 1,
    task: 'task 1',
    complete: true
  },
  {
    _id: 2,
    task: 'task 2',
    complete: false
  },
  {
    _id: 1,
    task: 'task 1',
    complete: true
  },
  {
    _id: 2,
    task: 'task 2',
    complete: false
  }
]

export default function Home(props) {

  const handleChange = ({target}) => {
    target.value === '' ?
    setTask('') :
    setTask((prev) => ({...prev, task: target.value}));
  }
  const addTask = (e) => {
    console.log(tasks);
    e.preventDefault();
    setTasks((prev) => [...prev, {...task, _id: prev.length+1, complete: false}]);
  }
  const [tasks, setTasks] = useState(tasksList);
  const [task, setTask] = useState({task: ''});
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>TO DO WITH NEXT</h1>
      <div className={styles.container}>
        <form onSubmit={addTask} className={styles.form_container}>
          <input
            className={styles.input}
            type='text'
            placeholder='Task to be done'
            onChange={handleChange}
            value={task.task}
          />
          <button type='submit' className={styles.submit_btn}>
            {task._id ? 'Update': 'Add'}
          </button>
        </form>
        {tasks.map((task) => (
          <>
            <div className={styles.task_container} key={tasks._id}>
              <input
                type='checkbox'
                className= {styles.check_box}
                checked= {task.complete}
                onChange={'() => updateTask(task._id)' }
              />
              <p
              className={
                task.complete ? styles.task_text + " "+ styles.line_through : styles.task_text
              }>
                {task.task}
              </p>
              <button 
                onClick={'() => editTask(task._id)'}
                className={styles.edit_task}
              >&#9998;</button>
              <button onClick={'() => deleteTask(task._id)'}
                className={styles.delete_task}
              >&#10006;</button>
            </div>
          </>
        ))}
        {tasks.length === 0 && <h2 className={styles.no_tasks}>No tasks</h2>}
      </div>
    </main>
  )
}
