const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] }
            ]
        }
    ]
}

printChildrenRecursive = (tree, memo = {}) => {
    if(tree.children.length === 0){
        return
    }
    tree.children.forEach(children => {
        if (!memo[children.name]) {
            console.log(children.name)
            memo[children.name] = true;
            console.log(memo)
            printChildrenRecursive(children)
        }
    })
}
printChildrenRecursive(tree);
