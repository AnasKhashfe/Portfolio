import { useState } from "react";
import { supabase } from "../../../supabase-client";


function SkillFormAdmin() {

    const [skills, setSkills] = useState({ skills: [] });



    const handleSubmitSkills = async (e) => {
        e.preventDefault();
        const { error } = await supabase.from("Skills").insert({ ...skills })
        if (error) {
            console.error("Error skills adding: ", error.message);
        }
        setSkills({
            skills: []
        })
    }

    return (
        <>

            <form onSubmit={handleSubmitSkills}>
                <div className="skill-section">
                    <h1 className='h1-text'>Skill Section</h1>
                    <input type="text" placeholder='Add New Skill...' onChange={(e) => setSkills(({ ...skills, skills: e.target.value.split(",") }))} />
                    <button type='submit'>Add Skill</button>

                </div>
            </form>
        </>


        
    )
}

export default SkillFormAdmin


