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

function gerarId() {
  return Math.floor(Math.random() * 3000);
}

function AdicionarTarefa(tarefa) {
  let li = criarTagLI(tarefa);
  listaTarefas.appendChild(li);
  inputNovaTarefa.value = "";
}

function CriarTagLi(tarefa) {
  let li = document.createElement("li");
  li.id = tarefa.id;

  let span = document.createElement("span");
  span.classList.add("textoTarefa");
  span.innerHTML = tarefa.nome;

  let div = document.createElement("div");

  let btnEditar = document.createElement("button");
  btnEditar.classList.add("btnAcao");
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEditar.setAttribute("onclick", "editar(" + tarefa.id + ")");

  let btnExcluir = document.createElement("button");
  btnExcluir.classList.add("btnAcao");
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.setAttribute("onclick", "excluir(" + tarefa.id + ")");

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function editar(idTarefa) {
  let li = document.getElementById("" + idTarefa + "");
  if (li) {
    idTarefaEdicao.innerHTML = "#" + idTarefa;
    inputTarefaNomeEdicao.value = li.innerText;
    alternarJanelaEdicao();
  } else {
    alert("Elemento HTML não encontrado!");
  }
}
function excluir(idTarefa) {
  let confirmacao = window.confirm("Tem certeza que deseja excluir? ");
  if (confirmacao) {
    let li = document.getElementById("" + idTarefa + "");
    if (li) {
      listaTarefas.removeChild(li);
    } else {
      alert("Elemento HTML não encontrado!");
    }
  }
}
