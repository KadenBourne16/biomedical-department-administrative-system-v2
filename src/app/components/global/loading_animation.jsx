export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-white">Loading...</h2>
        <p className="text-blue-100">Please wait while we set up</p>
      </div>
    </div>
  )
}
