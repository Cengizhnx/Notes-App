import { createSlice } from "@reduxjs/toolkit";

let noteId = 3;

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: [
            {
                id: "1",
                title: "Learn React",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                color: "bg-indigo-600",
                completed: true
            },
            {
                id: "2",
                title: "Examples Redux",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                color: "bg-indigo-600",
                completed: false
            },
            {
                id: "3",
                title: "Read A Book",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                color: "bg-indigo-600",
                completed: false

            },

        ],
        colors: [
            "bg-gray-600",
            "bg-neutral-400",
            "bg-red-600",
            "bg-amber-500",
            "bg-lime-500",
            "bg-emerald-600",
            "bg-sky-500",
            "bg-indigo-600",
            "bg-fuchsia-600",
            "bg-yellow-300"
        ]

    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            prepare: ({ title, description, color }) => {
                return {
                    payload: {
                        id: noteId += 1,
                        title,
                        description,
                        color
                    }
                }
            }

        },
        toggle: (state, action) => {
            const  id  = action.payload
            console.log(id);

            const item = state.items.find((item) => item.id === id)
            item.completed = !item.completed;
        }
    }
})

export const getNotes = (state) => state.notes.items;
export const getColors = (state) => state.notes.colors;

export const { addNote, toggle } = notesSlice.actions;

export default notesSlice.reducer;