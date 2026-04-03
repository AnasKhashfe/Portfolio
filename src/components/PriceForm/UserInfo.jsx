
import "./PriceForm.css"

function UserInfo({ setCurrentStep,setEmail,setName,name, email }) {





        return (
            <>
                <section className="price-form-section">
                    <div className="head">
                        <h1>Enter your information</h1>
                    </div>
                    <div className="inputs">
                        <input
                            type="email"
                            placeholder="Email"               
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Name"                            
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <button  onClick={() => {
                            if(name.trim() !== "" && email.trim() !== "") {
                                setCurrentStep(currentStep => currentStep + 1);
                            }
                        }}>Submit</button>
                    </div>
                </section>
            </>
        )
    

}


export default UserInfo;