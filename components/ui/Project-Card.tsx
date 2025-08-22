import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-[#0d0d0d] border border-[#23263A] rounded-xl hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:opacity-80">
      <div className="relative h-48">
      <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm absolute top-5 right-5 text-white bg-[#23263A]/50 rounded-md p-2 z-10 hover:bg-blue-500">
          <ArrowUpRight className="h-4 w-4 text-white" />
        </Link>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform"
        />
      </div>
      <CardContent className="p-4 text-white">
        <h3 className="font-semibold text-xl text-gray-300 mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground text-gray-400 mb-4 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-gray-300 rounded-md bg-[#23263A] px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm text-gray-300 hover:underline">
          <Github className="h-4 w-4 text-gray-300" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
