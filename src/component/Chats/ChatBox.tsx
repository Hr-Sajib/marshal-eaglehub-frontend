"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Send, Search, MoreVertical, Edit, Trash2, Plus, Phone, Video, Info } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useGetMyChatsQuery } from "@/redux/api/chat/chat.slice.api"

interface User {
  id: string
  name: string
  avatar: string
  status: "online" | "offline" | "away"
  lastMessage: string
  timestamp: string
  promotion: {
    title: string
    discount: string
    validUntil: string
    status: "active" | "expired" | "pending"
  }
}

interface Message {
  id: string
  senderId: string
  content: string
  timestamp: string
  type: "text" | "image"
}

const initialUsers: User[] = [
  {
    id: "1",
    name: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastMessage: "Thanks for the promotion info!",
    timestamp: "2 min ago",
    promotion: {
      title: "Summer Sale",
      discount: "25% OFF",
      validUntil: "2024-08-15",
      status: "active",
    },
  },
  {
    id: "2",
    name: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "away",
    lastMessage: "When does the offer expire?",
    timestamp: "1 hour ago",
    promotion: {
      title: "Flash Deal",
      discount: "50% OFF",
      validUntil: "2024-07-30",
      status: "active",
    },
  },
  {
    id: "3",
    name: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "offline",
    lastMessage: "Great deals!",
    timestamp: "3 hours ago",
    promotion: {
      title: "Black Friday",
      discount: "70% OFF",
      validUntil: "2024-07-25",
      status: "expired",
    },
  },
  {
    id: "4",
    name: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "online",
    lastMessage: "Is this still available?",
    timestamp: "5 hours ago",
    promotion: {
      title: "New Customer",
      discount: "15% OFF",
      validUntil: "2024-08-20",
      status: "pending",
    },
  },
]

const initialMessages: Message[] = [
  {
    id: "1",
    senderId: "1",
    content: "Hi! I saw the summer sale promotion. Is it still valid?",
    timestamp: "10:30 AM",
    type: "text",
  },
  {
    id: "2",
    senderId: "me",
    content: "Yes! The 25% OFF summer sale is still active until August 15th. You can use code SUMMER25 at checkout.",
    timestamp: "10:32 AM",
    type: "text",
  },
  {
    id: "3",
    senderId: "1",
    content: "Perfect! Thanks for the quick response. I'll place my order today.",
    timestamp: "10:35 AM",
    type: "text",
  },
  {
    id: "4",
    senderId: "me",
    content: "Great! Let me know if you need any help with your order. We also have free shipping on orders over $50.",
    timestamp: "10:36 AM",
    type: "text",
  },
  {
    id: "5",
    senderId: "1",
    content: "Thanks for the promotion info!",
    timestamp: "10:38 AM",
    type: "text",
  },
]


export default function ChatApp() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [selectedUser, setSelectedUser] = useState<User>(users[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
const {data,isError,isLoading}=useGetMyChatsQuery(undefined)

console.log(data)
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.promotion.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        senderId: "me",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        type: "text",
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId))
    if (selectedUser.id === userId && users.length > 1) {
      setSelectedUser(users.find((user) => user.id !== userId) || users[0])
    }
  }

