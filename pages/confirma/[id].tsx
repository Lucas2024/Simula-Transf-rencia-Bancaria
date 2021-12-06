
import { QuerySnapshot } from 'firebase/firestore/lite'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { getTransferencia, getUmaTransferencia, Transferencia } from './../../interfaces/transferencia'
import { useRouter } from 'next/dist/client/router'

export default function transferencia() {
  const router = useRouter();
  const id = router.query.id as string;

  const [transferencia, setTransferencia] = useState<Transferencia>();

  useEffect(() => {
    if (id) {
      getUmaTransferencia(id).then(x => {
        const transfer = x.data() as Transferencia;
        setTransferencia(transfer);
      }).catch(x => alert(x));
      console.log('id', id);
      

    }
  }, [id])

  return (
    < div className={styles.fundo}>
      <div className={styles.ponto}>. </div>

      {transferencia && (
        <div className={styles.containerr}>
          <h3 className={styles.h3}>Confirmação</h3>
          <div>
            <p className={styles.para}>CPF:
              <b>{transferencia.nome}</b>
            </p>


            <p className={styles.banco1}>Banco:
              <b>{transferencia.agencia}</b>
            </p>

            <p className={styles.conta1}>Conta:
              <b>{transferencia.conta}</b>
            </p>
          </div>



          <p>Valor: <b>{transferencia.valor}</b></p>

          <p>Data de transferência:<b>02/12/2021</b></p>
          
          <div className={styles.confirmar}>
            <Link href="/comprovante">
              <button className={styles.confirmar1}>Confirmar</button>
            </Link>
          </div>

        </div>

      )
      }






    </div >
  )
}




