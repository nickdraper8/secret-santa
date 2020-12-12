# Secret Santa Generator
Secret Santa Generator is a simple and easy application that lets users create anonymous gift giver and gift reciever pairs by SMS.

## About
Have you ever been annoyed with other online secret santa generators that make you login, signup, do this and that when all you want is something that will handle some simple logic and keep things anonymous? Look no further! This Secret Santa Generator takes all the unessesary bs away from something that should really be very simple. Here is how it works.
<br></br>
First, you are shown a page where you can view the directions if you aren't familiar with the app, or head straight into adding participants onto your event.
<br></br>
<img align='center' src='./firstpage.gif' alt='firstpage' />
<br></br>
Once finished, head to the review page where you can review the information you entered, and if the creator wants, they can view the pairings the app generated. If the creator is involved in the secret santa event and wants to keep it anonymous, just click the finish button and send out the SMS messages!
<br></br>
<img align='center' src='./second-page.gif' alt='secondpage' />
<br></br>
Each participant will recieve a message briefly letting them know who their gift recipient is. No further emails, text messages, or anything will bother anyone. That's it, it's that simple!
<br></br>
<img align='center' height="600px" src='./phonegif.gif' alt='phonegif' />
<br></br>

## Code Snippets
### Creating the gift giver - gift reciever relationships
In order to create a randomized set of relationships for each of the participants, I decided creating a structure similar to a looped singly-linked list. First, however, I would need to randomize the list of participants. To do this, I used the <a href="https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm">Durstenfeld shuffle</a>, an optimized version of the Fisher-Yates arra shuffle algorithm. 
```Javascript
// src/util/array_utility.js
export function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
};
```
Next, I iterate through the suffled array, assigning the current participant the next participant in the list. Once I reach the last the participant, I assign them the first participant in the list. Here is a diagram of what the array looks like and how it works, as well as the code that generates it.
<br></br>
<img align='center' height="600px" src='./Screen Shot 2020-12-12 at 4.12.25 PM.png' alt='phonegif' />
<br></br>
```Javascript
// src/util/array_utility.js
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
```
