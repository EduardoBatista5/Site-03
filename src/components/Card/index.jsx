import styles from  './Card.module.css'
import { FaHtml5, FaJs, FaReact, FaCss3Alt, FaArrowRight } from 
"react-icons/fa";
import {Link} from 'react-router-dom'


function Card ({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={html_url} className={styles.botao}>
                    <FaArrowRight />
                </Link>
            </div>
        </section>
    ) 
}


export default Card