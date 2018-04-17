  (() => {
    let flag = 1;
    const btns = [...document.querySelectorAll('button')];
    const btn5 = document.getElementById('btn5');
    
    btn5.addEventListener('click', () => {
      btns.map(btn => {
        let num = parseInt(btn.innerHTML, 10);
        
        if (num === 5) {
          return btn;
        }
        
        if (num < 5) {
          if (num % 3 === 0 || num % 3 === 2) {
            num -= 1;
          } else if (num % 3 === 1) {
            num += 3;
          }
          
        } else {
          if (num % 3 === 0) {
            num -= 3;
          } else if (num % 3 === 1 || num % 3 === 2) {
            num += 1;
          }
        }
        
        btn.innerHTML = num;
        
        return btn;
      });
    });
  })();