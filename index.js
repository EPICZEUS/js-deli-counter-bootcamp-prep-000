function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return line.shift();
  }
}

function currentLine(line) {
  let out = "The line is currently";
  if (line.length === 0) {
    out += " empty.";
  }
  
}