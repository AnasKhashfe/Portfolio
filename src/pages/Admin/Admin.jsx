import { supabase } from "../../../supabase-client"
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Admin.css';
import LoginAdmin from './LoginAdmin';
import ProjectFormAdmin from './ProjectFormAdmin';
import SkillFormAdmin from './SkillFormAdmin';


function Admin() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
            setLoading(false);
        };

        getUser();
    }, []);


    useEffect(() => {
        if (!loading &&!user) {
            navigate("/");

        }
    }, [user,loading])


    return (
        <>

            <LoginAdmin setUser={setUser} />
            {
                user
                    ?
                    <>
                        <ProjectFormAdmin user={user} />
                        <SkillFormAdmin />
                    </>
                    :
                    <p>
                        Please log in to add projects
                    </p>
            }
        </>
    )
}

export default Admin


