import { useSelector } from 'react-redux'
import { AppType } from '../../store/store'

export const Error = () => {
   const { errorMessage } = useSelector((state: AppType) => state.root)

   return (
      <>
         <h2>Ошибка</h2>
         <div className='content'>{errorMessage}</div>
      </>
   )
}
