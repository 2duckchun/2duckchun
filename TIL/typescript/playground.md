```ts
// last
type Last = <T>(arr: T[]) => T
const last:Last = (arr) => {
    return arr[arr.length - 1]
}

// prepend
type Prepend = <T>(arr: T[], item: T) => T[]
const prepend:Prepend = (arr, item) => {
    arr.unshift(item)
    return arr
}

// mix
type Mix = <T>(arr1: T[], arr2: T[]) => T[]
const mix:Mix = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

// count
type Count = <T>(arr:T[]) => number
const count:Count = (arr) => {
    return arr.length
}

// findIndex
type FindIndex = <T>(arr: T[], item: T) => number | null
const findIndex: FindIndex = (arr, item) => {
    const index = arr.findIndex((element) => element === item)
    return index === -1 ? null : index
}

// slice
type Slice = <T>(arr:T[], startIndex:number, endIndex?:number) => T[]
const slice:Slice = (arr, startIndex, endIndex) => {
    if (endIndex) {
        return arr.slice(startIndex, endIndex)
    }
    return arr.slice(startIndex)
}
```