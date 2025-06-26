import { apiRequest } from "./queryClient";

export interface RegistrationData {
  name: string;
  email: string;
  branch: string;
  year: string;
  phone?: string;
  reason?: string;
  interests?: string[];
}

export interface IdeaData {
  title: string;
  description: string;
  name: string;
  email: string;
  branch: string;
  year: string;
}

export interface MentorshipData {
  area: string;
  challenge: string;
  name: string;
  email: string;
  phone: string;
}

export const api = {
  register: async (data: RegistrationData) => {
    const response = await apiRequest('POST', '/api/register', data);
    return response.json();
  },

  submitIdea: async (data: IdeaData) => {
    const response = await apiRequest('POST', '/api/submit-idea', data);
    return response.json();
  },

  requestMentorship: async (data: MentorshipData) => {
    const response = await apiRequest('POST', '/api/request-mentorship', data);
    return response.json();
  },
};
