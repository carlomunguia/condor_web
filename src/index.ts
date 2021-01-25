import { User } from './models/User'

const user = new User({})

user.set({ name: 'flower-0', age: 20 })

console.log(user.get('name'))
console.log(user.get('age'))

