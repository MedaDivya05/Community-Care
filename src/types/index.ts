export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export interface VideoContent {
  id: string;
  title: string;
  videoId: string;
  category: 'hygiene' | 'water' | 'waste';
  language: 'en' | 'hi' | 'te';
  description: string;
}

export interface HealthTip {
  id: string;
  category: 'children' | 'teens' | 'adults' | 'elderly';
  title: string;
  description: string;
  tips: string[];
}

export interface WaterTip {
  id: string;
  title: string;
  description: string;
  type: 'conservation' | 'harvesting' | 'recycling';
  steps: string[];
}

export interface WasteTip {
  id: string;
  title: string;
  description: string;
  type: 'segregation' | 'reuse' | 'recycling';
  materials: string[];
  process: string[];
}

export type Language = 'en' | 'hi' | 'te';