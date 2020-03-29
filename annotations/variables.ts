let apples: number = 5
let speed: string = "fast"
let hasName: boolean = true
let nothingMuch: null = null
let nothing: undefined = undefined

let now: Date = new Date()

let colors: string[] = ["red", "yellow", "green"]
let myNumbers: number[] = [1, 2, 3]

class Car {}
const car: Car = new Car()

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)

// 2) When we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"]
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true
  }
}
