import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({
  models: { //Banco de dados interno do MirageJS 
    transaction: Model, //Nome da entidade
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela de site',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2022-02-02 09:00:00'),
        },
        {
          id: 2,
          title: 'Freela 22',
          type: 'withdraw',
          category: 'dev',
          amount: 3000,
          createdAt: new Date('2022-03-02 09:00:00'),
        },
      ], 
    })
  },
  
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);

    })
  }
});



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
