let subjects = ['Python', 'C++', 'VB.Net','Javascript', 'Assembly']
let last = subjects.pop()
console.log(last);
subjects.push(last)
let mid = Math.floor(subjects.length/2)

let result= (subjects.length%2)==0 ? console.log( subjects[mid-1]+' '+subjects[mid]) : console.log(subjects[mid])
