import { englishWordArray } from './words.js';

// Initialize Set once when module loads for O(1) lookups
const englishWords = new Set(englishWordArray);

/**
 * Determines if the provided text is English based on word recognition and a threshold
 * 
 * @param {string} text - The text to analyze for English language content
 * @param {number} threshold - The minimum percentage (0.0-1.0) of recognized English words required
 * @returns {boolean} True if the percentage of English words meets or exceeds the threshold, false otherwise
 * 
 * @description
 * This function works by:
 * 1. Converting the text to lowercase
 * 2. Extracting words (letters and apostrophes only)
 * 3. Checking each word against a predefined English dictionary
 * 4. Calculating the percentage of recognized words
 * 
 * @example
 * // Returns true if at least 80% of words are recognized English words
 * isEnglish("Hello world, this is a test.", 0.8);
 * 
 * @note Returns false for empty texts or texts containing no valid words
 */
export function isEnglish(text, threshold) {
    // Convert to lowercase for case-insensitive matching
    const lowerText = text.toLowerCase();

    // Extract words: letters and apostrophes only, return empty array if no matches
    const words = lowerText.match(/[a-z']+/g) || [];

    // Handle edge case: no words found
    if (words.length === 0) {
        return false;
    }

    // Count English words
    let englishCount = 0;
    for (const word of words) {
        if (englishWords.has(word)) {
            englishCount++;
        }
    }

    // Calculate percentage and compare to threshold
    const percentage = englishCount / words.length;
    return percentage >= threshold;
}