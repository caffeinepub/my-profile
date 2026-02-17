export interface Highlight {
  category: string;
  description: string;
}

export interface PastYearEntry {
  year: string;
  title: string;
  description: string;
}

export interface FuturePlan {
  goal: string;
  timeframe: string;
  description: string;
}

export interface ProfileContent {
  about: {
    name: string;
    bio: string;
    highlights: Highlight[];
  };
  pastYears: PastYearEntry[];
  futurePlans: FuturePlan[];
}

export const profileContent: ProfileContent = {
  about: {
    name: 'Your Name',
    bio: 'Welcome to my personal profile. This is where I share my journey, experiences, and aspirations. Feel free to explore and learn more about who I am and where I\'m headed.',
    highlights: [
      {
        category: 'Passion',
        description: 'Driven by curiosity and a love for continuous learning and growth.'
      },
      {
        category: 'Skills',
        description: 'Building expertise across multiple domains with hands-on experience.'
      },
      {
        category: 'Values',
        description: 'Committed to authenticity, collaboration, and making a positive impact.'
      },
      {
        category: 'Interests',
        description: 'Exploring technology, creativity, and meaningful connections with others.'
      }
    ]
  },
  pastYears: [
    {
      year: '2024',
      title: 'Recent Achievements',
      description: 'Add your recent accomplishments, projects, or milestones here. This could include work experience, education, personal projects, or any significant events.'
    },
    {
      year: '2023',
      title: 'Previous Year Highlights',
      description: 'Share what you accomplished or learned during this period. Include any notable experiences, skills acquired, or challenges overcome.'
    },
    {
      year: '2022',
      title: 'Earlier Experiences',
      description: 'Document your journey from earlier years. This helps paint a complete picture of your growth and development over time.'
    }
  ],
  futurePlans: [
    {
      goal: 'Short-term Goal',
      timeframe: 'Next 6 months',
      description: 'Describe what you want to achieve in the near future. This could be learning a new skill, completing a project, or reaching a personal milestone.'
    },
    {
      goal: 'Medium-term Goal',
      timeframe: '1-2 years',
      description: 'Outline your plans for the coming years. Think about career advancement, personal development, or major life changes you\'re working towards.'
    },
    {
      goal: 'Long-term Vision',
      timeframe: '3-5 years',
      description: 'Share your bigger picture aspirations. Where do you see yourself? What impact do you want to make? What legacy do you want to build?'
    }
  ]
};
