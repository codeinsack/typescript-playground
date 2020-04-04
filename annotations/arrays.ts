const carMakers: string[] = ['ford', 'toyota', 'audi']
const carByMake: string[][] = []

// Help with inference when extracting values
const car = carMakers[0]

// Prevent incompatible values
carMakers.push('MBW')

// Help with map
carMakers.map((car: string): string => {
  return car
})

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2010-09-01')
importantDates.push(new Date())
