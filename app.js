let friends = ['nathan', 'cole', 'ross', 'kile', 'parker']
for (let i = 0; i < friends.length; i++) {
    for (let index = 99; index > 0; index--) {
        let bars = ( index +  ' lines of code in the file, ' + index + ' lines of code; ' + friends[index] + ' strikes one out, clears it all out, ' + index + ' lines of code in the file')
        console.log(bars)

        if (index > 0) {
            let lines = ( i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (i - 1) + ' lines of code in the file')
            console.log(lines)
        }
    }
}