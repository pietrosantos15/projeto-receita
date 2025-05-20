async function gerarCurriculo(event) {
  event.preventDefault();

  
  const informacoes = [
    document.getElementById('nome').value,
    document.getElementById('email').value,
    document.getElementById('telefone').value,
    document.getElementById('objetivo').value,
    document.getElementById('area').value,
    document.getElementById('formacoes').value,
    document.getElementById('experiencias').value,
    document.getElementById('tecnicas').value,
    document.getElementById('interpessoais').value,
    document.getElementById('idiomas').value,
    document.getElementById('certificacoes').value
  ];

  
  document.getElementById('curriculo').innerHTML = "<p>Gerando currículo com IA...</p>";

  try {
    const response = await fetch('https://aula-18-projeto-receita.vercel.app/listacurriculo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ informacoes })
    });

    const data = await response.json();

    if (response.ok && data.curriculo) {
      document.getElementById('curriculo').innerHTML = data.curriculo;
    } else {
      document.getElementById('curriculo').innerHTML = "<p>Erro ao gerar currículo: " + (data.error || 'Desconhecido') + "</p>";
    }
  } catch (err) {
    document.getElementById('curriculo').innerHTML = "<p>Erro de conexão com o servidor.</p>";
  }
}
