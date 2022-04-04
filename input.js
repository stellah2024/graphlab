let input = `0 0 1
5 3 7
1 8 4`;
let adj = input.split('\n')
for(let i = 0; i < adj.length; i++){
    adj[i] = adj[i].split("")
}
console.log(adj)