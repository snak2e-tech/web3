import { useState } from "react"
import { Mail, Lock, AlertCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleWalletConnect = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-blue-500/20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202568-01-23%20at%2002.30.10-YpdCRm3LxCZXNCCK6zk5uq2yoDsoBk.png')",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-lg mx-auto p-4 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="inline-block text-4xl md:text-5xl font-bold tracking-tight">
            <div className="relative inline-flex items-center justify-center">
              <span className="bg-gradient-to-r from-orange-300/95 to-amber-400/95 px-6 py-2 rounded-[40px] text-white shadow-lg border border-amber-200/30 backdrop-blur-sm">
                Build
                <Sparkles className="absolute -right-3 -top-3 h-6 w-6 text-amber-200" />
              </span>
            </div>
            <br />
            <span className="bg-gradient-to-r from-orange-300/95 to-amber-400/95 px-6 py-2 rounded-[40px] text-white shadow-lg mt-3 inline-block border border-amber-200/30 backdrop-blur-sm">
              YOUR CREDIT
            </span>
          </h1>
          <p className="text-xl">
            <span className="bg-gradient-to-r from-orange-300/90 to-amber-400/90 px-6 py-2 rounded-[40px] text-white shadow-md inline-flex items-center gap-2 border border-amber-200/30 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-amber-200" />
              Join our community of global credit builders
            </span>
          </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl rounded-[40px]">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-bold text-gray-900">Sign in</CardTitle>
            <CardDescription className="text-gray-600">Get started with email or MetaMask</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Web3 Wallet Options */}
            <Button
              variant="outline"
              className="w-full bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 rounded-[60px]"
              onClick={handleWalletConnect}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 flex-shrink-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metamask-logo-removebg-preview-MUfotG1RVublSdxVseQnYp5ozo8NIZ.png"
                    alt="MetaMask"
                    className="w-full h-full"
                  />
                </div>
                {isLoading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-400 border-t-gray-900" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <span>Continue with MetaMask</span>
                )}
              </div>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-3 text-gray-500 font-medium">Or continue with email</span>
              </div>
            </div>

            {/* Email Form */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    className="pl-10 bg-white border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 rounded-[60px]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 bg-white border-gray-200 text-gray-900 rounded-[40px]"
                  />
                </div>
                <label className="inline-flex items-center space-x-2 text-sm text-gray-600 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={(e) => setShowPassword(e.target.checked)}
                    className="rounded-full border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <span>Show password</span>
                </label>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-[40px]">Sign In with Email</Button>
            </div>

            <div className="flex items-center justify-between">
              <a href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Forgot password?
              </a>
              <a href="/signup" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Create account
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Web3 Info Card */}
        <Card className="bg-white/95 backdrop-blur-md border-0 shadow-xl mt-4 rounded-[40px]">
          <CardContent className="p-4">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900">Why use a Web3 wallet?</h3>
                <p className="text-sm text-gray-600">
                  MetaMask will be needed to fully use the platform: • Lenders need it to send loans • Borrowers need it
                  to request loans. You can start with email login now and connect your MetaMask wallet later.
                </p>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                >
                  Get MetaMask
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}