import { supabase } from '../../../supabase-client';
import { useState } from 'react';


function ProjectFormAdmin({user}) {

    const [newProject, setNewProject] = useState({ title: '', description: '', technologies: [], github_url: '',website_url: '' });
    const [projectImage, setProjectImage] = useState(null);




    const uploadImage = async (file) => {
        const filepath = `public/${file.name}-${Date.now()}`;
        const { error } = await supabase
            .storage
            .from("projects-images")
            .upload(filepath, file);
        if (error) {
            console.error("Error uploading image: ", error)
            return null;
        }

        const { data } = await supabase
            .storage
            .from("projects-images")
            .getPublicUrl(filepath);

        return data.publicUrl;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            console.error("You must be logged in to add a project");
            return;
        }

        let imageUrl = null;
        if (projectImage) {
            imageUrl = await uploadImage(projectImage);
        }
        const { error } = await supabase
            .from("Projects")
            .insert({ ...newProject, image: imageUrl, user_id: user.id })

        if (error) {
            console.error("Error adding project: ", error);
            return;
        }
        setNewProject({
            title: '',
            description: '',
            technologies: [],
            github_url: '',
            website_url: ''
        });
        setProjectImage(null);

    }


    const handleFileChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setProjectImage(e.target.files[0]);
        }
    }



    return (
        <>

            <form onSubmit={handleSubmit} className='admin-section' id='admin'>
                <div className='contact-section'>
                    <h1 className='h1-text'>Contact Section</h1>
                    <input type="file" className='add' accept='image/*' onChange={handleFileChange} />
                    <input type="text" className='add' placeholder='add title...' onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} />
                    <textarea placeholder='add description...' className='add' onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} />
                    <input type="text" className='add' placeholder='add technology...' onChange={(e) => setNewProject({ ...newProject, technologies: e.target.value.split(",") })} />
                    <input type="text" placeholder='add git hub URL...' className='add' onChange={(e) => setNewProject({ ...newProject, github_url: e.target.value })} />
                    <input type="text" placeholder='add website URL...' className='add' onChange={(e) => setNewProject({ ...newProject, website_url: e.target.value })} />
                    <button type='submit' className='submit-btn'>Submit</button>
                </div>
            </form>

        </>
    )
}

export default ProjectFormAdmin


