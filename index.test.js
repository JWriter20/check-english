import { isEnglish } from './index.js';
import { englishWordArray } from './words.js';

describe('isEnglish function', () => {
    const englishWord = englishWordArray[0]; // Use the first word from the English word list
    const nonEnglishWord = 'xyz'; // Assume 'xyz' is not in the word list

    test('returns true for text with all English words', () => {
        expect(isEnglish(`${englishWord} ${englishWord}`, 1.0)).toBe(true);
    });

    test('returns false for text with no English words', () => {
        expect(isEnglish(`${nonEnglishWord} ${nonEnglishWord}`, 0.1)).toBe(false);
    });

    test('returns true when English words meet the threshold', () => {
        expect(isEnglish(`${englishWord} ${nonEnglishWord}`, 0.5)).toBe(true);
    });

    test('returns false when English words do not meet the threshold', () => {
        expect(isEnglish(`${nonEnglishWord} ${nonEnglishWord}`, 0.5)).toBe(false);
    });

    test('returns false for empty text', () => {
        expect(isEnglish('', 0.5)).toBe(false);
    });

    test('returns false for text with no valid words', () => {
        expect(isEnglish('123 456', 0.5)).toBe(false);
    });

    test('is case insensitive', () => {
        expect(isEnglish(englishWord.toUpperCase(), 1.0)).toBe(true);
    });

    test('returns true when threshold is 0', () => {
        expect(isEnglish('any text', 0)).toBe(true);
    });

    test('returns false when threshold is 1 and not all words are English', () => {
        expect(isEnglish(`${englishWord} ${nonEnglishWord}`, 1.0)).toBe(false);
    });

    test('handles multiple spaces and punctuation', () => {
        expect(isEnglish(`${englishWord}   ${englishWord}!`, 1.0)).toBe(true);
    });
});