import { supabase } from "../../../supabase-client"
import { useEffect, useState } from 'react';
import './Admin.css';
import LoginAdmin from './LoginAdmin';
import ProjectFormAdmin from './ProjectFormAdmin';
import SkillFormAdmin from './SkillFormAdmin';

const ADMIN_USER_ID = "4ee4cb21-6e82-4dd0-b680-ced26b2321d1";
function Admin() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {

        const { data: listener } = supabase.auth.onAuthStateChange(
            (event, session) => {
                const currentUser = session?.user || null;
                setUser(currentUser);
                setIsAdmin(currentUser?.id === ADMIN_USER_ID);
                setLoading(false);
            }
        );


        supabase.auth.getUser().then(({ data }) => {
            const currentUser = data.user || null;
            setUser(currentUser);
            setIsAdmin(currentUser?.id === ADMIN_USER_ID);
            setLoading(false);
        });

        return () => listener.subscription.unsubscribe();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!user) {
        return <LoginAdmin setUser={setUser} />;
    }


    if (!isAdmin) {
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>Access Denied. You are not authorized.</p>
                <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
            </div>
        );
    }


    return (
        <div>
            <button onClick={() => supabase.auth.signOut()}>Sign Out</button>
            <ProjectFormAdmin user={user} />
            <SkillFormAdmin />
        </div>
    );
}

export default Admin


