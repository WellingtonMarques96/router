import React from 'react';
import styles from './Produtos.module.css';
import {Link} from 'react-router-dom';
import Head from './Head';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);
  React.useEffect (() => { // usado nesse caso para já fazer a chamada na API quando o site é renderizado a primeira vez, não tem dependência pq é para o fetch inicial
    async function fetchData(URL) {
      const response = await fetch(URL);
      const json = await response.json();
      setProdutos(json);
    }
    fetchData('https://ranekapi.origamid.dev/json/api/produto/')
  }, []);

  if(produtos === null) return null;
  return (
    <section className={`${styles.produtos} animeLeft`}>
      <Head title='Ranek' description='Descrição do site Ranek'/>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