const handleUpdateUser = (updated: User | Omit<User, "id">) => {
  // শুধু তখনই আপডেট করবে যদি id property থাকে
  if ("id" in updated) {
    const updatedUser = updated
    setUsers(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)))
    if (selectedUser.id === updatedUser.id) {
      setSelectedUser(updatedUser)
    }
    setEditingUser(null)
  }
}
  const handleAddUser = (newUser: Omit<User, "id">) => {
    const user: User = {
      ...newUser,
      id: Date.now().toString(),
    }
    setUsers([...users, user])
    setIsAddUserOpen(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "away":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getPromotionStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-red-100 text-red-800 border border-red-200"
      case "expired":
        return "bg-gray-100 text-gray-800 border border-gray-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200"
    }
  }

  return (
    <div className="flex h-screen bg-black">
      {/* Left Sidebar - Users List */}
      <div className="w-1/3 bg-gray-900 border-r border-gray-700 flex flex-col px-8 py-7">
        {/* Header - Fixed */}
        <div className="p-4 border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold text-white">Chats</h1>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white border-none">
                  <Plus className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-gray-900 border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-white">Add New User</DialogTitle>
                </DialogHeader>
                <UserForm onSubmit={handleAddUser} />
              </DialogContent>
            </Dialog>
          </div>

          {/* Search */}
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

        {/* Users List - Scrollable */}
        <ScrollArea className="flex-1 overflow-hidden">
          <div className="p-2">
            {filteredUsers.map((user) => (
              <Card
                key={user.id}
                className={`mb-2 cursor-pointer transition-all duration-200 bg-gray-800 border-gray-700 hover:bg-gray-750 ${
                  selectedUser.id === user.id ? "ring-2 ring-red-500 bg-gray-750" : ""
                }`}
                onClick={() => setSelectedUser(user)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="relative">
                        <Avatar className="h-10 w-10 ring-2 ring-gray-600">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback className="bg-gray-700 text-white">
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(user.status)}`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-white truncate">{user.name}</h3>
                          <span className="text-xs text-gray-400">{user.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-300 truncate">{user.lastMessage}</p>

                        {/* Promotion Info */}
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-medium text-gray-200">{user.promotion.title}</span>
                            <Badge className={`text-xs ${getPromotionStatusColor(user.promotion.status)}`}>
                              {user.promotion.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-red-400">{user.promotion.discount}</span>
                            <span className="text-xs text-gray-400">Until {user.promotion.validUntil}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions Menu */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-gray-800 border-gray-700">
                        <DropdownMenuItem
                          onClick={() => setEditingUser(user)}
                          className="text-gray-200 hover:bg-gray-700 focus:bg-gray-700"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-red-400 hover:bg-gray-700 focus:bg-gray-700"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Side - Chat Messages */}
      <div className="flex-1 flex flex-col bg-gray-900">
        {/* Chat Header - Fixed */}
        <div className="bg-gray-800 border-b border-gray-700 p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="h-10 w-10 ring-2 ring-gray-600">
                  <AvatarImage src={selectedUser.avatar || "/placeholder.svg"} alt={selectedUser.name} />
                  <AvatarFallback className="bg-gray-700 text-white">
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-gray-800 ${getStatusColor(selectedUser.status)}`}
                />
              </div>
              <div>
                <h2 className="font-semibold text-white">{selectedUser.name}</h2>
                <p className="text-sm text-gray-400 capitalize">{selectedUser.status}</p>
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

        {/* Messages Area - Scrollable */}
        <ScrollArea className="flex-1 bg-black overflow-hidden">
          <div className="p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.senderId === "me"
                      ? "bg-red-600 text-white"
                      : "bg-gray-800 text-gray-100 border border-gray-700"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.senderId === "me" ? "text-red-100" : "text-gray-400"}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input - Fixed */}
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

      {/* Edit User Dialog */}
      {editingUser && (
        <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
          <DialogContent className="bg-gray-900 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-white">Edit User</DialogTitle>
            </DialogHeader>
            <UserForm user={editingUser} onSubmit={handleUpdateUser} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}

// User Form Component
function UserForm({
  user,
  onSubmit,
}: {
  user?: User
  onSubmit: (user: User | Omit<User, "id">) => void
}) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    avatar: user?.avatar || "/placeholder.svg?height=40&width=40",
    status: user?.status || ("online" as const),
    lastMessage: user?.lastMessage || "",
    timestamp: user?.timestamp || "now",
    promotion: {
      title: user?.promotion.title || "",
      discount: user?.promotion.discount || "",
      validUntil: user?.promotion.validUntil || "",
      status: user?.promotion.status || ("active" as const),
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (user) {
      onSubmit({ ...user, ...formData })
    } else {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" className="text-gray-200">
          Name
        </Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div>
        <Label htmlFor="status" className="text-gray-200">
          Status
        </Label>
        <select
          id="status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:border-red-500 focus:ring-red-500"
        >
          <option value="online">Online</option>
          <option value="away">Away</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      <div>
        <Label htmlFor="promotion-title" className="text-gray-200">
          Promotion Title
        </Label>
        <Input
          id="promotion-title"
          value={formData.promotion.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              promotion: { ...formData.promotion, title: e.target.value },
            })
          }
          required
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div>
        <Label htmlFor="promotion-discount" className="text-gray-200">
          Discount
        </Label>
        <Input
          id="promotion-discount"
          value={formData.promotion.discount}
          onChange={(e) =>
            setFormData({
              ...formData,
              promotion: { ...formData.promotion, discount: e.target.value },
            })
          }
          placeholder="e.g., 25% OFF"
          required
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div>
        <Label htmlFor="promotion-valid" className="text-gray-200">
          Valid Until
        </Label>
        <Input
          id="promotion-valid"
          type="date"
          value={formData.promotion.validUntil}
          onChange={(e) =>
            setFormData({
              ...formData,
              promotion: { ...formData.promotion, validUntil: e.target.value },
            })
          }
          required
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div>
        <Label htmlFor="promotion-status" className="text-gray-200">
          Promotion Status
        </Label>
        <select
          id="promotion-status"
          value={formData.promotion.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              promotion: { ...formData.promotion, status: e.target.value as any },
            })
          }
          className="w-full p-2 bg-gray-800 border border-gray-600 rounded-md text-white focus:border-red-500 focus:ring-red-500"
        >
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
        {user ? "Update User" : "Add User"}
      </Button>
    </form>
  )
}
