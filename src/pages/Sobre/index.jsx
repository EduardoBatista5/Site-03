import styles from "./Sobre.module.css";
import avatar from "./images/Avatar.png";
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          
          <p>
            Sou <span>Eduardo Batista</span> <br />
            <strong>Dev Front End</strong>
          </p>

          <p>Estou aprendendo desenvolvimento web desde 2024</p>
          <p>Sou apaixonado por transformar ideias em realidade digital</p>

          <p>
            Especializado em criação de aplicações dinâmicas e intuitivas,
            <br />
            com foco na experiência do usuário
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
            <img src={html} alt="icone do HTML" />
            <img src={css} alt="icone do css" />
            <img src={js} alt="icone do js" />
            <img src={react} alt="icone do react" />
            <img src={node} alt="icone do node" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
