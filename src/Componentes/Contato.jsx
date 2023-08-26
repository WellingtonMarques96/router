import React from 'react';
import styles from './Contato.module.css';
import Head from './Head';
import foto from '../../img/contato.jpg';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title='Ranek | Contato' description='Entre em contato' />
      <img src={foto} alt="máquina de escrever" />
      <div>
        <h1> Entre em contato</h1>
        <ul className={styles.dados}>
          <li>well1506marques@gmail.com</li>
          <li>31 9999-9999</li>
          <li>Rua logo ali, 999 MG</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
