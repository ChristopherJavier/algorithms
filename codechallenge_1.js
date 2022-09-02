const numbers = [3,3,5,1,4,5,3,1,8,6,6,4]

const numberFrequency = (x) => {
	const sortedArray = x.sort()
	let noRepeated = []
  let repeatedTimes = []
  let counter = 1
  
	for(i = 0; i < sortedArray.length; i++) {
    if (x[i+1] === x[i]) {
      counter++
    }else {
      noRepeated.push(x[i])
      repeatedTimes.push(counter)
      counter = 1;
    }
  }
  
  for(i = 0; i < noRepeated.length; i++){
    console.log(`${noRepeated[i]} is repeated ${repeatedTimes[i]}`)
  }
}

numberFrequency(numbers)