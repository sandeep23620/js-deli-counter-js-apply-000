var katzDeliLine = [] ;

function takeANumber (katzDeliLine, name) {
  var position = katzDeliLine.length+1
  katzDeliLine.push(name)
  return "Welcome,  " + name + ". You are number " + position + " in line."
  
}

function nowServing (katzDeliLine){
  var name ;
  
  if (katzDeliLine === 0){
    return "There is nobody waiting to be served!"
  }
}