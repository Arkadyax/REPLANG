# REPLANG EXAMPLE PROGRAM
```js
sys.begin("My Program") // Initialize Program  
func math() { // Run function "math"     
  ques: sys.input("What is 1+1?") // Request user input     
  if ques == "2" {          
    sys.log("Correct!") // Like console.log()  }     
  else {          
    sys.log("Incorrect!") }  
  end // End the if statement     
sys.log(sys.name) // "My Program" // sys.name is the name of the program } 
func.math() // run the math function  
sys.exit() // halt the program
```
