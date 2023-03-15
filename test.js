const parseSentence = (sentence) => {
    const sentenceToString = sentence.toString();
    // regex that help us to know the words
    const pattern = /\b\w+\b/g;
    // separate the sentencie in characters
    const parts = sentenceToString.split(pattern);
    // words, array of words using the regex
    const words = sentenceToString.match(pattern);
    console.log(words)
    // the list in order to save the words
    const processedWords = [];
   
    words.forEach((word) => {
      
      const firstLetter = word[0];
     
      const lastLetter = word[word.length - 1];
      
      const middleLettersCount = new Set(word.slice(1, -1)).size;
      
      const processedWord = `${firstLetter}${middleLettersCount}${lastLetter}`;
      
      processedWords.push(processedWord);
    });
   
    
    const processedSentence = [];
   
    for (let i = 0; i < parts.length; i++) {
        processedSentence.push(parts[i]);
        processedSentence.push(processedWords.shift());
    }
    
    return processedSentence.join("");
  }
  
  const processedSentence = parseSentence("juan se la come torcida");
 
 
  process.stdin.on('data', data => {
    const processedSentence = parseSentence(data);
    console.log(processedSentence);
    process.exit();
  });