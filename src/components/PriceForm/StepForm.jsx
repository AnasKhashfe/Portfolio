import { questions } from '../../data/questions.js';
import "./PriceForm.css"

function StepForm({ handleBack, handleCheckbox, handleRadio, handleNext, isChecked, currentStep }) {




    const question = questions[currentStep];

    
    return (
        <>
            <section className="price-form-section">
                <div className="head">
                    <p className="step-counter">Step {currentStep + 1} of {questions.length}</p>
                    <h2>{question.question}</h2>
                </div>

                <ul>
                    {
                        question.options.map((option) => (
                            <li
                                key={option.label}
                                className={isChecked(option.label) ? "selected" : ""}
                                onClick={() =>
                                    question.type === "radio"
                                        ? handleRadio(option.label, option.price)
                                        : handleCheckbox(option.label, option.price)}

                            >
                                {option.label}
                            </li>
                        ))
                    }

                </ul>

                <div className="buttons">
                    {
                        currentStep > -1 && (
                            <button
                                onClick={handleBack}
                            >
                                Back
                            </button>
                        )
                    }


                    <button
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </section>
        </>
    )
}


export default StepForm;