async function sprintChallenge5() {
  // This function is used to fetch data from the API and render it to the DOM.
const learnersContainer = document.querySelector('.learners-container');
if (learnersContainer) {
  combinedData.forEach(learner => {
    const learnerElement = document.createElement('div');
    learnerElement.textContent = `${learner.fullName} (${learner.email})`;

    learnerElement.addEventListener('click', () => {
      // Do something when a learner is clicked
    });

    learnersContainer.appendChild(learnerElement);
  });
}
 // 1. Fetch data from the API
const response1 = await axios.get('http://localhost:3003/api/learners');
const learners = response1.data;

const response2 = await axios.get('http://localhost:3003/api/mentors');
const mentors = response2.data;

// 2. Combine data obtained from different sources into a single data structure
const combinedData = learners.map(learner => {
  return {
    ...learner,
    mentorDetails: learner.mentors.map(mentorId =>
      mentors.find(mentor => mentor.id === mentorId))
  };
});

// 3. Render repeatable components to the DOM using the combined data
const learnerContainer = document.querySelector('.learners-container');
combinedData.forEach(learner => {
  const learnerElement = document.createElement('div');
  learnerElement.textContent = `${learner.fullName} (${learner.email})`;

  learnerElement.addEventListener('click', () => {
    // Do something when a learner is clicked
  });

  learnerContainer.appendChild(learnerElement);
});
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
