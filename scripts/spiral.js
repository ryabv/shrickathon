function spiral(n) {
    const nSquare = Math.pow(n, 2);
    const matrix = createScheme(n);
    let max = n - 1;
    let min = 0;
    let i = 0, j = 0;

    const EDGES = {
        TLE: 'topLeftEdge',
        TRE: 'topRightEdge',
        BLE: 'bottomLeftEdge',
        BRE: 'bottomRightEdge'
    };

    let currentEdge = EDGES.TLE;


    for (let a = nSquare; a > 0; a--) {
        matrix[i][j] = a;

        if (j === min && i === min) {
            currentEdge = EDGES.TLE;
        } else if (j === max && i === min) {
            currentEdge = EDGES.TRE;
        } else if (j === max && i === max) {
            currentEdge = EDGES.BRE;
        } else if (j === min && i === max) {
            currentEdge = EDGES.BLE;
        } else if (j === min && (i - 1) === min) {
            min++;
            max--;
            currentEdge = EDGES.TLE;
        }

        switch(currentEdge) {
            case EDGES.TLE:
                right();
                break;
            case EDGES.TRE:
                bottom();
                break;
            case EDGES.BRE:
                left();
                break;
            case EDGES.BLE:
                top();
        }

    }

    return matrix;



    function left() {
        j--;
    }
    
    function right() {
        j++;
    }
    
    function top() {
        i--;
    }
    
    function bottom() {
        i++;
    }
}



function createScheme(n) {
    const scheme = [];

    for(let i = 0; i < n; i++) {
        scheme.push([]);
    }

    return scheme;
}