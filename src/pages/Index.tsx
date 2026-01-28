import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import AttendanceSection from "@/components/landing/AttendanceSection";
import TaskManagement from "@/components/landing/TaskManagement";
import TeamPlanner from "@/components/landing/TeamPlanner";
import WorkflowSection from "@/components/landing/WorkflowSection";
import CalendarSection from "@/components/landing/CalendarSection";
import InsightSection from "@/components/landing/InsightSection";
import DemoSection from "@/components/landing/DemoSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AttendanceSection />
      <TaskManagement />
      <TeamPlanner />
      <WorkflowSection />
      <CalendarSection />
      <InsightSection />
      <DemoSection />
      <Footer />
    </main>
  );
};

export default Index;
