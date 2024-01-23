const quizData = [
  {
    id: 1,
    question: "Doing a job right is more important than making people happy.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 2,
    question:
      "I believe that listening to others' opinions can sometimes lead to better decisions than relying on my own judgment.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 3,
    question:
      "At times, I have so many thoughts I can't decide which one to choose.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  // {
  //   id: 4,
  //   question:
  //     "Given the choice, I'd rather try my luck with a lottery than play a card game.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 5,
  //   question:
  //     "A lot of the difficult times for people have come from bad luck.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 6,
  //   question: "I can relax easily when I'm on vacation.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 7,
  //   question: "I don't enjoy doing things that are new or different.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 8,
  //   question: "I don't enjoy unexpected changes in my life.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 9,
  //   question: "I choose harder goals for myself rather than easier ones.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 10,
  //   question: "Hard work makes you successful, not luck.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 11,
  //   question:
  //     "I don't mind doing the same easy tasks every day if I am paid well.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 12,
  //   question:
  //     "I enjoy doing things how I like, not caring much about others' opinions.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  {
    id: 13,
    question: "I don't like to make guesses.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 14,
    question: "I enjoy beginning new projects even if they are risky.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 15,
    question: "I achieve what I want in life by working hard for it.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  // {
  //   id: 16,
  //   question:
  //     "I focus more on the now and before, not so much on what's to come.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 17,
  //   question: "I enjoy exploring new and unconventional ways of doing things.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 18,
  //   question:
  //     "I enjoy having an organized life that goes according to my plans.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 19,
  //   question: "I have a hard time asking others for help.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 20,
  //   question:
  //     "I think that other people mostly decide what happens in my life.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 21,
  //   question: "I get upset when people are late.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 22,
  //   question: "I follow rules and do what people expect of me.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 23,
  //   question:
  //     "I enjoy learning new things, even if it means facing some troubles along the way.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 24,
  //   question:
  //     "I like to know all the details before I make up my mind, no matter how much time it takes.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  {
    id: 25,
    question: "I usually stick to my plans when I decide to do something.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 26,
    question:
      "I often stand up for my beliefs when others don't agree with me.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 27,
    question:
      "I often find that I achieve more when I work with others than alone.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  // {
  //   id: 28,
  //   question:
  //     "I find it more difficult to adjust to changes than to stick to a routine.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 29,
  //   question:
  //     "I would choose a stable job with an okay income over a job I could lose if I don't do well.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 30,
  //   question:
  //     "If a skilled person doesn't succeed, it's often because they didn't take available risks.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 31,
  //   question:
  //     "I prefer tasks that test my limits over things I can do without effort.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 32,
  //   question:
  //     "I stand firm on my decisions, even when faced with strong opposition from my peers.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 33,
  //   question:
  //     "I like doing things the way I'm used to instead of trying new methods.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 34,
  //   question:
  //     "I would choose an opportunity that could lead to great things over an experience that I know I'll like.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 35,
  //   question:
  //     "If I make the people in charge happy, I'll get what I want in life.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 36,
  //   question:
  //     "I prefer to work in a team on tasks rather than being solely responsible for them.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  {
    id: 37,
    question: "I usually don't need or want help with a task.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 38,
    question:
      "I like to be fairly good at many things instead of excellent at just one.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 39,
    question:
      "I'm willing to take chances if there's a fair possibility of success.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  // {
  //   id: 40,
  //   question: "In my view, achieving what I want doesn't depend much on luck.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 41,
  //   question:
  //     "I prefer working with someone I like even if they're not great at the job, rather than someone I don't like who is great at the job.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 42,
  //   question:
  //     "I would rather avoid leadership roles and let others make decisions.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 43,
  //   question: "I'm good at managing many things at once.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 44,
  //   question:
  //     "If I have a plan to earn money, I'm okay with borrowing money to make it happen.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 45,
  //   question: "People usually don't fail because they make bad decisions.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 46,
  //   question:
  //     "I'll wake up early, stay late, or miss meals to finish important tasks.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 47,
  //   question: "In a group, I'm content to let another person be in charge.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 48,
  //   question: "I seldom get lost in my thoughts or fantasies.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  {
    id: 49,
    question: "If I might fail, I prefer not to try.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  {
    id: 50,
    question:
      "To be successful, you have to be in the right place at the right time.",
    options: ["agree", "disagree"],
    correctAnswer: "agree",
  },
  {
    id: 51,
    question:
      "If a task is giving me trouble, I leave it and do something else.",
    options: ["agree", "disagree"],
    correctAnswer: "disagree",
  },
  // {
  //   id: 52,
  //   question:
  //     "It's important for me to follow my own path and not just do what everyone else is doing.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 53,
  //   question: "Others think I ask many questions.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 54,
  //   question:
  //     "Usually, the things we know well are better than the things we don't.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 55,
  //   question: "Usually, people receive what they should.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
  // {
  //   id: 56,
  //   question:
  //     "When I face a challenge, I focus more on the success I could achieve than on the possibility of failure.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 57,
  //   question: "Many people consider me to be stubborn.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 58,
  //   question: "Sometimes my ideas are strange to others.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 59,
  //   question:
  //     "When making big decisions, I quickly look at the good and bad points instead of thinking about it for a long time.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "agree",
  // },
  // {
  //   id: 60,
  //   question:
  //     "You're either born with a talent or you're not; trying hard doesn't change that.",
  //   options: ["agree", "disagree"],
  //   correctAnswer: "disagree",
  // },
];

export default quizData;
