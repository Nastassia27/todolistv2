import React from 'react';
import './App.css';
import Todolist, {taskType} from "./Todolist";



function App() {

    const todolostNameItem_1: string='Hello';
    const todolostNameItem_2: string ='Goodbuy';
    const tasks_1: Array<taskType>=[
        {id:1, isDone: true, name: 'Butter'},
        {id:2, isDone: false, name: 'Milk'},
        {id:3, isDone: false, name: 'Eggs'},
        {id:4, isDone: true, name: 'Kitkat'}
    ];
    const tasks_2: Array<taskType>=[
        {id:5, isDone: true, name: 'nastya'},
        {id:6, isDone: false, name: 'katya'},
        {id:7, isDone: false, name: 'ivan'},
        {id:8, isDone: true, name: 'mama'}
    ];

    return (
        <div className="App">
            <div>
            <Todolist title={todolostNameItem_2} tasks={tasks_2}/>
                <Todolist title={todolostNameItem_1} tasks={tasks_1} />
            </div>
        </div>
    );
}

export default App;
