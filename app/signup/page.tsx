import Link from 'next/link'
import { CakeSlice } from 'lucide-react'

export default function SignupPage() {
  return (
    <div className="bg-white font-sans">
      <main className="container mx-auto mt-8 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg" style={{
          border: '2px solid #000',
          boxShadow: '5px 5px 0 #000',
        }}>
          <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#FF6600' }}>Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white font-bold rounded"
                style={{
                  background: 'linear-gradient(to bottom, #99cc00, #669900)',
                  border: '1px solid #4d7300',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-blue-500 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}

