check-english
A simple npm module to determine if a string contains English words, based on a list of 10,000 common English words. This tool is designed for basic language detection and works well in most cases, especially with longer texts.
Installation
Install the package using npm:
npm install check-english

Note: Requires Node.js version 14 or higher due to ES module support.
Usage
Import the isEnglish function and check if a string contains English words:
import { isEnglish } from 'check-english';

console.log(isEnglish('Hello world')); // true
console.log(isEnglish('Hola mundo')); // false

Function Signature
isEnglish(text: string): boolean


text: The string to analyze.

Accuracy
This module is not 100% accurate but should be reliable for most pieces of text, particularly when longer. It uses a fixed list of 10,000 common English words, so:

It excels with longer texts where multiple English words can confirm the language.
Short texts or uncommon English words may reduce accuracy.

Contributing
Feel free to contribute or report issues at the GitHub repository.
License
Licensed under the MIT License.