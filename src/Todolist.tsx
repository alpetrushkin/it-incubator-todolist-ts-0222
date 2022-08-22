import React, {useState} from 'react';
import {FilterValueType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (elID: number) => void
}

export function Todolist(props: PropsType) {
    const [filter, setFilter] = useState('all')

    let filteredTask = props.tasks
    if (filter === 'active') {
        filteredTask = props.tasks.filter(filter => filter.isDone)
    }
    if (filter === 'completed') {
        filteredTask = props.tasks.filter(filter => !filter.isDone)
    }

    const filterTask = (filterTask: FilterValueType) => {
        setFilter(filterTask)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                filteredTask.map(el => {
                    return (
                        <li key={el.id}>
                            <button onClick={() => props.removeTask(el.id)}>x</button>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })
            }
        </ul>
        <div>
            <button onClick={() => filterTask('all')}>All</button>
            <button onClick={() => filterTask('active')}>Active</button>
            <button onClick={() => filterTask('completed')}>Completed</button>
        </div>
    </div>
}
