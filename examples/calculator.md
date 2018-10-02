```js
func numbers() // Run Function "numbers"
{
  num1 = sys.input(dcml("first number: ")) // request math input (dcml = decimal)
  num2 = sys.input(dcml("second number: "))
}
func calc() // Run function "calc"
sys.use(func.numbers())
{
  ask = sys.input("What operator: ") // Request user input     
    if ask == "+" 
    {          
      sys.log(num1 + num2) // Like console.log()  
    }    
    else if ask == "-"
    {          
      sys.log(num1 - num2) 
    }  
    else if ask == "*"
    {
      sys.log(num1 * num2)
    }
    else if ask == "/"
    {
      sys.log(num1 / num2)
    }
  end // End the if statement 
}
sys.start()
start.name("My Program") // Initialize Program
{
sys.log(sys.name) // "My Program" // sys.name is the name of the program
func.calc() // run the math function  
sys.stop() // halt the program
}
```
