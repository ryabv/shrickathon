function singlyLinkedList(arr) {
    const list = setList(arr);
    const deployedList = deployList(list);

    return deployedList.reverse();
}

function deployList(obj) {
    const list = [];

    return function deploy(obj) {
        list.push(obj.data);
        if (obj.prev) {
            deploy(obj.prev);
        }
        return list;
    }(obj);
}

function setList(arr) {
    const list = [];
    for (let i = 0; i < arr.length; i++) {
        list.push({prev: list[i - 1] || null, data: arr[i]});
    }
    return list[list.length - 1];
}