//problem 1//
function duplicate(emails) {
    let left = 0;
    for (let i = 0; i < emails.length; i++) {
        if (emails[i] !== emails[left]) {
            left++;
            emails[left] = emails[i]
        }
    }
    return emails.splice(0, left + 1)
}
let emails = ["ali@gmail.com", "ali@gmail.com", "sara@gmail.com", "sara@gmail.com", "zayn@gmail.com"]
console.log(duplicate(emails));

//problem 2//

function musicApp(songs, targetDuration) {
    songs.sort((a, b) => a - b);
    let left = 0;
    let right = songs.length - 1;
    while (left < right) {
        let sum = songs[left] + songs[right];
        if (sum === targetDuration) {
            return [songs[left], songs[right]];
        } else if (sum < targetDuration) {
            left++;
        } else {
            right--;
        }
    }
    return null;
}
let songs = [3, 5, 8, 2, 7, 4]
targetDuration = 10

console.log(musicApp(songs, targetDuration));