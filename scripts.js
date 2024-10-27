function uniqueElements(A1, A2) {
    const uniqueFromA1 = A1.filter(item => !A2.includes(item));
    const uniqueFromA2 = A2.filter(item => !A1.includes(item));
    return [...uniqueFromA1, ...uniqueFromA2];
}

const A1 = [1, 2, "a"];
const A2 = [1, 3, "b"];
const result = uniqueElements(A1, A2);

console.log(result);  // Output: [2, "a", 3, "b"]