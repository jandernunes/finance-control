import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html {
    @media (max-width: 1080px) { //Quando tela for até 1080px
        font-size: 93.75%; //Diminuir ao equivalente a 15px(93.75% de 16) no tamanho padrão
    }

    @media (max-width: 720) {
        font-size: 87.5%; //Equivalente a 14px no tamanho padrão
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; //Deixar a fonte mais definida
}

body, input, textarea, button, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
} 

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px; //Se tela for grande terá no máximo 576. Se for menor vai ocupar 100%
    background: var(--background);
    padding: 3rem;
    position: relative; //Para configurar botão fechar com relação ao modal
    border-radius: 0.24rem;
}

.react-modal-close {
    position: absolute; //Posição fica em relação ao pai
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

}

`