import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";


// Global variables
var id = 0;

// slice method

const slice = createSlice({
    name: 'all tasks',
    initialState: { task: [] },
    reducers: {
        addTask: (state, action) => {
            state.task.push(action.payload)
        },
    }
})

export const { addTask } = slice.actions;
export default slice.reducer










// tasks.find(task => task.task.length === num)


// Creating Actions

/*
* in this method you have to create action and reducer differently but the upper slice method
* keep in one
*/

// export const task_add = createAction("task_added");
// export const task_completed = createAction("task_completed");

// // creating reducer
// export const reducer = createReducer(
//     [],
//     {
//         [task_add.type]: (state, action) => {
//             state.push({
//                 id: id++,
//                 task: action.payload,
//             })
//         }
//         ,
//         [task_completed.type]: (state, action) => {
//             console.log(action)
//             const index = state.findIndex( task =>
//                 true
//             )
//             state.splice(0,1);
//         }
//     }
// )