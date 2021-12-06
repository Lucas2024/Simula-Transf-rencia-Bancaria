import { addDoc, collection, getDocs, doc, getDoc } from "firebase/firestore/lite";
import { db } from "../services/firebase";

export interface Transferencia {
    id: string;
    valor: string;
    agencia: string;
    conta: string;
    cpf: string;
    data: string;
    nome: string;

}

export async function getTransferencia() {
    const col = collection(db, 'transferencia');
    const snapshot = await getDocs(col);
    return snapshot;
}

export async function getUmaTransferencia(id: string) {
    const reference = doc(db, 'transferencia', id);
    const snapshot = await getDoc(reference);
    return snapshot;
}

export async function addTransferencia(transferencia: Transferencia) {
    const col = collection(db, 'transferencia');
    return addDoc(col, transferencia);
}