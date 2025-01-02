'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export default function TopMenu() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <nav className="bg-black text-white h-12 flex items-center">
            <div className="container mx-auto px-4">
                <div className="flex items-center h-16 justify-between">
                    <div className="flex gap-6">
                        <Link href="/news" className="text-sm hover:text-gray-300 transition-colors">
                            News
                        </Link>
                        <Link href="/deals" className="text-sm hover:text-gray-300 transition-colors">
                            Deals
                        </Link>
                        <Link href="/merch" className="text-sm hover:text-gray-300 transition-colors">
                            Merch
                        </Link>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link href="/careers" className="text-sm hover:text-gray-300 transition-colors">
                            Careers
                        </Link>
                        {/* <button className="flex items-center gap-1 text-sm hover:text-gray-300 transition-colors">
                            <Globe className="h-3 w-3" />
                            <span>EN</span>
                        </button>
                        <Link href="/login" className="text-sm hover:text-gray-300 transition-colors">
                            Log in
                        </Link> */}
                    </div>
                </div>
            </div>
        </nav >
    )
}