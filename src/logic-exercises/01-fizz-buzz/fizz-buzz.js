
/*
 * Write a program that prints to the console (using print)
 * the numbers from 1 to 100 (inclusive and with a line break between
 * each output), replacing the following:
 * - Multiples of 3 with the word "fizz".
 * - Multiples of 5 with the word "buzz".
 * - Multiples of both 3 and 5 with the word "fizzbuzz".
 */

const fizzbuzz = () => {

	for(let i=0; i <= 100;i++){

		if (i % 3 === 0 && i % 5 === 0){
			console.log(`${i} fizzbuzz`)
		}else if(i % 3 === 0){
			console.log(`${i} fizz`)
		}else if (i % 5 === 0){
			console.log(`${i} buzz`)
		}else {
			console.log(`${i}`)
		}

	}

}

fizzbuzz();