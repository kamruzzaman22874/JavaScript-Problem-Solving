const names = ['hasan', 'rony', 'toni', 'jony', 'rony', 'noyon', 'rony', 'jony'];

function removeDuplicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
			unique.push(name);
		}
    }
    return unique;
}
const uniqueName = removeDuplicate(names)
console.log(uniqueName);


