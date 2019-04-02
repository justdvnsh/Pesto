let add = n => {
	let sum = 0;
	for( let i = 0; i <= n; i++ ) {
		sum += i
	}
	return sum;
}

console.time('Time Elapsed')
add(1000000000)
console.timeEnd('Time Elapsed')

// Different method

let addUpTo = n => n * ( n + 1 ) / 2

console.time('Time Elapsed addUpTo')
addUpTo(1000000000)
console.timeEnd('Time Elapsed addUpTo')


