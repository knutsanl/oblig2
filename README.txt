Oblig 2 Read me
The form to sign up and forgot password will have a clickable route under the login.
I have used vanilla html form validation for most of the form, 
but on the signup i used a stateful component to store the passwords 
and create a method to compare them. To check wether a user is authorized i used the
utilz function in app.js and moved the state to the navbar where it checks for loading
what the user should have access to based on if it's authorized or not through props.isAuth

Other than this login and forgot email is stateless.

Not quite sure on how you wanted the style to be, but in general i tried to keep it similar
as in keeping it somewhat similar in curved fields/buttons.


