for (let i = 0; i < keys.length; i++) {
  const line = text_dict[i]; // {0 : {"p": "Hello World"} }

  // Extract keys fron inner dictionary
  const tag = Object.keys(line)[0] // ["p"] extracted to "p"
  const text = Object.values(line)[0] //
