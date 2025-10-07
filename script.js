// Este código será executado assim que o script for carregado.
console.log("O script.js foi carregado com sucesso e adaptado para os novos botões!");

// --- Adicionando interatividade a TODOS os botões da grade ---

// 1. Selecionamos TODOS os elementos com a classe .grid-button
const gridButtons = document.querySelectorAll('.grid-button');

// 2. Usamos um loop (forEach) para adicionar o mesmo comportamento a cada botão encontrado
gridButtons.forEach(button => {
  
  // Adiciona o evento para quando o mouse é pressionado
  button.addEventListener('mousedown', () => {
    // Aplica um leve afundamento no botão para simular um clique
    button.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  // Adiciona o evento para quando o clique é solto
  button.addEventListener('mouseup', () => {
    // O botão volta para sua posição de hover normal
    button.style.transform = 'translateY(-10px) scale(1.03)';
  });
  
  // Adiciona o evento para quando o mouse sai de cima do botão
  button.addEventListener('mouseleave', () => {
    // O botão volta para sua posição original
    button.style.transform = 'none';
  });

});