export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};

export function makeAssignments(array) {
    let assignments = [];
    for (let i = 0; i < array.length; i++) {
        if (i === array.length-1) {
            assignments.push([array[i], array[0]])
        } else {
            assignments.push([array[i], array[i+1]])
        }
    }
    return assignments
}