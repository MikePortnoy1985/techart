import { setActiveStep, resetActiveStep, getCalculation } from '../../store/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
import { Result } from '../result/Result'
import { Step2 } from '../step_2/Step2'
import { Step3 } from '../step_3/Step3'
import { Step4 } from '../step_4/Step4'
import { AppType } from '../../store/store'
import { StepForm } from './StepForm'

export const StepFormContainer = () => {
   const { steps, activeStep, constructionType, numberOfFloors, buildingMaterial, size, loading } = useSelector(
      (state: AppType) => state.root,
   )
   const dispatch = useDispatch()

   const stepArray = [<Step2 />, <Step3 />, <Step4 />, <Result />]

   const getStepContent = (stepIndex: number, switchType: number) => {
      if (switchType === 2) {
         const newStepArray = stepArray.slice(1)
         return newStepArray[stepIndex - 1]
      }
      return stepArray[stepIndex - 1]
   }

   const handleNext = () => {
      dispatch(setActiveStep())
      if (activeStep === steps.length - 2) {
         dispatch(
            getCalculation({
               type: constructionType,
               floors: numberOfFloors,
               material: buildingMaterial,
               sizeX: size.x,
               sizeY: size.y,
            }),
         )
      }
   }

   const handleReset = () => {
      dispatch(resetActiveStep())
   }

   return (
      <StepForm
         steps={steps}
         activeStep={activeStep}
         constructionType={constructionType}
         loading={loading}
         getStepContent={getStepContent}
         handleNext={handleNext}
         handleReset={handleReset}
      />
   )
}
