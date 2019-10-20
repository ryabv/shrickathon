const tree = {
    val: 1,
    ch: [
        {
            val: 2,
            ch: [
                {
                    val: 4,
                    ch: []
                },
                {
                    val: 5,
                    ch: []
                }
            ]
        },
        {
            val: 3,
            ch: [
                {
                    val: 6,
                    ch: []
                },
                {
                    val: 7,
                    ch: []
                },
                {
                    val: 8,
                    ch: []
                }
            ]
        }
    ]
}

let result = [];

function deepTree(tree) {
    result.push(tree.val);
    if (tree.ch.length) {
        for (let i = 0; i < tree.ch.length; i++) {
            deepTree(tree.ch[i]);
        }
    }
}