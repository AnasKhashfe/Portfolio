import { useState } from 'react';
import { questions } from '../../data/questions.js';
import Result from './Result.jsx';
import StepForm from './StepForm.jsx';
import UserInfo from './UserInfo.jsx';
import { usePriceCalculator } from '../../hooks/usePriceCalculator.js';
import { savePrice } from '../../services/priceService.js';
import './PriceForm.css'




function Form() {
    const [currentStep, setCurrentStep] = useState(-1);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState({});
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const { calculateTotal } = usePriceCalculator(questions, answers);


    const question = questions[currentStep];

    const handleSubmit = async () => {
        const data = {
            name,
            email,
            type: answers[1]?.label || "",
            pages: answers[2]?.label || "",
            features: (answers[3] || []).map(item => item.label),
            delivery: answers[4]?.label || "",
            total: calculateTotal(),
        }

        try {
            await savePrice(data);
            setCurrentStep(-1);
            setAnswers({});
            setEmail("");
            setName("");
        } catch (err) {
            console.error(err);
        }
    }




    const handleNext = () => {
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1)

        } else {
            setShowResult(true);
        }
    }

    const handleBack = () => {
        setCurrentStep(currentStep - 1)
    }

    const isChecked = (label) => {
        if (question.type === "radio") {
            return answers[question.id]?.label === label;
        }
        return (answers[question.id] || []).some(item => item.label === label)
    }


    const handleRadio = (label, price) => {
        setAnswers({ ...answers, [question.id]: { label, price } })
    }

    const handleCheckbox = (label, price) => {
        const current = answers[question.id] || [];
        const exists = current.find(item => item.label === label);
        if (exists) {
            setAnswers({
                ...answers,
                [question.id]: current.filter(item => item.label !== label)
            })

        } else {
            setAnswers({
                ...answers,
                [question.id]: [...current, { label, price }]
            })
        }
    }




    if (currentStep === -1) {
        return (
            <UserInfo
                calculateTotal={calculateTotal}
                setCurrentStep={setCurrentStep}
                setEmail={setEmail}
                setName={setName}
                name={name}
                email={email}
            />
        )
    }



    if (showResult) {
        return (
            <>
                <Result
                    calculateTotal={calculateTotal}
                    answers={answers}
                    setAnswers={setAnswers}
                    setShowResult={setShowResult}
                    setCurrentStep={setCurrentStep}
                    email={email}
                    name={name}
                    handleSubmit={handleSubmit}
                />

            </>

        )
    }



    return (
        <>

            <StepForm
                handleBack={handleBack}
                handleCheckbox={handleCheckbox}
                handleRadio={handleRadio}
                handleNext={handleNext}
                isChecked={isChecked}
                currentStep={currentStep}
            />


        </>
    );


}

export default Form;
