import { HealthTip, WaterTip, WasteTip, VideoContent } from '../types';

export const healthTips: HealthTip[] = [
  {
    id: '1',
    category: 'children',
    title: 'Daily Hygiene Habits',
    description: 'Essential hygiene practices for children',
    tips: [
      'Wash hands frequently with soap and water for 20 seconds',
      'Brush teeth twice daily with fluoride toothpaste',
      'Take regular baths and keep hair clean',
      'Trim fingernails regularly to prevent dirt accumulation',
      'Wear clean clothes daily',
      'Eat nutritious foods including fruits and vegetables'
    ]
  },
  {
    id: '2',
    category: 'teens',
    title: 'Personal Care and Wellness',
    description: 'Health awareness for teenagers',
    tips: [
      'Maintain proper skin care routine',
      'Get adequate sleep (8-9 hours) for proper growth',
      'Stay hydrated by drinking 8-10 glasses of water daily',
      'Exercise regularly for physical and mental health',
      'Practice stress management techniques',
      'Maintain good posture while studying'
    ]
  },
  {
    id: '3',
    category: 'adults',
    title: 'Workplace and Lifestyle Health',
    description: 'Health maintenance for working adults',
    tips: [
      'Take regular breaks from screen time',
      'Practice ergonomic workplace habits',
      'Maintain work-life balance',
      'Get regular health checkups',
      'Limit processed foods and alcohol consumption',
      'Stay physically active despite busy schedules'
    ]
  },
  {
    id: '4',
    category: 'elderly',
    title: 'Senior Health Management',
    description: 'Health care for senior citizens',
    tips: [
      'Monitor blood pressure and sugar levels regularly',
      'Take medications as prescribed',
      'Stay socially active and engaged',
      'Practice gentle exercises like walking or yoga',
      'Maintain good oral hygiene',
      'Ensure proper nutrition with adequate protein and calcium'
    ]
  }
];

export const waterTips: WaterTip[] = [
  {
    id: '1',
    title: 'Daily Water Conservation',
    description: 'Simple practices to reduce water usage',
    type: 'conservation',
    steps: [
      'Fix leaky faucets and pipes immediately',
      'Take shorter showers (5-7 minutes maximum)',
      'Turn off tap while brushing teeth or washing dishes',
      'Use water-efficient appliances and fixtures',
      'Collect rainwater for watering plants',
      'Reuse water from washing vegetables for plants'
    ]
  },
  {
    id: '2',
    title: 'Rainwater Harvesting System',
    description: 'Setup and maintain rainwater collection',
    type: 'harvesting',
    steps: [
      'Install gutters and downspouts on roof',
      'Set up first-flush diverters to improve water quality',
      'Install storage tanks with proper covers',
      'Add filtration system for drinking water use',
      'Regular maintenance and cleaning of system',
      'Use harvested water for gardening and cleaning'
    ]
  },
  {
    id: '3',
    title: 'Greywater Recycling',
    description: 'Reuse household wastewater effectively',
    type: 'recycling',
    steps: [
      'Separate greywater from blackwater systems',
      'Install simple filtration for washing machine water',
      'Use biodegradable soaps and detergents',
      'Direct filtered water to garden irrigation',
      'Avoid using greywater on edible plants',
      'Regular system maintenance and monitoring'
    ]
  }
];

export const wasteTips: WasteTip[] = [
  {
    id: '1',
    title: 'Waste Segregation at Source',
    description: 'Proper separation of different waste types',
    type: 'segregation',
    materials: ['Organic waste', 'Recyclable materials', 'Hazardous waste', 'Non-recyclable waste'],
    process: [
      'Use separate bins for wet and dry waste',
      'Compost organic waste in backyard or community facility',
      'Clean recyclables before disposing',
      'Store hazardous waste separately for special collection',
      'Reduce overall waste generation',
      'Educate family members about proper segregation'
    ]
  },
  {
    id: '2',
    title: 'Creative Reuse Projects',
    description: 'Transform waste into useful items',
    type: 'reuse',
    materials: ['Plastic bottles', 'Cardboard boxes', 'Glass jars', 'Fabric scraps'],
    process: [
      'Convert plastic bottles into planters or storage containers',
      'Use cardboard for craft projects and organizers',
      'Transform glass jars into decorative items or storage',
      'Create cleaning rags from old clothing',
      'Make bird feeders from plastic containers',
      'Build furniture from wooden pallets'
    ]
  },
  {
    id: '3',
    title: 'Community Recycling',
    description: 'Participate in local recycling programs',
    type: 'recycling',
    materials: ['Paper and cardboard', 'Plastic containers', 'Glass bottles', 'Electronic waste'],
    process: [
      'Locate nearest recycling center or collection point',
      'Follow local recycling guidelines and schedules',
      'Participate in e-waste collection drives',
      'Support businesses with take-back programs',
      'Organize community recycling awareness events',
      'Track and measure recycling impact'
    ]
  }
];

export const videoContent: VideoContent[] = [
  {
    id: '1',
    title: 'Hand Washing Techniques',
    videoId: 'IisgnbMfKvI',
    category: 'hygiene',
    language: 'en',
    description: 'Learn proper hand washing steps to prevent diseases'
  },
  {
    id: '2',
    title: 'Water Conservation at Home',
    videoId: 'npjJGKnHKzY',
    category: 'water',
    language: 'en',
    description: 'Practical tips for saving water in daily activities'
  },
  {
    id: '3',
    title: 'Waste Segregation Guide',
    videoId: 'TN1P1Rn7ej4',
    category: 'waste',
    language: 'en',
    description: 'Complete guide to separating wet and dry waste'
  }
];