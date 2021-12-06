import { QuerySnapshot } from 'firebase/firestore/lite'
import type { NextPage } from 'next'
import Link from 'next/link'
import { FormEvent, useEffect, useState } from 'react'
import { Pessoa, getPessoa, addPessoa } from '../interfaces/people'
import { firebaseConfig } from '../services/config'
import styles from '../styles/Home.module.css'
import { Transferencia, getTransferencia, addTransferencia } from '../interfaces/transferencia'


const Home: NextPage = () => {
  const [list, setList] = useState<QuerySnapshot>();
  const [newValue, setNewValue] = useState("");

  const [transferencia, setTransferencia] = useState<Transferencia>()


  function handleGetTransferencia() {
    getTransferencia()
      .then(x => setList(x))
      .catch(error => alert(error))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    handleGetTransferencia();
  }, [])

  function GetTransferencia() {
    const transferencia = { nome: newValue } as Transferencia;
    addTransferencia(transferencia).then(x => {
      alert("Salvo")
      handleGetTransferencia();
    }
    ).catch(error => console.log(error));
  }

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    if (transferencia) {
      addTransferencia(transferencia).then(x => {
        location.href = "/confirma/" + x.id; 
      })
    }
  }


  return (
    <form onSubmit={handleOnSubmit}>
      <div className={styles.fundo}>
        <div className={styles.ponto}>. </div>
        <div className={styles.container}>

          <div>
            <p>Dados do destinatário</p>
            <input type="checkbox" />CPF
            <input type="checkbox" />CNPJ
          </div>
          <div className={styles.dados}>
            <input type="number" name="name" onChange={(e) => setTransferencia(prevState => ({ ...prevState, nome: e.target.value }) as Transferencia)}></input>
          </div>

          <div className={styles.dados1}>
            <p>Agência</p>
            <input type="number" name="name" onChange={(e) => setTransferencia(prevState => ({ ...prevState, agencia: e.target.value }) as Transferencia)}></input>
          </div>


          <div className={styles.dados2}>
            <p>Conta</p>
            <input type="number" name="name" onChange={(e) => setTransferencia(prevState => ({ ...prevState, conta: e.target.value }) as Transferencia)}></input>
          </div>

          <div className={styles.dados3}>
            <p>Tipo de conta destino:</p>
            <select className={styles.sel}>
              <option>Conta Corrente</option>
              <option>Conta Poupança</option>
            </select>
          </div>

          <div className={styles.dados4}>
            <p>Valor:</p>
            <input type="number" name="name" onChange={(e) => setTransferencia(prevState => ({ ...prevState, valor: e.target.value }) as Transferencia)} ></input>
          </div>

          <div className={styles.debito}>
            <p>Débito em:</p>
            <input type="checkbox" />Conta Corrente

          </div>


          <div className={styles.checks}>
            <p>Tipo de Transferêrencia</p>
            <label><input type="checkbox" />
              DOC
            </label>

            <label><input type="checkbox" />
              TED
            </label>

            <div className={styles.banco}>
              <p>Banco Destinatário</p>
              <select className={styles.sel}>
                <option selected value="easier_ank">Easier Bank</option>
                <option value="sicredi">Sicredi</option>
                <option value="sicoob">Sicoob</option>
                <option value="banrisul">Banrisul</option>

              </select>

            </div>
          </div>

          <div className={styles.botao}>

            <button className={styles.cancelar}>Cancelar</button>
            <button className={styles.avancar} type="submit">Avançar</button>
          </div>

        </div>
      </div>
    </form>
  )
}

export default Home







