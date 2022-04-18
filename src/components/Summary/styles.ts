import styled from "styled-components";

export const Container = styled.div`
    display: grid; //Alinhamento
    grid-template-columns: repeat(3, 1fr); //3 colunas com 1 tamanho iguais. Repeat é mesmo que escrever repetidamente
    gap: 2rem; //Espaçamento entre itens
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; //Padrão do strng é inline e por isso o margin-top não funciona 
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.hightlight-background {
            background: var(--green);
            color: #fff;
        }

    }
`;