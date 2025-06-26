import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Events from "@/pages/Events";
import Startups from "@/pages/Startups";
import StudentCorner from "@/pages/StudentCorner";
import Register from "@/pages/Register";
import Contact from "@/pages/Contact";
import LabResources from "@/pages/LabResources";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/events" component={Events} />
        <Route path="/startups" component={Startups} />
        <Route path="/lab-resources" component={LabResources} />
        <Route path="/student-corner" component={StudentCorner} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        {/* Fallback to 404 */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
