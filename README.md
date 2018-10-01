# REPLANG EXAMPLE PROGRAM
```js 
func math() // Run function "math"    
{ 
  ques: sys.input("What is 1+1?") // Request user input     
  if ques == "2" 
  {          
    sys.log("Correct!") // Like console.log()  
  }    
  else 
  {          
    sys.log("Incorrect!") 
  }  
  end // End the if statement 
} 
sys.start()
start.name("My Program") // Initialize Program
{
sys.log(sys.name.add"\n") // "My Program" // sys.name is the name of the program
sys.load(func.math())
sys.stop() // halt the program
}
```
