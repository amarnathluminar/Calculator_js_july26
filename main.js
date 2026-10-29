// display all numbers in calculator screen

const displayCalcNumberScreen = (content) => {
    result.value += content
}

// all clear

const clearAllInCalcScreen = () => {
    result.value = ""
}

// delete one value

const deleteLastDigitInCalc = () => {
   result.value =  result.value.slice(0,-1)
}

// evaluate

const evaluateValuesInCalcScreen = () =>{
  try{
     result.value = eval (result.value)
  }catch{
    result.value = "Invalid Expression"
  }
}


