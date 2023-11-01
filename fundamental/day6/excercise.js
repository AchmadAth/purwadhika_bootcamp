// Create a function to calculate array of student data
// ● The object has this following properties :
    // ○ Name → String
    // ○ Email → String
    // ○ Age → Date
    // ○ Score → Number
// ● Parameters : array of student
// ● Return values :
    // ○ Object with this following properties :
// ■ Score
    // ● Highest
    // ● Lowest
    // ● Average
// ■ Age
    // ● Highest
    // ● Lowest
    // ● Average

function calculateStudentData(students) {
    let highestScore = 0;
    let lowestScore = 100;
    let totalScore = 0;
    let highestAge = 0;
    let lowestAge = 100;
    let totalAge = 0;
    
    students.forEach(student => {
        const score = student.Score;
        const age = student.Age;
        totalScore += score;
        totalAge += age;
    
        if (score > highestScore) {
        highestScore = score;
        }
    
        if (score < lowestScore) {
        lowestScore = score;
        }
    
        if (age > highestAge) {
        highestAge = age;
        }
    
        if (age < lowestAge) {
        lowestAge = age;
        }
    });
    
    const averageScore = totalScore / students.length;
    const averageAge = totalAge / students.length;
    
    return {
        Score: {
        Highest: highestScore,
        Lowest: lowestScore,
        Average: averageScore
        },
        Age: {
        Highest: highestAge,
        Lowest: lowestAge,
        Average: averageAge
        }
    };
    }


const students = [
    { Name: "Spongebob", Email: "spongebob@crustycrab.com", Age: 25, Score: 90 },
    { Name: "Patrick", Email: "patric@crustycrab.com", Age: 22, Score: 85 },
    { Name: "Squidword", Email: "squid@crustycrab.com", Age: 27, Score: 95 }
  ];
  
  const result = calculateStudentData(students);
  console.log(result);