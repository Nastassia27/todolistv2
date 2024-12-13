import React, {FC} from "react";


type TodolistPropsType={
    title: string;
    tasks: Array<taskType>
}

export type taskType={
    id: number,
    isDone: boolean,
    name: string,
}

const Todolist: FC<TodolistPropsType> =({
   title, tasks
                                        }
                                        )=>{
    //const title=props.title;
    //const tasks=props.tasks;
    //const {title, tasks}=props; //деструктаризация объекта
    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].name}</span></li>
                    <li><input type="checkbox" checked={tasks[1].isDone}/> <span>{tasks[1].name}</span></li>
                    <li><input type="checkbox" checked={tasks[2].isDone}/> <span>{tasks[2].name}</span></li>
                    <li><input type="checkbox" checked={tasks[3].isDone}/> <span>{tasks[3].name}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}
export default Todolist;