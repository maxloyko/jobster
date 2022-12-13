import customFetch from "../../utils/axios";

export const getAllJobsThunk =  async (_, thunkAPI) => {
    try {
        const {page, search, searchStatus, searchType, sort} = thunkAPI.getState().allJobs
        let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
        if (search) {
            url += `&search=${search}`
        }
        const resp = await customFetch.get(url);

        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const showStatsThunk = async (_, thunkAPI) => {
    try {
        const resp = await customFetch.get('/jobs/stats')
        return resp.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}