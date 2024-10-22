import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import Cookies from 'js-cookie';
import Axios from '../config';
// import { toast } from 'react-toastify';


export const fatchProjects = createAsyncThunk('/admin/fatchProjects', async () => {
    const response = await Axios.get('/projects')
    return response.data
})


export const addProject = createAsyncThunk('/admin/addProject', async (data) => {
    const response = await Axios.post('/projects', data)
    return response.data
})


export const updateProject = createAsyncThunk('admin/updateProject', async ({ id, data }) => {
    const response = await Axios.put(`/projects/${id}`, data);
    return response.data;
});


export const deleteProject = createAsyncThunk('admin/deleteProject', async (id) => {
    await Axios.delete(`/projects/${id}`);
    return id;
});



const projectSlice = createSlice({
    name: 'project',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fatchProjects.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(addProject.fulfilled, (state, action) => {
            state.push(action.payload)
        })
        builder.addCase(updateProject.fulfilled, (state, action) => {
            const index = state.findIndex(project => project.id === action.payload.id)
            if (index !== -1) {
                state[index] = action.payload
            }
        })
        builder.addCase(deleteProject.fulfilled, (state, action) => {
            return state.filter(project => project.id !== action.payload)
        })

    }
})


export default projectSlice.reducer