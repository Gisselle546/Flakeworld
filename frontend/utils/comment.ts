 export function createTree(list:any) {
    var map:any = {},
      node,
      roots = [],
      i
  
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i // initialize the map
      list[i].children = [] // initialize the children
    }
  
    for (i = 0; i < list.length; i += 1) {
      node = list[i]
      if (node.parent) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parent]].children.push(node)
      } else {
        roots.push(node)
      }
    }
    return roots
  }
  