import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from './Contatos.module.css' 

function Contatos () {
    return (
        <>
            <Header />
            <Container>
            <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>para que possamos conversar mais sobre</p>.
            </section>
        
            </Container>
            <Footer />
        </>
    )
}

export default Contatos