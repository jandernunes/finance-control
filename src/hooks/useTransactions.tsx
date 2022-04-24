import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

//Cria type baseado na interface Transaction, mas sem os campos id e createdAt
//Omit pega todos os campos e omite os que foram passados no parâmetro
//Pick é o contrário. Pega apenas os do parâmetro
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
    children: ReactNode; //Pode receber qualquer tipo reconhecido pelo React
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

//O Provider delimita quem terá acesso ao context. Somente os componentes que estiverem dentro da tag do provider
export function TransactionsProvider({ children }:TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });


        const { transaction } = response.data;

        //Não altera e sim cria um novo com as transactions anteriores + a nova transacion
        setTransactions([
            ...transactions,
            transaction,
        ]);
    }

    return (
        //Contexto retorna tanto as transactions como a function para inclusão de novo transacion
        //Primeira chave para retornar código JS e a segunda para retornar um objeto
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
    
}

//Criação de próprio hook para evitar várias importações nos componentes
export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}