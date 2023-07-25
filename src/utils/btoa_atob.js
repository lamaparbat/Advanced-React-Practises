// *********** btoa() and atob() *****************

// The btoa() method creates a Base64-encoded ASCII string from a binary string
// (i.e., a string in which each character in the string is treated as
// a byte of binary data).

const intro = "I am parbat lama";

// encoding
const encodedString = btoa(intro);
console.log("encodedString", encodedString);

// decoding
const decodedVal = atob(encodedString);
console.log("decodedVal", decodedVal);

// The btoa() and atob() functions in JavaScript are used for Base64 encoding and decoding,
// respectively. Base64 encoding is a way to represent binary data (like images or other
// non-textual data) using only printable ASCII characters. These functions are commonly used in
// various real-world scenarios, some of which are:

// For larger binary files, consider using more efficient methods, such as Blob or ArrayBuffer, especially when working with file uploads or downloads.

// *********** blob() and ArrayBuffer() *****************
const data = new blob([_Array], _configObject);

// where _Array can be
// - array of string
// - array of array of string
// - array of buffer
// - array of array of buffer

// where _config can byte
// - {type : "application/pdf" || "application/octet-stream" || "text/csv"}

// Example 1: Creating a Blob from an Array of Data
const data = ["Hello, ", "this is ", "a Blob."];
const options = { type: "text/plain" };
const blob = new Blob(data, options);

// Example 2: Creating a Blob from Binary Data
const binaryData = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // 'Hello' in binary
const options = { type: "application/octet-stream" };
const blob = new Blob([binaryData], options);

// Example: Creating a Downloadable File from Blob
const textData = "Hello, this is a text file.";
const options = { type: "text/plain" };
const blob = new Blob([textData], options);

const downloadLink = document.createElement("a");
downloadLink.href = URL.createObjectURL(blob);
downloadLink.download = "example.txt";
downloadLink.click();
