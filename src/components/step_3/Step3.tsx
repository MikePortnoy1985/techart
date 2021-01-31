import React from 'react'
import Paper from '@material-ui/core/Paper'
import '../Paper.css'
import { useSelector, useDispatch } from 'react-redux'
import { AppType } from '../../store/store'
import { setBuildingMaterial, setActiveStep } from '../../store/rootReducer'

export const Step3 = () => {
   const { constructionType } = useSelector((state: AppType) => state.root)
   const dispatch = useDispatch()

   const setMaterialHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      dispatch(setBuildingMaterial(Number(e.currentTarget.dataset.id)))
      dispatch(setActiveStep())
   }

   return (
      <>
         {constructionType === 1 ? (
            <Paper elevation={3} className='wrap'>
               <h2>Материал стен:</h2>
               <ol className='content'>
                  <li data-id={1} onClick={setMaterialHandler}>
                     Кирпич
                  </li>
                  <li data-id={2} onClick={setMaterialHandler}>
                     Шлакоблок
                  </li>
                  <li data-id={3} onClick={setMaterialHandler}>
                     Деревянный брус
                  </li>
               </ol>
            </Paper>
         ) : (
            <Paper elevation={3} className='wrap'>
               <h2>Материал стен:</h2>
               <ol className='content'>
                  <li data-id={2} onClick={setMaterialHandler}>
                     Шлакоблок
                  </li>
                  <li data-id={4} onClick={setMaterialHandler}>
                     Металл
                  </li>
                  <li data-id={5} onClick={setMaterialHandler}>
                     Сендвич-панели
                  </li>
               </ol>
            </Paper>
         )}
      </>
   )
}
