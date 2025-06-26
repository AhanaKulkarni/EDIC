import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertRegistrationSchema, 
  insertIdeaSchema, 
  insertMentorshipRequestSchema 
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      
      // Also submit to Google Sheets via Sheet.best API
      try {
        const sheetBestUrl = process.env.SHEET_BEST_URL || process.env.VITE_SHEET_BEST_URL || "https://sheet.best/api/sheets/your-sheet-id";
        
        await fetch(sheetBestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Name: validatedData.name,
            Email: validatedData.email,
            Branch: validatedData.branch,
            Year: validatedData.year,
            Phone: validatedData.phone || '',
            Reason: validatedData.reason || '',
            Interests: Array.isArray(validatedData.interests) ? validatedData.interests.join(', ') : '',
            Timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetError) {
        console.error('Failed to submit to Google Sheets:', sheetError);
        // Continue with local storage even if Sheet.best fails
      }
      
      res.json({ success: true, registration });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : 'Registration failed' 
      });
    }
  });

  // Idea submission endpoint
  app.post("/api/submit-idea", async (req, res) => {
    try {
      const validatedData = insertIdeaSchema.parse(req.body);
      const idea = await storage.createIdea(validatedData);
      
      // Submit to Google Sheets
      try {
        const sheetBestUrl = process.env.SHEET_BEST_IDEAS_URL || process.env.VITE_SHEET_BEST_IDEAS_URL || "https://sheet.best/api/sheets/your-ideas-sheet-id";
        
        await fetch(sheetBestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Title: validatedData.title,
            Description: validatedData.description,
            Name: validatedData.name,
            Email: validatedData.email,
            Branch: validatedData.branch,
            Year: validatedData.year,
            Timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetError) {
        console.error('Failed to submit idea to Google Sheets:', sheetError);
      }
      
      res.json({ success: true, idea });
    } catch (error) {
      console.error('Idea submission error:', error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : 'Idea submission failed' 
      });
    }
  });

  // Mentorship request endpoint
  app.post("/api/request-mentorship", async (req, res) => {
    try {
      const validatedData = insertMentorshipRequestSchema.parse(req.body);
      const request = await storage.createMentorshipRequest(validatedData);
      
      // Submit to Google Sheets
      try {
        const sheetBestUrl = process.env.SHEET_BEST_MENTORSHIP_URL || process.env.VITE_SHEET_BEST_MENTORSHIP_URL || "https://sheet.best/api/sheets/your-mentorship-sheet-id";
        
        await fetch(sheetBestUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Area: validatedData.area,
            Challenge: validatedData.challenge,
            Name: validatedData.name,
            Email: validatedData.email,
            Phone: validatedData.phone,
            Timestamp: new Date().toISOString(),
          }),
        });
      } catch (sheetError) {
        console.error('Failed to submit mentorship request to Google Sheets:', sheetError);
      }
      
      res.json({ success: true, request });
    } catch (error) {
      console.error('Mentorship request error:', error);
      res.status(400).json({ 
        success: false, 
        error: error instanceof z.ZodError ? error.errors : 'Mentorship request failed' 
      });
    }
  });

  // Get all registrations (admin endpoint)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error('Error fetching registrations:', error);
      res.status(500).json({ error: 'Failed to fetch registrations' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
