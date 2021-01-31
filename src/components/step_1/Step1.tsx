import Paper from '@material-ui/core/Paper'
import { setConstructionType, setActiveStep } from '../../store/rootReducer'
import { useDispatch } from 'react-redux'
import '../Paper.css'

export const Step1 = () => {
   const dispatch = useDispatch()

   return (
      <Paper elevation={3} className='wrap'>
         <h2>Что будем строить?</h2>
         <ol className='content'>
            <li
               onClick={() => {
                  dispatch(setActiveStep())
                  dispatch(setConstructionType(1))
               }}>
               Жилой дом
            </li>
            <li
               onClick={() => {
                  dispatch(setActiveStep())
                  dispatch(setConstructionType(2))
               }}>
               Гараж
            </li>
         </ol>
      </Paper>
   )
}
