import Link from "next/link"
import { cn } from "utils/cn"

export function AnnouncementBar({ className }: { className?: string }) {
  return (
    <div className={cn("flex h-[40px] w-full items-center justify-center text-nowrap bg-black text-center text-base/[18px] text-white", className)}>
      Follow our new
      <Link prefetch={false} href="https://tiktok.com@avintag3" className="ml-2 underline hover:no-underline">
        TikTok
      </Link>
    </div>
  )
}
