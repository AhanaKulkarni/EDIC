import { 
  users, 
  registrations, 
  ideas, 
  mentorshipRequests,
  resourceRequests,
  type User, 
  type InsertUser,
  type Registration,
  type InsertRegistration,
  type Idea,
  type InsertIdea,
  type MentorshipRequest,
  type InsertMentorshipRequest,
  type ResourceRequest,
  type InsertResourceRequest
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  createIdea(idea: InsertIdea): Promise<Idea>;
  createMentorshipRequest(request: InsertMentorshipRequest): Promise<MentorshipRequest>;
  createResourceRequest(request: InsertResourceRequest): Promise<ResourceRequest>;
  getAllRegistrations(): Promise<Registration[]>;
  getAllIdeas(): Promise<Idea[]>;
  getAllMentorshipRequests(): Promise<MentorshipRequest[]>;
  getAllResourceRequests(): Promise<ResourceRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private registrations: Map<number, Registration>;
  private ideas: Map<number, Idea>;
  private mentorshipRequests: Map<number, MentorshipRequest>;
  private resourceRequests: Map<number, ResourceRequest>;
  private currentUserId: number;
  private currentRegistrationId: number;
  private currentIdeaId: number;
  private currentMentorshipRequestId: number;
  private currentResourceRequestId: number;

  constructor() {
    this.users = new Map();
    this.registrations = new Map();
    this.ideas = new Map();
    this.mentorshipRequests = new Map();
    this.currentUserId = 1;
    this.currentRegistrationId = 1;
    this.currentIdeaId = 1;
    this.currentMentorshipRequestId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createRegistration(insertRegistration: InsertRegistration): Promise<Registration> {
    const id = this.currentRegistrationId++;
    const registration: Registration = { 
      id,
      name: insertRegistration.name,
      email: insertRegistration.email,
      branch: insertRegistration.branch,
      year: insertRegistration.year,
      phone: insertRegistration.phone || null,
      reason: insertRegistration.reason || null,
      interests: insertRegistration.interests || null,
      createdAt: new Date() 
    };
    this.registrations.set(id, registration);
    return registration;
  }

  async createIdea(insertIdea: InsertIdea): Promise<Idea> {
    const id = this.currentIdeaId++;
    const idea: Idea = { 
      ...insertIdea, 
      id, 
      createdAt: new Date() 
    };
    this.ideas.set(id, idea);
    return idea;
  }

  async createMentorshipRequest(insertRequest: InsertMentorshipRequest): Promise<MentorshipRequest> {
    const id = this.currentMentorshipRequestId++;
    const request: MentorshipRequest = { 
      ...insertRequest, 
      id, 
      createdAt: new Date() 
    };
    this.mentorshipRequests.set(id, request);
    return request;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    return Array.from(this.registrations.values());
  }

  async getAllIdeas(): Promise<Idea[]> {
    return Array.from(this.ideas.values());
  }

  async getAllMentorshipRequests(): Promise<MentorshipRequest[]> {
    return Array.from(this.mentorshipRequests.values());
  }
}

export const storage = new MemStorage();
