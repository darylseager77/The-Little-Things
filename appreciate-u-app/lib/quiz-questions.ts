export type AppreciationLanguage = 'quality_time' | 'recognition' | 'support' | 'rewards' | 'inclusion'

export interface QuizQuestion {
  id: number
  scenario: string
  optionA: {
    text: string
    language: AppreciationLanguage
  }
  optionB: {
    text: string
    language: AppreciationLanguage
  }
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    scenario: "After delivering a challenging project:",
    optionA: {
      text: "Your manager schedules a 1-on-1 to debrief and hear your thoughts",
      language: "quality_time"
    },
    optionB: {
      text: "Your manager publicly thanks you in the team meeting",
      language: "recognition"
    }
  },
  {
    id: 2,
    scenario: "When you're feeling overwhelmed with work:",
    optionA: {
      text: "Your manager helps you reprioritize or takes something off your plate",
      language: "support"
    },
    optionB: {
      text: "You're given an afternoon off to recharge",
      language: "rewards"
    }
  },
  {
    id: 3,
    scenario: "When a big decision is being made:",
    optionA: {
      text: "You're invited to the planning meeting to share your input",
      language: "inclusion"
    },
    optionB: {
      text: "Your manager asks for your perspective in a private conversation first",
      language: "quality_time"
    }
  },
  {
    id: 4,
    scenario: "After resolving a difficult customer issue:",
    optionA: {
      text: "You get a personal \"thank you\" message highlighting what you did well",
      language: "recognition"
    },
    optionB: {
      text: "Your manager offers to take on your next tricky case so you can focus elsewhere",
      language: "support"
    }
  },
  {
    id: 5,
    scenario: "When your team hits a major milestone:",
    optionA: {
      text: "Everyone gets a bonus or gift card",
      language: "rewards"
    },
    optionB: {
      text: "The whole team is invited to present the results to leadership",
      language: "inclusion"
    }
  },
  {
    id: 6,
    scenario: "When you're struggling with a problem:",
    optionA: {
      text: "Your manager sets aside time to talk it through with you",
      language: "quality_time"
    },
    optionB: {
      text: "Your manager removes a blocker or connects you with someone who can help",
      language: "support"
    }
  },
  {
    id: 7,
    scenario: "When you suggest an improvement:",
    optionA: {
      text: "Your manager praises your initiative in front of others",
      language: "recognition"
    },
    optionB: {
      text: "You're asked to lead the implementation",
      language: "inclusion"
    }
  },
  {
    id: 8,
    scenario: "After working late to meet a deadline:",
    optionA: {
      text: "Your manager checks in the next day to see how you're doing",
      language: "quality_time"
    },
    optionB: {
      text: "You're encouraged to start late or leave early the next day",
      language: "support"
    }
  },
  {
    id: 9,
    scenario: "When you go above and beyond:",
    optionA: {
      text: "You receive a thoughtful gift or extra PTO",
      language: "rewards"
    },
    optionB: {
      text: "Your work is acknowledged in the company newsletter",
      language: "recognition"
    }
  },
  {
    id: 10,
    scenario: "During a team restructure:",
    optionA: {
      text: "You're included in conversations about how it will work",
      language: "inclusion"
    },
    optionB: {
      text: "Your manager offers flexibility or support during the transition",
      language: "support"
    }
  },
  {
    id: 11,
    scenario: "When you've been pushing hard for weeks:",
    optionA: {
      text: "Your manager books a coffee chat to check in and listen",
      language: "quality_time"
    },
    optionB: {
      text: "You're given a surprise day off",
      language: "rewards"
    }
  },
  {
    id: 12,
    scenario: "After you share a new idea:",
    optionA: {
      text: "Your manager immediately says \"That's brilliant, tell me more\"",
      language: "recognition"
    },
    optionB: {
      text: "Your manager schedules time to explore it with you in depth",
      language: "quality_time"
    }
  },
  {
    id: 13,
    scenario: "When you're stuck on something technical:",
    optionA: {
      text: "Your manager pairs you with a senior person to help",
      language: "support"
    },
    optionB: {
      text: "You're invited to the architecture review so you can learn",
      language: "inclusion"
    }
  },
  {
    id: 14,
    scenario: "After completing a tedious task nobody wanted:",
    optionA: {
      text: "You're given a small bonus or token of appreciation",
      language: "rewards"
    },
    optionB: {
      text: "Your manager takes the next tedious task off your hands",
      language: "support"
    }
  },
  {
    id: 15,
    scenario: "When a new initiative is being planned:",
    optionA: {
      text: "You're asked to join the working group",
      language: "inclusion"
    },
    optionB: {
      text: "Your manager publicly recognizes your relevant expertise",
      language: "recognition"
    }
  },
  {
    id: 16,
    scenario: "When you're feeling disconnected from the team:",
    optionA: {
      text: "Your manager schedules regular check-ins to see how you're doing",
      language: "quality_time"
    },
    optionB: {
      text: "You're added to a key project team or Slack channel",
      language: "inclusion"
    }
  },
  {
    id: 17,
    scenario: "After you help a colleague succeed:",
    optionA: {
      text: "Your manager sends a heartfelt thank you note",
      language: "recognition"
    },
    optionB: {
      text: "You're given a gift card or team lunch in appreciation",
      language: "rewards"
    }
  },
  {
    id: 18,
    scenario: "When you're juggling competing priorities:",
    optionA: {
      text: "Your manager helps you decide what to focus on first",
      language: "support"
    },
    optionB: {
      text: "Your manager tells others how well you're handling it",
      language: "recognition"
    }
  },
  {
    id: 19,
    scenario: "After you've been working weekends:",
    optionA: {
      text: "You're given comp time or a bonus",
      language: "rewards"
    },
    optionB: {
      text: "Your manager has a real conversation about workload and how to prevent it",
      language: "quality_time"
    }
  },
  {
    id: 20,
    scenario: "When strategy is being set for next quarter:",
    optionA: {
      text: "You're invited to the planning session",
      language: "inclusion"
    },
    optionB: {
      text: "Your manager schedules dedicated time to hear your thoughts",
      language: "quality_time"
    }
  },
  {
    id: 21,
    scenario: "After you handle a crisis well:",
    optionA: {
      text: "You're publicly praised for staying calm under pressure",
      language: "recognition"
    },
    optionB: {
      text: "Your manager offers to take something else off your plate so you can recover",
      language: "support"
    }
  },
  {
    id: 22,
    scenario: "When you're learning something new:",
    optionA: {
      text: "Your manager sets aside time to mentor you through it",
      language: "quality_time"
    },
    optionB: {
      text: "Your manager acknowledges your growth in front of the team",
      language: "recognition"
    }
  },
  {
    id: 23,
    scenario: "After a particularly stressful month:",
    optionA: {
      text: "Your manager gives you extra flexibility or removes a low-priority task",
      language: "support"
    },
    optionB: {
      text: "You receive a thank-you gift or bonus",
      language: "rewards"
    }
  },
  {
    id: 24,
    scenario: "When there's a problem affecting your work:",
    optionA: {
      text: "You're included in the conversation about how to solve it",
      language: "inclusion"
    },
    optionB: {
      text: "Your manager steps in to fix it so you can keep moving",
      language: "support"
    }
  },
  {
    id: 25,
    scenario: "When you consistently deliver quality work:",
    optionA: {
      text: "Your manager regularly tells you they notice and appreciate it",
      language: "recognition"
    },
    optionB: {
      text: "You're brought into important meetings where your expertise matters",
      language: "inclusion"
    }
  }
]
