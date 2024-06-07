import React from "react";
import * as S from "./styled.jsx";
import apagar from "./assets/apagar.png";

export default function App() {
  return (
    <>
      <S.Main>
        <S.Container>
          <h1>TODO LIST</h1>
          <S.Campo>
            <input placeholder="Adicionar tarefa..." type="text" />
            <button>+</button>
          </S.Campo>
          <S.Lista>
            <input type="checkbox" />
            <h3>Tarefa 1</h3>
            <button>
              <img src={apagar} alt="apagar" />
            </button>
          </S.Lista>
        </S.Container>
      </S.Main>
    </>
  );
}
