import { createSlice, nanoid } from "@reduxjs/toolkit";


let checked;
export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        items: localStorage.getItem("notes")
            ? JSON.parse(localStorage.getItem("notes"))
            : [
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
                    completed: true
                },
                {
                    id: "3",
                    title: "Read A Book",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    color: "bg-indigo-600",
                    completed: true
                },

            ],
        colors: [
            [
                "bg-gray-600",
                checked = false,
            ],
            [
                "bg-neutral-400",
                checked = false,
            ],
            [
                "bg-red-600",
                checked = false,
            ],
            [
                "bg-amber-500",
                checked = false,
            ],
            [
                "bg-lime-500",
                checked = false,
            ],
            [
                "bg-emerald-600",
                checked = false,
            ],
            [
                "bg-sky-500",
                checked = false,
            ],
            [
                "bg-indigo-600",
                checked = false,
            ],
            [
                "bg-fuchsia-600",
                checked = false,
            ],
            [
                "bg-yellow-300",
                checked = false,
            ],
        ],
        keywordFilter: "",
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.items.push(action.payload)
                localStorage.setItem("notes", JSON.stringify(state.items));
            },
            prepare: ({ title, description, color, completed }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description,
                        color,
                        completed: completed
                    }
                }
            }

        },
        toggle: (state, action) => {
            const id = action.payload

            const local = JSON.parse(localStorage.getItem("notes"))
            
            const item = local.find((item) => item.id === id)

            const response = item.completed = !item.completed;
            localStorage.setItem("notes", JSON.stringify([...local], item.completed = response))

            window.location.reload(false);

        },
        checkedChange: (state, action) => {
            const clr = action.payload

            const items = state.colors.find((item) => item[0] === clr)
            items[1] = !items[1]
        },
        searchNote: (state, action) => {
            state.keywordFilter = action.payload
        }

    }
})

export const getNotes = (state) => state.notes.items;
export const getColors = (state) => state.notes.colors;
export const getFilter = (state) => state.notes.keywordFilter;

export const { addNote, toggle, checkedChange, searchNote } = notesSlice.actions;

export default notesSlice.reducer;