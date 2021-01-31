import React from 'react'
import '../Paper.css'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import { Step1 } from '../step_1/Step1'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

type PropsType = {
   steps: string[]
   activeStep: number
   constructionType: number
   loading: boolean
   getStepContent: (stepIndex: number, switchType: number) => JSX.Element
   handleNext: () => void
   handleReset: () => void
}

export const StepForm: React.FC<PropsType> = ({
   steps,
   activeStep,
   constructionType,
   loading,
   getStepContent,
   handleNext,
   handleReset,
}) => {
   return (
      <>
         {loading && <LinearProgress />}
         <h1>Калькулятор цены конструкций</h1>
         <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
               <Step key={label}>
                  <StepLabel>{label}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <div>
            <h3>{steps[activeStep]}</h3>
            <div>
               {activeStep === 0 ? <Step1 /> : getStepContent(activeStep, constructionType)}
               <div className='buttons'>
                  {activeStep < steps.length - 1 && (
                     <Button onClick={handleReset} disabled={activeStep === 0}>
                        Отмена
                     </Button>
                  )}
                  {activeStep !== 0 && activeStep === steps.length - 1 ? (
                     <Button variant='contained' color='primary' onClick={handleReset}>
                        Новый расчет
                     </Button>
                  ) : (
                     <Button variant='contained' color='primary' onClick={handleNext}>
                        {activeStep === steps.length - 2 ? 'Рассчитать' : 'Далее'}
                     </Button>
                  )}
               </div>
            </div>
         </div>
      </>
   )
}
