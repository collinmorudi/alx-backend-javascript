// Define the MajorCredits interface
interface MajorCredits {
    credits: number;
    brand: 'Major';
}

// Define the MinorCredits interface
interface MinorCredits {
    credits: number;
    brand: 'Minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Major' // Retain the brand property
    };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'Minor' // Retain the brand property
    };
}

// Example usage
const math: MajorCredits = { credits: 3, brand: 'Major' };
const science: MajorCredits = { credits: 4, brand: 'Major' };
const totalMajorCredits = sumMajorCredits(math, science);
console.log(totalMajorCredits); // Output: { credits: 7, brand: 'Major' }

const history: MinorCredits = { credits: 2, brand: 'Minor' };
const art: MinorCredits = { credits: 1, brand: 'Minor' };
const totalMinorCredits = sumMinorCredits(history, art);
console.log(totalMinorCredits); // Output: { credits: 3, brand: 'Minor' }
