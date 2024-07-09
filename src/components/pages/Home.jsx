import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

function Home () {
    return (
       <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newprojects" text="Criar Projetos"/> 
            <img src="src/components/img/savings.svg" alt="Costs" />
       </section>
    )
}

export default Home