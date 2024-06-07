import React, { useState } from "react";
import * as S from "./styled.jsx";
import apagar from "./assets/apagar.png";

export default function App() {
  // Captura Tarefa
  const [captura, setCaptura] = useState("");

  // Guarda tarefa
  const [tarefas, setTarefas] = useState([
    {
      nome: "Tarefa 1",
      id: 1,
    },
  ]);

  // Adiciona tarefa
  const addTarefa = () => {
    // Criamos uma nova tarefa para concatenar no array []
    const novaTarefa = {
      nome: captura,
      id: Math.random(),
    };

    // Verifica input vazio
    if (captura === "") {
      alert("Adicione uma tarefa");
    } else {
      setTarefas(tarefas.concat(novaTarefa));
      setCaptura("");
    }
  };

  // Remover tarefa
  const remove = (id) => {
    const tarefaRemovida = tarefas.filter((item) => item.id !== id);
    setTarefas(tarefaRemovida);
  };

  return (
    <>
      <S.Main>
        <S.Container>
          <h1>TODO LIST</h1>

          <S.Campo>
            <input
              onChange={(e) => setCaptura(e.target.value)}
              placeholder="Adicionar tarefa..."
              maxLength={20}
              value={captura}
              type="text"
            />
            <button onClick={() => addTarefa()}>+</button>
          </S.Campo>

          <S.Box>
            {tarefas.map((item, id) => (
              <S.Lista key={id}>
                <input type="checkbox" />
                <h3>{item.nome}</h3>
                <button onClick={() => remove(item.id)}>
                  <img src={apagar} alt="apagar" />
                </button>
              </S.Lista>
            ))}
          </S.Box>
        </S.Container>
      </S.Main>
    </>
  );
}
