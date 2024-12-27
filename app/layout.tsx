import Link from 'next/link'
import { CakeSlice, UserIcon, LogOut } from 'lucide-react'
import './globals.css'

export const metadata = {
  title: 'DeliciouStumble',
  description: 'Bookmark and discover the web!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Mock authentication state (replace with real auth logic in a full implementation)
  const isLoggedIn = false

  return (
    <html lang="en">
      <body className="min-h-screen bg-white font-sans" style={{ fontFamily: 'Arial, sans-serif' }}>
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <Link href="/" className="text-2xl sm:text-3xl font-bold text-white">
                DeliciouStumble
              </Link>
            </div>
            <nav className="flex flex-col sm:flex-row items-center gap-4">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="w-full sm:w-auto px-4 py-1.5 font-bold text-white rounded text-center"
                    style={{
                      background: 'linear-gradient(to bottom, #99cc00, #669900)',
                      border: '1px solid #4d7300',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    className="w-full sm:w-auto px-4 py-1.5 font-bold text-white rounded text-center flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, #ff9900, #ff6600)',
                      border: '1px solid #cc5200',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    <UserIcon className="mr-2" size={18} />
                    Profile
                  </Link>
                  <Link
                    href="/logout"
                    className="w-full sm:w-auto px-4 py-1.5 font-bold text-white rounded text-center flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, #4d90fe, #4787ed)',
                      border: '1px solid #3079ed',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    <LogOut className="mr-2" size={18} />
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <span className="font-semibold mb-2 sm:mb-0">It&apos;s Free!</span>
                  <Link
                    href="/signup"
                    className="w-full sm:w-auto px-4 py-1.5 font-bold text-white rounded text-center"
                    style={{
                      background: 'linear-gradient(to bottom, #99cc00, #669900)',
                      border: '1px solid #4d7300',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Join Now
                  </Link>
                  <Link
                    href="/signin"
                    className="w-full sm:w-auto px-4 py-1.5 font-bold text-white rounded text-center"
                    style={{
                      background: 'linear-gradient(to bottom, #4d90fe, #4787ed)',
                      border: '1px solid #3079ed',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                    }}
                  >
                    Sign In
                  </Link>
                </>
              )}
            </nav>
          </div>
        </header>

        {children}

        <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p className="text-sm sm:text-base">&copy; 2024 DeliciouStumble. All rights reserved.</p>
            <p className="mt-2 text-sm sm:text-base">A nostalgic homage to Delicious and StumbleUpon</p>
            <div className="mt-2">
              <Link href="#" className="hover:underline mx-2 text-sm sm:text-base">Privacy Policy</Link>
              <Link href="#" className="hover:underline mx-2 text-sm sm:text-base">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

