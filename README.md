## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
1) Radio buttons for RPS
    -Figure out what user threw
2) 3 Divs for results
    -Why? Inject feedback for user
3) Buttin to submit
    -Run application logic on click
## Initialize State
Total: 0
Wins: 0
Actual RPS thrown: 'rock' | 'paper' | 'scissors'
## Events
1) On button click (or on click of radio button)
    -Throw RPS to get actual answer
        -Change the 'actual answer' state
    -Get the user's choice from the radio button
    -Compare the user choice and the actual flip
    -Update state
        -Update wins
        -Update total
    -Present results based on state