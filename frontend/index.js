async function sprintChallenge5() {
  
 

  
  const combinedData = learners.map(learner => {
    return {
      ...learner,
      mentorDetails: learner.mentors.map(mentorId => 
        mentors.find(mentor => mentor.id === mentorId))
    };
  });

  
  const learnersContainer = document.querySelector('.learners-container'); 
  combinedData.forEach(learner => {
    const learnerElement = document.createElement('div');
    learnerElement.textContent = `${learner.fullName} (${learner.email})`;
    
  
    learnerElement.addEventListener('click', () => {
    
    });


    learnersContainer.appendChild(learnerElement);
  });
}


sprintChallenge5();
