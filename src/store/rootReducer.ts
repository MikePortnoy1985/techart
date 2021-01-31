import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const getCalculation = createAsyncThunk(
   'getCalculation',
   async (params: { type: number; floors: number; material: number; sizeX: number; sizeY: number }, thunkAPI) => {
      try {
         const response = await fetch(
            `https://data.techart.ru/lab/json/?building=${params.type}${
               params.floors > 0 ? `&height=${params.floors}` : ''
            }&material=${params.material}&sizex=${params.sizeX}&sizey=${params.sizeY}`,
         )
         const finalResult = await response.json()
         if (finalResult.result === 'ok') {
            return finalResult.message
         } else {
            return thunkAPI.rejectWithValue(finalResult.message)
         }
      } catch (e) {
         return thunkAPI.rejectWithValue(e.message)
      }
   },
)

export const rootReducer = createSlice({
   name: 'rootReducer',
   initialState: {
      steps: ['Шаг 1'],
      activeStep: 0,
      constructionType: 0,
      numberOfFloors: 0,
      buildingMaterial: 0,
      size: {
         x: 0,
         y: 0,
      },
      error: false,
      errorMessage: '',
      loading: false,
      result: '',
   },
   reducers: {
      setConstructionType: (state, action: PayloadAction<number>) => {
         state.constructionType = action.payload
         if (action.payload === 2) {
            state.steps = ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Результат расчета']
         } else {
            state.steps = ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Результат расчета']
         }
      },
      setNumberOfFloors: (state, action: PayloadAction<number>) => {
         state.numberOfFloors = action.payload
      },
      setBuildingMaterial: (state, action: PayloadAction<number>) => {
         state.buildingMaterial = action.payload
      },
      setSize: (state, action: PayloadAction<{ x: number; y: number }>) => {
         state.size = { ...action.payload }
      },
      setActiveStep: state => {
         state.activeStep += 1
         if (state.steps.length === 1) {
            state.steps = ['Шаг 1', 'Шаг 2', 'Шаг 3', 'Шаг 4', 'Результат расчета']
         }
      },
      resetActiveStep: state => {
         state.steps = ['Шаг 1']
         state.activeStep = 0
         state.activeStep = 0
         state.constructionType = 0
         state.numberOfFloors = 0
         state.buildingMaterial = 0
         state.size.x = 0
         state.size.y = 0
         state.error = false
         state.errorMessage = ''
         state.result = ''
      },
   },
   extraReducers: builder => {
      builder.addCase(getCalculation.pending, state => {
         state.loading = true
      })
      builder.addCase(getCalculation.fulfilled, (state, action) => {
         state.result = action.payload
         state.loading = false
      })
      builder.addCase(getCalculation.rejected, (state, action) => {
         state.error = true
         state.errorMessage = action.payload as string
         state.loading = false
      })
   },
})

export const {
   setConstructionType,
   setNumberOfFloors,
   setBuildingMaterial,
   setSize,
   setActiveStep,
   resetActiveStep,
} = rootReducer.actions
