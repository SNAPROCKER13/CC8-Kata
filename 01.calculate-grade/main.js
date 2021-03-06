/**
 * @param { number } score
 * @returns { 'Unsatisfactory' | 'Satisfactory' | 'Hournor' }
 */
function calculateGrade(score) {
  if (score < 60) {
    return "Unsatisfactory";
  }
  else if (score >= 60 && score <= 75) {
    return "Satisfactory";
  }
  else {
    return "Hournor";
  }
}

module.exports = calculateGrade
