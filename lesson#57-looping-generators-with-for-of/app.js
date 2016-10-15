  function* lyrics() {
    yield `But don't tell my heart`;
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
  }

  for(const line of lyrics()) {
  	console.log(line);
  }