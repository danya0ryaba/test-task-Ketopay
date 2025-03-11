import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ArticleStateType, ArticleType, ResponseBodyType } from '../../types/types'

// не стал выносить в окружение
const API_KEY = 'vEJwp3nmtqMIO6FDqQwyQdjbTzJcbdAh'
const YEAR = 2024
const MOUNTH = 3

export const getArticles = createAsyncThunk<ResponseBodyType, undefined, { rejectValue: string }>(
    "movies/getArticles",
    async (_, { rejectWithValue }) => {
        const response = await fetch(`https://api.nytimes.com/svc/archive/v1/${YEAR}/${MOUNTH}.json?api-key=${API_KEY}`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': '*',
            }
        })
        if (!response.ok) {
            return rejectWithValue("Server Error!")
        }
        const data = await response.json()
        return data
    }
)

const initialState: ArticleStateType = {
    list: [],
    isLoading: false,
    error: null
}

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        getArticle: (state, action: PayloadAction<ArticleType[]>) => {
            state.list = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.fulfilled, (state, { payload }) => {
                state.list = payload.response.docs
                state.isLoading = false
            })
            .addCase(getArticles.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getArticles.rejected, (state, { payload }) => {
                state.error = payload ?? "Unknown error"
                state.isLoading = false
            })
    }
})

export const { getArticle } = articlesSlice.actions
export default articlesSlice.reducer