let hello = "   Hello, World!  ";
let wsRegex = /\S(\w+).\s(\w+).\S/; // Altere esta linha
let result = hello.match(wsRegex)[0]; // Altere esta linha