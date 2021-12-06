import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../services/firebase";

export interface Pessoa {
    Id: string,
    Nome: string,
    Document: string
}

export async function getPessoa() {
    const col = collection(db, 'Pessoa');
    const snapshot = await getDocs(col);
    return snapshot;
}

export async function addPessoa(pessoa: Pessoa) {
    const col = collection(db, 'pessoa');
    return addDoc(col, pessoa);
}