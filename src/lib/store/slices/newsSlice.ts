import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Article } from '@/types/article'

interface NewsState {
  articles: Article[]
  loading: boolean
  error: string | null
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setArticles, setLoading, setError } = newsSlice.actions
export default newsSlice.reducer