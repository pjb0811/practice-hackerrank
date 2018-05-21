const markdown = `
|@cols=2:merged|
|:--|:-:|--:|
|table|table|asd|
asdasdsad
| aa | testst
 ---|---
|table2223|\\|\\|table
|table| 'a|b|c' \|
`;

// const regexs = {
//   table: /\|?(.+)[\||@cols=.+](.+)\|?\n/g,
//   contents: /^\|(.+)\|$/g,
//   delimiter: /(^:?)(-+)(:?$)/
// };

// let markdown = editor.getValue();
let rows = markdown.split('\n');
let table = [];
let tables = {
  originals: [],
  prettys: [],
  sizes: {}
};

rows.map(row => {
  if (row.includes('|')) {
    table.push(row);
  } else {
    const tableStr = table.join('\n');
    if (table.length && table[1] && table[1].includes('-')) {
      tables.originals.push(tableStr);
    }
    table = [];
  }
});

table = [];
rows.map(row => {
  if (row.includes('|')) {
    const trimRow = row.trim();
    const lastChars = trimRow.substr(trimRow.length - 2, trimRow.length - 1);
    if (trimRow[0] !== '|') {
      row = `|${row}`;
    }
    if (trimRow[trimRow.length - 1] !== '|' || lastChars === '\\|') {
      row = `${row}|`;
    }
    table.push(row);
  } else {
    const tableStr = table.join('\n');
    if (table.length && table[1] && table[1].includes('-')) {
      tables.prettys.push(tableStr);
    }
    table = [];
  }
});

tables.prettys = tables.prettys.map(table => {
  return table
    .split('\n')
    .map(row => {
      if (row.includes('\'')) {
        row = row.replace(/(\'.+\')/g, (all, word) => {
          return word.replace(/\|/g, '[$]');
        });
      }
      if (row.includes('\\|')) {
        row = row.replace(/\\\|/g, '[#]');
      }
      return row;
    })
    .join('\n');
});

tables.prettys = tables.prettys.map((table, i) => {
  tables.sizes[i] = {};
  return table
    .split('\n')
    .map(row => {
      if (!row.includes('@cols')) {
        row = row
          .split('|')
          .map((data, k) => {
            if (data) {
              let temp;
              if (!tables.sizes[i][k]) {
                tables.sizes[i][k] = 0;
              }
              temp = data.replace(/\[#\]/g, '\\|');
              temp = temp.replace(/(\'.+\')/g, (all, word) => {
                return word.replace(/\[\$\]/g, '|');
              });
              tables.sizes[i][k] = Math.max(
                tables.sizes[i][k],
                temp.trim().length
              );
            }
            return data;
          })
          .join('|');
      }
      return row;
    })
    .join('\n');
});

tables.prettys = tables.prettys.map((table, i) => {
  return table
    .split('\n')
    .map(row => {
      if (!row.includes('@cols')) {
        row = row
          .split('|')
          .map((data, k) => {
            if (data) {
              const max = tables.sizes[i][k];
              let tempData = data.trim();
              tempData = tempData.replace(/\[#\]/g, '\\|');
              tempData = tempData.replace(/(\'.+\')/g, (all, word) => {
                return word.replace(/\[\$\]/g, '|');
              });

              if (tempData.length < max) {
                const fillingChar = /(^:?)(-+)(:?$)/.test(tempData) ? '-' : ' ';
                if (
                  fillingChar === '-' &&
                  tempData[tempData.length - 1] === ':'
                ) {
                  tempData =
                    tempData.substr(0, tempData.length - 1) +
                    fillingChar.repeat(max - tempData.length) +
                    tempData.substr(tempData.length - 1);
                } else {
                  tempData =
                    tempData + fillingChar.repeat(max - tempData.length);
                }
              }
              data = ` ${tempData} `;
            }
            return data;
          })
          .join('|');

        if (!tables.sizes[i].full) {
          tables.sizes[i].full = 0;
        }
        let tempRow = row.substr(1, row.length - 2).trim();
        tables.sizes[i].full = Math.max(tables.sizes[i].full, tempRow.length);
      }
      return row;
    })
    .join('\n');
});

tables.prettys = tables.prettys.map((table, i) => {
  return table
    .split('\n')
    .map(row => {
      if (row.includes('@cols')) {
        row = row
          .split('|')
          .map(data => {
            let tempData = data.trim();
            if (tempData) {
              let fullSize = tables.sizes[i].full;
              if (tempData.length < fullSize) {
                tempData = tempData + ' '.repeat(fullSize - tempData.length);
              } else {
                tempData = tempData.substr(0, fullSize);
              }
              data = ` ${tempData} `;
            }
            return data;
          })
          .join('|');
      }
      return row;
    })
    .join('\n');
});

console.log('#########################################');
tables.originals.map(table => {
  table.split('\n').map(row => {
    console.log(row);
  });
});
console.log('#########################################');
tables.prettys.map(table => {
  table.split('\n').map(row => {
    console.log(row);
  });
});
console.log('#########################################');
