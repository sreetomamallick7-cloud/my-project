import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { ProductDiscovery } from "@/components/product-discovery"
import { ProductStory } from "@/components/product-story"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductDiscovery />
      <ProductStory />
    </main>
  )
}
