const fs = require('fs');

// // Create a file and write some text to it
// fs.writeFile('example.txt', "This is an example text file.", (err)=>{
//   if(err) {
//     console.log("Error writing file: ", err);
//   } else {
//     console.log("OK: File created ");
//     // Read back the file contents
//     fs.readFile('example.txt', 'utf8', (err, file)=>{
//       if(err) {
//         console.log("Error reading file: ", err);
//       } else {
//         console.log(file);
//         // Note: If file encoding 'utf8' is omitted, console.log(file) will print:
//         // <Buffer 54 68 69 73 20 69 73 20 61 6e 20 65 78 61 6d 70 6c 65 20 74 65 78 74 20 66 69 6c 65 2e>
//         // i.e. buffer of ascii codes.
//       }
//     })
//   }
// });

// // Rename a file
// fs.rename('example.txt', 'example2.txt', (err)=>{
//   if(err) {
//     console.log("Error renaming file: ", err);
//   } else {
//     console.log('File renamed');
//   }
// });

// // Append data to a file
// fs.appendFile('example.txt', 'Some more data being appended.', (err)=>{
//   if(err) {
//     console.log("Error appending data to file: ", err);
//   } else {
//     console.log("Data appended to text file");
//   }
// });

// Delete file
fs.unlink('example.txt', (err)=> {
  if(err) {
    console.log("Error deleting file: ", err);
  } else {
    console.log("File deleted");
  }
});