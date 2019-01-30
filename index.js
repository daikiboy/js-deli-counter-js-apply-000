function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(`${name}`)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if( i < katDeliLine.length) {
    return "There is nobody waiting to be served!" 
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}
