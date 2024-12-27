'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SearchIcon, Bookmark } from 'lucide-react'
import { useState } from 'react'
import { CakeSlice, Search, UserPlus, FileSliders } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('fresh')

  const bookmarks = [
    {
      title: "The Future of Web Development",
      source: "techblog.com",
      tags: ["webdev", "javascript", "future"],
      saves: 38,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 12
    },
    {
      title: "10 Must-Have Developer Tools for 2024",
      source: "devtools.io",
      tags: ["tools", "development", "productivity"],
      saves: 156,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 55
    },
    {
      title: "Understanding Modern CSS Architecture",
      source: "cssninja.dev",
      tags: ["css", "webdesign", "frontend"],
      saves: 95,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 22
    },
    {
      title: "The Future of Web Development",
      source: "techblog.com",
      tags: ["webdev", "javascript", "future"],
      saves: 38,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 12
    },
    {
      title: "10 Must-Have Developer Tools for 2024",
      source: "devtools.io",
      tags: ["tools", "development", "productivity"],
      saves: 156,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 55
    },
    {
      title: "Understanding Modern CSS Architecture",
      source: "cssninja.dev",
      tags: ["css", "webdesign", "frontend"],
      saves: 95,
      thumbnail: "/placeholder.svg?height=80&width=80",
      relatedTweets: 22
    }
  ]

  return (
    <div className="font-sans">
      <main className="container mx-auto mt-8 px-4">
        <section className="text-center mb-12">
          <div className="bg-[#4285F4] py-8 px-4 relative">
           <Bookmark className="text-white w-24 h-24 absolute top-10 left-6" />
            <div className="container mx-auto flex items-start pl-28 pt-2">
              <div className="text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-tight">
                  Stumble upon the tastiest bookmarks<br />
                  on the world wide web!
                </h2>
                <p className="text-lg sm:text-xl mb-6 text-white">
                  Surf web pages recommended by your friends and save your favorites 
                </p>
              </div>
            </div>
            <button 
              onClick={() => router.push('/signin')}
              className="px-6 py-3 text-white font-bold rounded-full absolute bottom-4 right-4" 
              style={{
                background: 'linear-gradient(to bottom, #ff9900, #ff6600)',
                border: '2px solid #000',
                boxShadow: '3px 3px 0 #000',
                transition: 'all 0.1s ease-in-out',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #ffaa00, #ff7700)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to bottom, #ff9900, #ff6600)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Start Stumbling!
            </button>
          </div>
          {/* Remove this empty div */}
          {/* <div className="mt-8">
            ...
          </div> */}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { icon: Bookmark, title: 'Bookmark Sites', description: 'Save and organize your favorite websites.' },
            { icon: Search, title: 'Discover Content', description: 'Stumble upon exciting new web pages.' },
            { icon: UserPlus, title: 'Create Profile', description: 'Customize your bookmarking experience.' },
            { icon: FileSliders, title: 'Tailor Preferences', description: 'Set your discovery and stumbling options.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center retro-card" style={{
              border: '3px solid #ea580c', // This is the hex code for Tailwind's orange-600
              background: '#ffffff',
            }}>
              <div className="mb-4 flex justify-center">
                <feature.icon size={36} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-blue-600">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-700">{feature.description}</p>
            </div>
          ))}
        </section>
        <style jsx>{`
          .retro-card {
            transition: transform 0.2s ease-in-out;
          }
          .retro-card:hover {
            transform: translate(-2px, -2px);
            box-shadow: 2px 2px 0 #ea580c;
          }
        `}</style>

        {/* New Search Section */}
        <section className="mb-8">
          <div className="bg-gray-100 p-4 rounded-lg border-2 border-gray-300">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center bg-white border-2 border-blue-400 rounded px-3">
                <input
                  type="text"
                  placeholder="Search the biggest collection of bookmarks in the multiverse"
                  className="flex-1 py-2 outline-none text-sm sm:text-base"
                />
                <button className="bg-blue-500 text-white px-4 py-1 rounded font-bold hover:bg-blue-600 transition-colors text-sm sm:text-base">
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* New Tabs Section */}
        <section className="mb-8">
          <div className="flex flex-wrap mb-4">
            {[
              { id: 'fresh', label: 'Fresh Bookmarks' },
              { id: 'hot', label: 'Hotlist' },
              { id: 'tags', label: 'Explore Tags' }
            ].map((tab) => (
              <button
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
              </button>
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
                      <div className="w-20 h-20 mx-auto sm:mx-0 sm:w-20 sm:h-20 flex-shrink-0">
                        <Image
                          src={bookmark.thumbnail}
                          alt=""
                          width={80}
                          height={80}
                          className="rounded w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-blue-500 font-bold hover:underline mb-1 text-base sm:text-lg">
                          {bookmark.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm mb-2">
                          via {bookmark.source}
                        </p>
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
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
                      <div className="flex sm:flex-col items-center justify-center sm:items-end gap-2 mt-2 sm:mt-0">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded font-bold text-sm flex items-center justify-center h-8">
                          {bookmark.saves}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {bookmark.relatedTweets}
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

