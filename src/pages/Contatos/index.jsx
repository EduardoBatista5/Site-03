import styles from './Contatos.module.css' 
import { IoIosMailOpen, IoLogoInstagram, IoLogoYoutube, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

function Contatos () {
    return (
        <>
           
            <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>

                <a href="https://eb215799@gmail.com" target="_blank" rel="noopener, noreferrer"><IoIosMailOpen className={styles.icone}/>
                </a>
                
                <a href="https://www.instagram.com/eduardo_batistalr/" target="_blank" rel="noopener, noreferrer"><IoLogoInstagram className={styles.icone}/>
                </a>

                <a href="https://www.youtube.com/channel/UCEOXThnCF9i8nqu2mpVxBVQ" target="_blank" rel="noopener, noreferrer"><IoLogoYoutube className={styles.icone}/>
                </a>

                <a href="https://github.com/EduardoBatista5" target="_blank" rel="noopener, noreferrer"><IoLogoGithub className={styles.icone}/>
                </a>

                <a href="Los Eduardos" target="_blank" rel="noopener, noreferrer"><IoLogoLinkedin className={styles.icone}/>
                </a>

            </div>

            </section>
        

        </>
    )
}

export default Contatos