let inputNovaTarefa = document.querySelector("#inputNovaTarefa");
let btnAddTarefa = document.querySelector("#btnAddTarefa");
let listaTarefas = document.querySelector("#listaTarefas");

inputNovaTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId(),
    };
    // TODO:: Adiconar Tarefa ao HTML
  }
});

btnAddTarefa.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let tarefa = {
      nome: inputNovaTarefa.value,
      id: gerarId(),
    };
    // TODO:: Adiconar Tarefa ao HTML
  }
});
