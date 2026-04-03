import { questions } from '../../data/questions.js';
import { generatePdf } from '../../utils/generatePdf.js';
import './PriceForm.css'



function Result({ calculateTotal, answers, setAnswers, setShowResult, setCurrentStep,handleSubmit,email,name }) {



    return (
        <section className="price-form-section">
            <div className="head">
                <h1>Your Quote </h1>
            </div>
            <div className="result">
                {questions.map(q => (
                    <div key={q.id} className="result-item">
                        <p
                            className='result-question'
                        >
                            {q.question}
                        </p>
                        {q.type === "radio"
                            ?
                            (
                                <p className='result-answer'>
                                    {answers[q.id]?.label} ---$
                                    {answers[q.id]?.price}
                                </p>
                            )
                            :

                            (
                                (answers[q.id] || []).map(item => (
                                    <p
                                        key={item.label}
                                        className='result-answer'

                                    >
                                        {item.label} --- ${item.price}

                                    </p>

                                )
                                )
                            )
                        }



                    </div>
                ))}
                <div className="total">
                    <h2>Total: ${calculateTotal()}</h2>
                </div>
                <button onClick={handleSubmit}>
                    Send Me Information
                </button>
                <button onClick={() => {setShowResult(false); setCurrentStep(-1); setAnswers({});  }}>
                    Start Over
                </button>
                <button onClick={() => window.location.href = 'mailto:khashfeanas@gmail.com'}>
                    Send Message
                </button>
                <button onClick={() =>generatePdf(name, email, calculateTotal(), questions, answers)}>
                    Download PDF
                </button>

            </div>
        </section>
    );





}

export default Result ;
