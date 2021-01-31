import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import '../Paper.css'
import { useDispatch } from 'react-redux'
import { setSize } from '../../store/rootReducer'

export const Step4 = () => {
   const dispatch = useDispatch()

   const [sizeX, setSizeX] = React.useState<number>()
   const [sizeY, setSizeY] = React.useState<number>()

   const onXSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSizeX(Number(e.currentTarget.value))
   }

   const onYSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSizeY(Number(e.currentTarget.value))
   }

   React.useEffect(() => {
      if (sizeX && sizeY) {
         dispatch(setSize({ x: sizeX, y: sizeY }))
      }
   }, [sizeX, sizeY, dispatch])

   return (
      <Paper elevation={3} className='wrap'>
         <h2>Длина стен(в метрах)</h2>
         <div>
            <TextField variant='filled' value={sizeX} onChange={onXSizeHandler} />
            X
            <TextField variant='filled' value={sizeY} onChange={onYSizeHandler} />
         </div>
      </Paper>
   )
}
