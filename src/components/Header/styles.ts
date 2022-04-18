import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; //Centrarlizar 

    //1º item é topo
    //2º item é laterais (16px)
    //3º item é botton (10 x 16px)
    padding: 2rem 1rem 8rem; //1rem = 1 x tamanho da fonte mesmo tamanho
    display: flex;
    align-items: center; //Alinhamento vertical
    justify-content: space-between; //Espaço entre itens

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;