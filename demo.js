function generateIcebreaker() {
    const questions = [
      " Kayla",
      " Victor",
      " Dante",
      " Rene",
      " Kaaliyah",
      " Niran",
      " Brett",


    ];
  
    // Randomly select a question
    const index = Math.floor(Math.random() * questions.length);
  
    document.getElementById("displayQuestion").innerHTML = "Hi" + questions[index];
    // return questions[index];
  }
  
  // Example usage:
  let thequestion = generateIcebreaker();