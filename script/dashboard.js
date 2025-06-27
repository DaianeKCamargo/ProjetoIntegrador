// HAMBUERGUER - BARRA DE NAVEGAÇÃO
function clickMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// SELECT O ANO NO CALENDÁRIO - QUANTIDADE MENSAL
function popularAnos() {
  const selectAno = document.getElementById('ano');
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - 100; // Define um intervalo de 100 anos para trás

  for (let i = anoInicial; i <= anoAtual; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectAno.add(option);
  }
}

// Chama a função para popular os anos quando a página carregar
document.addEventListener('DOMContentLoaded', popularAnos);

// SELECT O ANO NO CALENDÁRIO - CO2
function popularAnos1() {
  const selectAno = document.getElementById('ano1');
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - 100; // Define um intervalo de 100 anos para trás

  for (let i = anoInicial; i <= anoAtual; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectAno.add(option);
  }
}

// Chama a função para popular os anos quando a página carregar
document.addEventListener('DOMContentLoaded', popularAnos1);

// SELECT O ANO NO CALENDÁRIO - QUANTIDADE ANUAL
function popularAnos2() {
  const selectAno = document.getElementById('ano2');
  const anoAtual = new Date().getFullYear();
  const anoInicial = anoAtual - 100; // Define um intervalo de 100 anos para trás

  for (let i = anoInicial; i <= anoAtual; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    selectAno.add(option);
  }
}

// Chama a função para popular os anos quando a página carregar
document.addEventListener('DOMContentLoaded', popularAnos2);