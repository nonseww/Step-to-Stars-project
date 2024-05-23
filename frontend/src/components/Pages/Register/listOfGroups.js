const listOfGroups = []; 

for (let i = 1; i < 5; ++i) {
    for (let j = 1; j < 9; ++j) {
        listOfGroups.push(String(i) + String(j) + "1"); 
    }
}

exports.listOfGroups = listOfGroups; 