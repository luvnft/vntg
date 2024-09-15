import "./globals.css"

import nextDynamic from "next/dynamic"
import Script from "next/script"
import { Suspense } from "react"
import { Toaster } from "sonner"
import { CallToAction } from "components/CallToAction/CallToAction"
import { Footer } from "components/Footer/Footer"
import { Modals } from "components/Modals/Modals"
import { mobileInlineScript } from "components/NavigationBar/mobileInlineScript"
import { NavigationBar } from "components/NavigationBar/NavigationBar"
import { NavItem } from "components/NavigationBar/types"
import { FlagValues } from "views/FlagValues"
import { ThirdParties } from "views/ThirdParties"
import { env } from "env.mjs"
import { Metadata } from "next"
import { GithubBadge } from "views/GithubBadge"
import { DemoModeAlert } from "views/DemoModeAlert"
import { CartView } from "views/Cart/CartView"

const DraftToolbar = nextDynamic(() => import("views/DraftToolbar"), { ssr: false })

export const revalidate = 86400

const navigationItems: NavItem[] = [
  {
    text: "Fashion",
    href: "/category/fashion",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Women",
          href: "/category/women",
          items: [
            { text: "Shirts & Blouses", href: "/category/shirts-and-blouses" },
            { text: "Blazers & Vests", href: "/category/blazers-and-vests" },
            { text: "Cardigans & Sweaters", href: "/category/cardigans-and-sweaters" },
            { text: "Dresses", href: "/category/dresses" },
            { text: "Skirts", href: "/category/skirts" },
          ],
        },
        {
          text: "Men",
          href: "/category/men",
          items: [
            { text: "T-shirts & Tanks", href: "/category/t-shirts-and-tanks" },
            { text: "Hoodies & Sweatshirts", href: "/category/hoodies-and-sweatshirts" },
            { text: "Blazers & Suits", href: "/category/blazers-and-suits" },
            { text: "Shorts", href: "/category/shorts" },
            { text: "Outerwear", href: "/category/outerwear" },
          ],
        },
        {
          text: "Kids",
          href: "/category/kids",
          items: [
            { text: "Clothing", href: "/category/clothing" },
            { text: "Activewear", href: "/category/activewear" },
            { text: "Accessories", href: "/category/kids-accessories" },
            { text: "Footwear", href: "/category/footwear" },
          ],
        },
        {
          text: "Home",
          href: "/category/home",
          items: [
            { text: "Accessories", href: "/category/accessories" },
          ],
        },
      ],
    },
  },
  {
    text: "Electronics",
    href: "/category/electronics",
    submenu: {
      variant: "text-grid",
      items: [
        {
          text: "Audio Devices",
          href: "/category/audio-devices",
          items: [
            { text: "Headphones", href: "/category/records" },
            { text: "Speakers", href: "/category/cds" },
            { text: "Speakers", href: "/category/dvds" },
          ],
        },
        {
          text: "Games",
          href: "/category/games",
          items: [
            { text: "Digital Cameras", href: "/category/retro-games" },
            { text: "Action Cameras", href: "/category/video-games" },
          ],
        },
      ],
    },
  },
  {
    text: "Sports & Outdoors",
    href: "/category/sports-and-outdoors",
    submenu: {
      variant: "text-grid",
      items: [
        {
          href: "/category/exercise-equipment",
          text: "Exercise Equipment",
        },
        {
          href: "/category/outdoor-gear",
          text: "Outdoor Gear",
        },
        {
          href: "/category/sportswear",
          text: "Sportswear",
        },
        {
          href: "/category/athletic-footwear",
          text: "Athletic Footwear",
        },
      ],
    },
  },
]

export const metadata: Metadata = {
  title: "Next.js Enterprise Commerce | Blazity",
  description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
  metadataBase: new URL(env.LIVE_URL!),
  openGraph: {
    title: "Next.js Enterprise Commerce | Blazity",
    description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Enterprise Commerce | Blazity",
    description: "AI-FIRST NEXT.JS STOREFRONT FOR COMPOSABLE COMMERCE",
    creator: "@blazity",
    images: ["/opengraph-image.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  generator: "Next.js",
  applicationName: "Next.js",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="mobileMegaMenuLogic" strategy="lazyOnload">{`${mobileInlineScript}`}</Script>

        <NavigationBar items={navigationItems} />

        {children}

        <CallToAction />
        <Footer />
        <Modals />

        <CartView />

        <Toaster position="bottom-left" />

        <DraftToolbar />

        <Suspense>
          <FlagValues />
        </Suspense>

        <Suspense>
          <ThirdParties />
        </Suspense>

        <GithubBadge />
        <DemoModeAlert />
      </body>
    </html>
  )
}
