/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Search, Phone, Video, Info } from "lucide-react";

import { useGetMyChatsQuery, useSendMessageMutation } from "@/redux/api/chat/chat.slice.api";
import { useAppSelector } from "@/redux/hooks";
import { currentUser } from "@/redux/api/Auth/auth.slice";

interface User {
  id: string;
  name: string;
  avatar: string;
  status: "online" | "offline" | "away";
  lastMessage: string;
  timestamp: string;
  promotion: {
    title: string;
    discount: string;
    validUntil: string;
    status: "active" | "expired" | "pending";
  };
}

const initialUsers: User[] = [];

export default function ChatApp() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User>(users[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentChatId, setCurrentChatId] = useState<string>("");
  const [localMessages, setLocalMessages] = useState<any[]>([]);

  const { data } = useGetMyChatsQuery(undefined);
  const [sendMessages] = useSendMessageMutation();
  const user = useAppSelector(currentUser);
  const userData = data?.data;

  // socket connect only once
  useEffect(() => {
    const s = io("https://marshall-server.vercel.app", {
      transports: ["websocket"],
      withCredentials: true,
    });
    setSocket(s);

    s.on("connect", () => {
      console.log("Socket connected:", s.id);
      if (currentChatId) {
        s.emit("joinChat", currentChatId);
      }
    });

    // নতুন মেসেজ এলে লোকালি যোগ হবে
    s.on("chatMessage", (msg) => {
      console.log("New message received:", msg);
      if (msg.chatId === currentChatId) {
        setLocalMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      s.disconnect();
    };
  }, []); // শুধু একবার

  // যখন chat পরিবর্তন হয় তখন নতুন রুম join এবং localMessages reset
  useEffect(() => {
    if (socket && currentChatId) {
      socket.emit("joinChat", currentChatId);
      console.log("Joined chat room:", currentChatId);

      // এই চ্যাটের পুরনো ডেটা দিয়ে localMessages সেট করা
      const filteredCurrentChat = userData?.filter((chat: any) => chat._id === currentChatId) || [];
      const chatData = filteredCurrentChat[0];
      setLocalMessages(chatData?.conversation || []);
    }
  }, [socket, currentChatId, userData]);

  // নির্বাচিত চ্যাট ফিল্টার করা
  const filteredCurrentChat = userData?.filter((chat: any) => chat._id === currentChatId) || [];
  const chatData = filteredCurrentChat[0];
  const chatBoxData = localMessages;

  // মেসেজ পাঠানো
  const handleSendMessage = async () => {
    if (!chatData?._id || !newMessage.trim()) return;

    const messagePayload = {
      sender: user?.role,
      messageText: newMessage,
      timeStamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    try {
      await sendMessages({ id: chatData._id, data: messagePayload });

      // লোকালি দেখানোর জন্য সরাসরি যোগ করি
      setLocalMessages((prev) => [...prev, { ...messagePayload, chatId: chatData._id }]);

      // Socket.IO দিয়ে রিয়েলটাইম পাঠানো
      socket?.emit("chatMessage", {
        chatId: chatData._id,
        ...messagePayload,
      });

      setNewMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "away":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  const handleClickCurrentChat = (chatId: string) => {
    setCurrentChatId(chatId);
    const selected = userData?.find((chat: any) => chat._id === chatId);
    if (selected) {
      setSelectedUser({
        id: selected._id,
        name: selected.influencerId?.userId?.firstName || "Unknown",
        avatar: selected.avatar || "/placeholder.svg",
        status: selected.status || "offline",
        lastMessage: selected.lastMessage || "",
        timestamp: selected.timestamp || "",
        promotion: selected.promotion || {
          title: "",
          discount: "",
          validUntil: "",
          status: "expired",
        },
      });
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* LEFT SIDEBAR */}
      <div className="w-1/3 bg-gray-900 border-r border-gray-700 flex flex-col px-8 py-7">
        <div className="p-4 border-b border-gray-700 flex-shrink-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search users or promotions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>

        <ScrollArea className="flex-1 overflow-hidden">
          <div className="p-2">
            {userData?.map((user: any) => (
              <Card
                key={user._id}
                onClick={() => handleClickCurrentChat(user._id)}
                className={`mb-2 cursor-pointer transition-all duration-200 bg-gray-800 border-gray-700 hover:bg-gray-750 ${
                  selectedUser?.id === user._id ? "ring-2 ring-red-500 bg-gray-750" : ""
                }`}
              >
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="relative">
                        <Avatar className="h-10 w-10 ring-2 ring-gray-600">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback className="bg-gray-700 text-white">
                            {user.influencerId?.userId?.firstName
                              ?.split(" ")
                              .map((n: any) => n[0])
                              .join("") || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(
                            user.status
                          )}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-white truncate">
                            {user.influencerId?.userId?.firstName} {user.influencerId?.userId?.lastName}
                          </h3>
                          <span className="text-xs text-gray-400">{user.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-300 truncate">{user.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col bg-gray-900">
        <div className="bg-gray-800 border-b border-gray-700 p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10 ring-2 ring-gray-600">
                  <AvatarImage src={selectedUser?.avatar || "/placeholder.svg"} alt={selectedUser?.name} />
                  <AvatarFallback className="bg-gray-700 text-white">
                    {selectedUser?.name
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(
                    selectedUser?.status
                  )}`}
                />
              </div>
              <div>
                <h2 className="font-semibold text-white">{selectedUser?.name}</h2>
                <p className="text-sm text-gray-400 capitalize">{selectedUser?.status}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                <Video className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white hover:bg-gray-700">
                <Info className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1 bg-black overflow-hidden">
          <div className="p-4 space-y-4">
            {chatBoxData.map((message: any, index: number) => (
              <div
                key={index}
                className={`flex ${message.sender === user?.role ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === user?.role
                      ? "bg-red-600 text-white"
                      : "bg-gray-800 text-gray-100 border border-gray-700"
                  }`}
                >
                  <p className="text-sm">{message.messageText}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="bg-gray-800 border-t border-gray-700 p-4 flex-shrink-0">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
            />
            <Button onClick={handleSendMessage} size="sm" className="bg-red-600 hover:bg-red-700 text-white">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
