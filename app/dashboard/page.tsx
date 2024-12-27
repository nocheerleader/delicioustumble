'use client'

import { useState } from 'react'
import Image from 'next/image'
import { SearchIcon, Bookmark } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function DashboardPage({ username }: { username: string }) {
  const [activeTab, setActiveTab] = useState('fresh')

  const bookmarks = [
    {
      title: "The Future of Web Development",
      source: "techblog.com",
      tags: ["webdev", "javascript", "future"],
      saves: 38,
      thumbnail: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "10 Must-Have Developer Tools for 2024",
      source: "devtools.io",
      tags: ["tools", "development", "productivity"],
      saves: 156,
      thumbnail: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "Understanding Modern CSS Architecture",
      source: "cssninja.dev",
      tags: ["css", "webdesign", "frontend"],
      saves: 95,
      thumbnail: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "The Art of Responsive Web Design",
      source: "designdaily.com",
      tags: ["responsive", "webdesign", "css"],
      saves: 72,
      thumbnail: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "Mastering TypeScript in 2024",
      source: "typescriptguru.com",
      tags: ["typescript", "javascript", "webdev"],
      saves: 128,
      thumbnail: "/placeholder.svg?height=80&width=80"
    },
    {
      title: "AI in Web Development: 2025 Trends",
      source: "aidevtrends.com",
      tags: ["ai", "webdev", "future"],
      saves: 201,
      thumbnail: "/placeholder.svg?height=80&width=80"
    }
  ]

  const handleStumble = () => {
    // In a real application, this would fetch a random bookmark or website
    alert("Stumbling to a random website!")
  }

  return (
    <div className="font-sans">
      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#FF6600' }}>Hello Ciara{username}!</h1>
          <p className="text-gray-600 mb-4">Click the Start Stumbling button to find a random website or use the search below to explore a specific interest.</p>
          <Button 
            onClick={handleStumble}
            className="px-6 py-3 text-white font-bold rounded-full" 
            style={{
              background: 'linear-gradient(to bottom, #ff9900, #ff6600)',
              border: '2px solid #000',
              boxShadow: '3px 3px 0 #000',
              transition: 'all 0.1s ease-in-out',
            }}
          >
            Start Stumbling!
          </Button>
        </section>

        <section className="mb-8">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center bg-white border-2 border-blue-400 rounded px-3">
                <Input
                  type="text"
                  placeholder="Search the biggest collection of bookmarks in the multiverse"
                  className="flex-1 py-2 outline-none text-sm sm:text-base border-none"
                />
                <Button className="bg-blue-500 text-white px-4 py-1 rounded font-bold hover:bg-blue-600 transition-colors text-sm sm:text-base">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex flex-wrap mb-4">
            {[
              { id: 'fresh', label: 'Fresh Bookmarks' },
              { id: 'hot', label: 'Hotlist' },
              { id: 'tags', label: 'Explore Tags' }
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 font-bold rounded-t-lg relative text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 border-2 border-b-0 border-gray-300'
                    : 'bg-gray-200 text-gray-600 border-b-2 border-gray-300'
                }`}
                style={{
                  marginRight: '-1px',
                  boxShadow: activeTab === tab.id ? '0 -2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {tab.label}
              </Button>
            ))}
            <div className="flex-1 border-b-2 border-gray-300"></div>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            {activeTab === 'fresh' && (
              <div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  The freshest bookmarks that are flying like hotcakes on DeliciouStumble and beyond.
                </p>
                <div className="space-y-4">
                  {bookmarks.map((bookmark, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded hover:bg-gray-50">
                      <div className="w-full sm:w-20 h-20 flex-shrink-0">
                        <Image
                          src={bookmark.thumbnail}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded w-full sm:w-auto"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-blue-500 font-bold hover:underline mb-1 text-base sm:text-lg">
                          {bookmark.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mb-2">
                          via {bookmark.source}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          {bookmark.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded hover:bg-gray-200 cursor-pointer"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold text-sm flex items-center justify-center h-8">
                          {bookmark.saves}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'hot' && (
              <div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Most popular bookmarks trending right now.
                </p>
              </div>
            )}
            {activeTab === 'tags' && (
              <div>
                <p className="text-gray-600 text-sm sm:text-base">
                  Explore bookmarks by tags and categories.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

