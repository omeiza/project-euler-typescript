/**
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be. 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 * find the sum of the even-valued terms
 * Reference: https://projecteuler.net/problem=2
 */

function fibAddEven(limit: number, start?: number[]): number {
	let fibItems: number[] = [];
	fibItems = start && start.length > 0 ? fibItems.concat(start) : fibItems.concat([1,2]);
	let total = fibItems.reduce((preSum, fibItem) => fibItem % 2 === 0
		? preSum + fibItem
		: preSum, 0);

	for (let i = 0; i < limit; i++) {
		let former = fibItems[fibItems.length - 2];
		let later = fibItems[fibItems.length - 1];

		if (fibItems.length === 1) former = later;

		// Check if last two items add up to exceed limit
		if ((former + later) > limit) break;

		let nextFibItem = former + later
		fibItems.push(nextFibItem);

		// Check if the nextFibItem is an even number and add to total
		if (nextFibItem % 2 === 0) total = total + (nextFibItem);
	}

	return total;
}

// Call function with 4 million
console.log(fibAddEven(4000000, [3, 5]));

