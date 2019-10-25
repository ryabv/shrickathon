//для отрисовки доски на странице введите в строке команду drawChess(chess(n))

function chess(shift = 0) {
    let scheme = [];
    let tile = getTile(shift);
    let reversedTile = getTile(shift, true);

    for (let i = 1; i < 3; i++) {
        if (isOdd(i)) {
            scheme.push(...tile);
        } else {
            scheme.push(...reversedTile);
        }
    }

    return scheme;
}

function isOdd(n) {
    return Boolean(n % 2);
}

function getTile(shift, isReversed = false) {
    let tile = [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
    ];
    
    if (isReversed) {
        shift -= 3;
        for (let i = 0; i < 4; i++) {
            tile[i][(7 - shift) % 8] = 1;
            shift += 2;
        }
    } else {
        for (let i = 3; i >= 0; i--) {
            tile[i][(7 - shift) % 8] = 1;
            shift += 2;
        }
    }

    return tile;
}

function drawChess(scheme) {
    const table = document.createElement('table');
    document.body.appendChild(table);

    for (let i = 0; i < scheme.length; i++) {
        const tr = document.createElement('tr');

        for (let j = 0; j <scheme[i].length; j++) {
            const td = document.createElement('td');
            if (scheme[i][j]) {
                td.classList.add('yes');
            } else {
                td.classList.add('no');
            }
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}