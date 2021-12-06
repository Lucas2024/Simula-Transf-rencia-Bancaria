import { QuerySnapshot } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getTransferencia, getUmaTransferencia, Transferencia } from '../interfaces/transferencia'
import { useRouter } from 'next/dist/client/router';

export default function transferencia(id: string) {

  const [listaTransferencia, setListaTransferencia] = useState<QuerySnapshot>();
  function getTransferencias() {
    getTransferencia().then(
      x => setListaTransferencia(x))
      .catch(error => alert(error))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getTransferencias()
    console.log('id', id);
  }, [id])

  
  return (
    < div className={styles.fundo}>
      <div className={styles.ponto}>. </div>

      {listaTransferencia?.docs?.map(doc => {
              const transferencia = doc.data() as Transferencia;
       return(
          <div className={styles.containerrr}>
          <h3 className={styles.h3}>COMPROVANTE DE TRANSFÊRENCIA</h3>

          <div>
            <p className={styles.valor}>Valor:
              <b>{transferencia.valor}</b>
            </p>
          </div>

          <p className={styles.instituicaoa}>Tipo de Transfêrencia:</p>
          <b>Entre contas Easier Bank</b>
          
          <h3>DESTINO</h3>
          <p>CPF: </p>
          <b>{transferencia.nome}</b>
          <p>Banco:</p>
          <b>{transferencia.agencia}</b>
          <p>Conta:</p>
          <b>{transferencia.conta}</b>


          <div className={styles.confirmar}>
            <button className={styles.confirmar1}>Compartilhar</button>
          </div>

        </div>
       )
        
      })}




      

    </div >
  )
}
