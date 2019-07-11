const fs = require('fs');
const readline = require('readline');  

// load file
const readInterface = readline.createInterface({  
    input: fs.createReadStream('list.md')
});

// Create html file
fs.writeFile('list.html', "", (err) => {
    // throws an error
    if (err) throw err;
  });

// Iterate through list and write html links
readInterface.on('line', function(line) {  
    // console.log(line.slice(0,5));
    if (line.slice(0,4) == "http" && line.slice(-1) != "N") {
        // console.log(line)
        let url = line.replace(/ /g, '')
        let link = `<a href="${url}">${url}</a><br>`
        fs.appendFileSync('list.html', `${link}\n`); 
    }
});
