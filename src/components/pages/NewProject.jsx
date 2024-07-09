import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'

function NewProject() {

    const navigate = useNavigate()

    function creatPost(project) {
        // inicializando cost and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                const state = { message: "Projeto criado com sucesso!" };
                navigate("/projects", { state });
            })
            .catch((erro) => console.log(erro))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={creatPost} btnText='Criar Projeto' />
        </div>
    )
}

export default NewProject