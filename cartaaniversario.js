 const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const btn = document.getElementById('toggleButton');

    let state = 'closed';

    btn.addEventListener('click', () => {
      if (state === 'closed') {
        envelope.classList.add('open');
        letter.classList.remove('fully-open');
        letter.classList.add('half-open');
        state = 'partial';
        btn.textContent = 'Puxar Mais a Carta';
      } else if (state === 'partial') {
        letter.classList.remove('half-open');
        letter.classList.add('fully-open');
        state = 'full';
        btn.textContent = 'Fechar Carta';
      } else {
        envelope.classList.remove('open');
        letter.classList.remove('half-open', 'fully-open');
        state = 'closed';
        btn.textContent = 'Abrir Carta';
      }
    });