func numbers()
{
  num1: sys.input(dcml("first number: "))
  num2: sys.input(dcml("second number: "))
}
func calc() // Run function "calc"
sys.use(func.numbers())
{
  ask: sys.input("What operator: ") // Request user input     
    if ask == "+" 
    {          
      sys.log(num1 + num2) // Like console.log()  
    }    
    elsif ask == "-"
    {          
      sys.log(num1 - num2) 
    }  
    elsif ask == "*"
    {
      sys.log(num1 * num2)
    }
    elsif ask == "/"
    {
    sys.log(num1 / num2)
    }
  end // End the if statement 
}
sys.start()
start.name("My Program") // Initialize Program
{
sys.log(sys.name) // "My Program" // sys.name is the name of the program
func.math() // run the math function  
sys.stop() // halt the program
}
