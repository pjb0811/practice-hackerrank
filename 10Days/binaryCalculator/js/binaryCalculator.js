(() => {
  const res = document.getElementById('res');
  const btns = document.getElementById('btns');
  
  btns.addEventListener('click', (e) => {
    const id = e.target.id;
    
    if (id === 'btnEql') {
      const operator = res.innerHTML.match(/[+\-/*]/)[0];
      const result = res.innerHTML.split(/[+\-/*]/).reduce((prev, curr) => {
        prev = parseInt(prev, 2);
        curr = parseInt(curr, 2);
        if (operator === '+') {
          return prev + curr;
        }
        if (operator === '-') {
          return prev - curr;
        }
        if (operator === '*') {
          return prev * curr;
        }
        return prev / curr;
      });
      res.innerHTML = result.toString(2);
    }
    
    if (id === 'btn0') {
      res.innerHTML += '0';
    }
    
    if (id === 'btn1') {
      res.innerHTML += '1';
    }
    
    if (id === 'btnClr') {
      res.innerHTML = '';
    }
    
    if (id === 'btnSum') {
      res.innerHTML += '+';
    }
    
    if (id === 'btnSub') {
      res.innerHTML += '-';
    }
    
    if (id === 'btnMul') {
      res.innerHTML += '*';
    }
  });
  
})();