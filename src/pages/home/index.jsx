import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
        <> 
            <section className={styles.home}>
                    <div className={styles.apresentacao}>
                    <p>
                        Olá, sou <br />
                        <span>Eduardo</span> <br />
                        Dev Front End
                    </p>
                    <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais
                    </Link>
                </div>
                <figure>
                    <img className={styles.img_home} src="/Code_Pensanting.svg" alt="Imagem de Home" />
                </figure>
            </section>
        </>
    )
}

export default Home
