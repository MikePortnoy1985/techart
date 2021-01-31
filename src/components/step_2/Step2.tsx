import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import '../Paper.css'
import { useDispatch } from 'react-redux'
import { setNumberOfFloors } from '../../store/rootReducer'

export const Step2 = () => {
   const dispatch = useDispatch()

   const [value, setValue] = React.useState<number>()

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
   }

   React.useEffect(() => {
      if (value) {
         dispatch(setNumberOfFloors(value))
      }
   }, [value, dispatch])

   return (
      <Paper elevation={3} className='wrap'>
         <h2>Количество этажей(число)</h2>
         <div>
            <TextField variant='filled' value={value} onChange={onChangeHandler} />
         </div>
      </Paper>
   )
}
