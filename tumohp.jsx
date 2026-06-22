import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

const slides = [
  {
    day: "Day 1",
    title: "Session 1 – Introductions",
    content: "Meet Camilo and each other. Share interests and favorite robots.",
    goal: "Build trust and group dynamic",
    outcome: "Everyone knows each other",
    media: "https://images.unsplash.com/photo-1581092335397-9583eb92d232",
  },
  {
    day: "Day 1",
    title: "Session 1 – Robot Inspiration",
    content: "Explore Otto and robotic possibilities.",
    goal: "Understand robots",
    outcome: "Inspired ideas",
    media: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
  },
  {
    day: "Day 1",
    title: "Session 2 – Design Thinking",
    content: "Create concepts, moodboards and sketch your robot.",
    goal: "Define creative direction",
    outcome: "Concept sheet",
    media: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
  {
    day: "Day 1",
    title: "Session 3 – Build Robot",
    content: "Assemble and connect Otto.",
    goal: "Understand hardware",
    outcome: "Working robot",
    media: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
  },
  {
    day: "Day 1",
    title: "Session 4 – 3D Modeling",
    content: "Design custom robot parts.",
    goal: "Learn CAD",
    outcome: "Printable models",
    media: "https://images.unsplash.com/photo-1581091215367-59ab6b86b37f",
  },

  {
    day: "Day 2",
    title: "Session 5 – Block Coding",
    content: "Program movements and lights.",
    goal: "Understand logic",
    outcome: "First program",
    media: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    day: "Day 2",
    title: "Session 6 – MicroPython",
    content: "Advanced programming with text.",
    goal: "Deep coding",
    outcome: "Sensor programs",
    media: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },
  {
    day: "Day 2",
    title: "Session 7 – AI Coding",
    content: "Use AI to create robot behaviors.",
    goal: "Creative AI",
    outcome: "AI-inspired robot",
    media: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    day: "Day 2",
    title: "Session 8 – Challenges",
    content: "Sumo, line following and games.",
    goal: "Test robots",
    outcome: "Autonomous behavior",
    media: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },

  {
    day: "Day 3",
    title: "Session 9 – Final Project",
    content: "Build and refine your final idea.",
    goal: "Complete project",
    outcome: "Presentation ready",
    media: "https://images.unsplash.com/photo-1526378722304-4c2a1c5c8b99",
  },
  {
    day: "Day 3",
    title: "Session 10 – Showcase",
    content: "Present and document your work.",
    goal: "Share and reflect",
    outcome: "Portfolio complete",
    media: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
  }
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [progress, setProgress] = useState({});

  const filteredSlides = filter === "All" ? slides : slides.filter(s => s.day === filter);
  const slide = filteredSlides[index] || filteredSlides[0];

  const toggleProgress = (i) => {
    setProgress(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 flex flex-col items-center">
      <div className="flex gap-2 mb-4">
        {["All","Day 1","Day 2","Day 3"].map(d => (
          <Button key={d} onClick={() => {setFilter(d); setIndex(0)}}>{d}</Button>
        ))}
      </div>

      <Card className="w-full max-w-3xl shadow-2xl rounded-2xl">
        <CardContent className="p-6 space-y-4">
          <img src={slide.media} className="w-full h-48 object-cover rounded-xl" />
          <h1 className="text-xl font-bold text-blue-600">{slide.title}</h1>
          <p>{slide.content}</p>
          <p><strong>🎯 Goal:</strong> {slide.goal}</p>
          <p><strong>✅ Outcome:</strong> {slide.outcome}</p>

          <Button onClick={() => toggleProgress(index)}>
            <CheckCircle className="mr-2" />
            {progress[index] ? "Completed" : "Mark Done"}
          </Button>
        </CardContent>
      </Card>

      <div className="flex gap-4 mt-4">
        <Button onClick={() => setIndex(Math.max(index - 1, 0))} disabled={index === 0}>
          <ChevronLeft /> Prev
        </Button>
        <Button onClick={() => setIndex(Math.min(index + 1, filteredSlides.length - 1))}>
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
}