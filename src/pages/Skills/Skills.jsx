// import skills from '../../data/skills.json';
import { supabase } from '../../../supabase-client';
import './Skills.css'
import { useEffect, useState } from 'react';


function Skills() {

    const [skills, setSkills] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase.from("Skills").select("*");
            if (error) {
                console.error("Error fetching skills: ", error.message)
            } else {
                setSkills(data)
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <section className="skills-section" id='skills'>
                <h1 className="main-text">
                    Skills
                </h1>
                <p className='section-description'>A collection of the technologies and tools I work with.
                </p>
                {
                    skills.map((skill) => (
                        <ul className="skills-tech" id={skill.id}>
                            {
                                skill.skills.map(s => (
                                    <li>{s}</li>
                                ))
                            }
                        </ul>
                    ))
                }
            </section>

        </>
    )
}

export default Skills;
