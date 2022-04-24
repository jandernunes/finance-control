import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root'); //Informa qual elemento root. Acessibilidade para saber que o modal está acima de tudo 

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false); //Estado aberto/fechado para o Modal

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }
    
  return (
    <TransactionsProvider>
      {/* Passando função para manipular o estado */}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

