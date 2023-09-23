const adicionarLinhaBtn = document.getElementById("adicionar-linha");
const modal = document.getElementById("modal");
const fecharModalBtn = document.getElementById("fechar-modal");
const salvarLinhaBtn = document.getElementById("salvar-linha");
const formulario = document.getElementById("formulario");
const minhaTabela = document
  .getElementById("minha-tabela")
  .getElementsByTagName("tbody")[0];

adicionarLinhaBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

fecharModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  formulario.reset();
});

salvarLinhaBtn.addEventListener("click", () => {
  const placa = document.getElementById("placa").value;
  const valor = document.getElementById("valor").value;
  const status = document.getElementById("status").value;

  if (placa === "" || valor === "" || status === "") {
    window.alert("Preencha todos os campos");

    return false;
  }

  // Crie uma nova linha com os valores inseridos no formulário
  const newRow = minhaTabela.insertRow();
  const placaCell = newRow.insertCell(0);
  const valorCell = newRow.insertCell(1);
  const statusCell = newRow.insertCell(2);
  const infoCell = newRow.insertCell(3);
  const deleteRow = newRow.insertCell(4);

  placaCell.innerHTML = placa;
  valorCell.innerHTML = `R$${valor}`;
  statusCell.innerHTML = status;
  infoCell.innerHTML = `<a href="#">Detalhes</a>`;
  deleteRow.innerHTML = `<button onclick="deleteRowButton()" id="delete-row">X</button>`;

  modal.style.display = "none";
  formulario.reset();
});

const deleteRowButton = () => {
  console.log("1");

  console.log("2");
  deleteLinha();
};

const deleteLinha = () => {
  const deleteButtons = document.querySelectorAll("#delete-row");
  deleteButtons.forEach((button) => {
    console.log("3");
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      console.log("4");
      if (row) {
        row.remove();
        console.log("5");
      }
      console.log("6");
    });
  });
};
