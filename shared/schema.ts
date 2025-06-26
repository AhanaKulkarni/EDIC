import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  branch: text("branch").notNull(),
  year: text("year").notNull(),
  phone: text("phone"),
  reason: text("reason"),
  interests: text("interests").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const ideas = pgTable("ideas", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  branch: text("branch").notNull(),
  year: text("year").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mentorshipRequests = pgTable("mentorship_requests", {
  id: serial("id").primaryKey(),
  area: text("area").notNull(),
  challenge: text("challenge").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertRegistrationSchema = createInsertSchema(registrations).omit({
  id: true,
  createdAt: true,
});

export const insertIdeaSchema = createInsertSchema(ideas).omit({
  id: true,
  createdAt: true,
});

export const insertMentorshipRequestSchema = createInsertSchema(mentorshipRequests).omit({
  id: true,
  createdAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Registration = typeof registrations.$inferSelect;
export type InsertRegistration = z.infer<typeof insertRegistrationSchema>;
export type Idea = typeof ideas.$inferSelect;
export type InsertIdea = z.infer<typeof insertIdeaSchema>;
export type MentorshipRequest = typeof mentorshipRequests.$inferSelect;
export type InsertMentorshipRequest = z.infer<typeof insertMentorshipRequestSchema>;
