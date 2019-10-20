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
};

let result = [];

function wideTree(tree) {
    let queue = [tree];
    for (let j = 0; j < queue.length; j) {
        console.log(queue);
        result.push(queue[j].val);
        queue.push(...queue[j].ch);
        queue.shift();
    }
}