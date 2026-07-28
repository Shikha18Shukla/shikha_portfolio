export type Project = {
  title: string
  category: 'AI / Machine Learning' | 'Deep Learning / Computer Vision' | 'Full Stack' | 'Other'
  description: string
  tech: string[]
  features?: string[]
  metric?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Driver Drowsiness Detection System',
    category: 'Deep Learning / Computer Vision',
    description:
      'Real-time fatigue detection system that analyzes facial landmarks to identify signs of driver drowsiness and trigger alerts before a lapse in attention becomes dangerous.',
    tech: ['Python', 'OpenCV', 'Machine Learning'],
    features: [
      'Real-time video monitoring',
      'Facial landmark extraction',
      'ML-based drowsiness classification',
      'Audible alert mechanism',
    ],
    metric: '98% detection accuracy',
    github: 'https://github.com/Shikha18Shukla/driver-drowsiness-detection',
    featured: true,
  },
  {
    title: 'YOLO Real-Time Object Detection',
    category: 'Deep Learning / Computer Vision',
    description:
      'Real-time object detection over live webcam streams using a pretrained YOLOv5 model, with an optimized inference pipeline for low-latency frame processing.',
    tech: ['Python', 'YOLOv5', 'COCO Dataset'],
    github: 'https://github.com/Shikha18Shukla/YOLO-Real-Time-Object-Detection-Webcam-',
    featured: true,
  },
  {
    title: 'Youth Rights AI',
    category: 'AI / Machine Learning',
    description:
      'An AI application exploring how large language models can make legal and civic rights information more accessible to young people.',
    tech: ['Python', 'AI Application'],
    github: 'https://github.com/Shikha18Shukla/Youth-Rights-AI',
  },
  {
    title: 'AI Meeting Memory Assistant',
    category: 'Full Stack',
    description:
      'An AI system that listens to meetings and extracts concise summaries, action items, deadlines, and decisions — so nothing discussed gets lost after the call ends.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Gemini API', 'JWT'],
  },
  {
    title: 'Spam Email Detector',
    category: 'AI / Machine Learning',
    description: 'A machine learning classifier that flags spam emails using natural language feature extraction.',
    tech: ['Python', 'Machine Learning'],
    github: 'https://github.com/Shikha18Shukla/Spam_email_detector',
  },
  {
    title: 'Time Series Analysis — Stock Price',
    category: 'Other',
    description: 'Exploratory analysis and forecasting of stock price movement using time series techniques.',
    tech: ['Python', 'Pandas'],
  },
  {
    title: 'CS50W Search Project',
    category: 'Other',
    description: 'A Google-style search front end built while completing CS50’s Web Programming coursework.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather App',
    category: 'Other',
    description: 'A weather lookup application consuming a public weather API.',
    tech: ['Python'],
  },
]

export const projectCategories = ['AI / Machine Learning', 'Deep Learning / Computer Vision', 'Full Stack', 'Other'] as const
