'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CameraIcon, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState('/placeholder.svg?height=200&width=200')

  // Mock data (replace with real data in a full implementation)
  const user = {
    username: 'webexplorer42',
    name: 'Alex Johnson',
    bookmarksCount: 157,
    tags: ['webdev', 'javascript', 'react', 'nextjs', 'css', 'html', 'nodejs', 'design', 'ux', 'productivity']
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg" style={{
        border: '2px solid #000',
        boxShadow: '5px 5px 0 #000',
      }}>
        <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: '#FF6600' }}>Your Profile</h1>
        
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-4">
            <Image
              src={profileImage}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-blue-500"
            />
            <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full cursor-pointer">
              <CameraIcon className="text-white" size={24} />
            </label>
            <input
              id="profile-image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" value={user.username} readOnly className="bg-gray-100" />
          </div>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" value={user.name} readOnly className="bg-gray-100" />
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Bookmark className="mr-2" /> Bookmarks Saved
          </h2>
          <p className="text-3xl font-bold text-blue-600">{user.bookmarksCount}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Your Tags</h2>
          <div className="flex flex-wrap gap-2">
            {user.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button className="px-6 py-2 text-white font-bold rounded" style={{
            background: 'linear-gradient(to bottom, #4d90fe, #4787ed)',
            border: '1px solid #3079ed',
            boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
          }}>
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

