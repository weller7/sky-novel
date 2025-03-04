import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const chatMessages = [
    {
      sender: "Jamie",
      message: "Hey, what happened? There's no one in the shelter anymore?",
    },
    { sender: "NM ChildCare Network", message: "Can I help you Mr?" },
    {
      sender: "Jamie",
      message:
        "I'm here, the building is empty!! I left my Alex with you and there's no one there!!",
    },
    {
      sender: "NM ChildCare Network",
      message:
        "We regret to inform you that the ChildCare Network no longer operates in New Manchester due to ongoing violence and gang-related issues.",
    },
    {
      sender: "Jamie",
      message: "What? What happened, where are the kids??",
    },
    {
      sender: "Jamie",
      message: "WHERE'S MY BABY??!!!",
    },
    {
      sender: "NM ChildCare Network",
      message: "This chat has been disconnected.",
    },
    {
      sender: "Jamie",
      message: "WHERE THE HELL IS SHE??!!!",
    },
  ];

  return (
    <section className="py-20">
      <div className="px-6">
        <h2 className="text-2xl font-bold mb-12 text-center text-white">
          Follow the story
        </h2>
        <div className="md:max-w-4xl mx-auto bg-[#0F172A] rounded-lg overflow-hidden shadow-lg">
          <div className="px-2 py-2  bg-[#30509b] text-center font-bold">
            NM ChildCare Network
          </div>
          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "Jamie" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "NM ChildCare Network"
                      ? "bg-[#30509b] text-white"
                      : "bg-[#1E293B] text-cyan-300"
                  }  `}
                >
                  <p className="font-bold">{msg.sender}</p>
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
            <div className="p-4 [#1E293B] flex">
              <Input
                type="text"
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex grow mr-2 bg-[#0F172A] text-cyan-300
                placeholder-cyan-500"
              />
              <Button
                variant="outline"
                size="icon"
                className="bg-cyan-500 text-white hover:bg-cyan-600"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
