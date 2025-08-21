import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Send, Menu, Moon, Sun, ArrowLeft } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "React Fundamentals",
    description: "Learn the basics of React including components, props, and state management.",
    lessons: 12,
    duration: "4 hours"
  },
  {
    id: "2", 
    title: "TypeScript Essentials",
    description: "Master TypeScript types, interfaces, and advanced features.",
    lessons: 8,
    duration: "3 hours"
  },
  {
    id: "3",
    title: "Next.js Complete Guide",
    description: "Build full-stack applications with Next.js and modern best practices.",
    lessons: 15,
    duration: "6 hours"
  },
  {
    id: "4",
    title: "CSS & Tailwind",
    description: "Modern styling techniques with CSS-in-JS and Tailwind CSS.",
    lessons: 10,
    duration: "3.5 hours"
  }
];

const CoursesSidebar = ({ className = "" }: { className?: string }) => (
  <div className={`h-full bg-surface border-l border-border ${className}`}>
    <div className="p-6 border-b border-border">
      <h2 className="text-xl font-bold text-text-primary">Available Courses</h2>
      <p className="text-sm text-text-secondary mt-1">Choose a course to start learning</p>
    </div>
    <ScrollArea className="flex-1 p-4">
      <div className="space-y-4">
        {courses.map((course) => (
          <Card key={course.id} className="p-4 hover:bg-surface-hover transition-colors cursor-pointer">
            <h3 className="font-semibold text-text-primary mb-2">{course.title}</h3>
            <p className="text-sm text-text-secondary mb-3">{course.description}</p>
            <div className="flex justify-between text-xs text-text-secondary">
              <span>{course.lessons} lessons</span>
              <span>{course.duration}</span>
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI learning assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const { theme, setTheme } = useTheme();

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's a great question! I'd be happy to help you learn more about that topic. Would you like to start with one of the available courses?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      {/* Header */}
      <header className="bg-surface/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-text-primary hover:text-accent transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-text-primary">ChaiDocs Chat</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Mobile courses menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <CoursesSidebar />
              </SheetContent>
            </Sheet>

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Chat Section */}
        <div className="flex-1 flex flex-col">
          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.isUser
                        ? "bg-accent text-white"
                        : "bg-surface border border-border text-text-primary"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border bg-surface/80 backdrop-blur-sm p-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about the courses..."
                  className="flex-1"
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                />
                <Button onClick={sendMessage} size="sm" className="px-3">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Courses Sidebar */}
        <div className="hidden md:block w-80">
          <CoursesSidebar />
        </div>
      </div>
    </div>
  );
};

export default Chat;