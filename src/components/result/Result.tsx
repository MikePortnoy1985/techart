import Paper from '@material-ui/core/Paper'
import '../Paper.css'
import { useSelector } from 'react-redux'
import { AppType } from '../../store/store'
import { Error } from '../error/Error'

export const Result = () => {
   const { error, result } = useSelector((state: AppType) => state.root)

   return (
      <Paper elevation={3} className='wrap'>
         {error ? (
            <Error />
         ) : (
            <>
               <h2>Успешно</h2>
               <div className='content'>{result}</div>
            </>
         )}
      </Paper>
   )
}
