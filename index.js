import Tree from './tree'

const unsortedArray = [7, 4, 12, 13, 5, 2, 81, 12, 6, 3, 8, 11, 11]

let tree = new Tree()

tree.insert(unsortedArray)

tree.flatten()

tree.sort()