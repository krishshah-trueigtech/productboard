'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-text-main">
          Something went wrong!
        </h2>
        
        <p className="text-text-muted max-w-md mx-auto">
          We encountered an unexpected error while loading this page. 
          Please try again or return to the dashboard.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()} 
            className="btn-primary shadow-lg shadow-primary/20"
          >
            Try again
          </button>
          
          <button
            onClick={() => window.location.href = '/dashboard'}
            className="px-4 py-2 text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default Error;