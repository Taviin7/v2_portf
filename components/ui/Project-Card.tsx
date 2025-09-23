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
  <Card className="overflow-hidden bg-gradient-to-br from-[#333]/80 to-[#0d0d0d] border border-gray-500/30 rounded-xl hover:shadow-xl hover:shadow-white/10 transition-all duration-300 hover:opacity-80">
      <div className="relative h-48">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-sm absolute top-5 right-5 text-white bg-[#333]/80 rounded-md p-3 z-10 hover:bg-white hover:text-[#333] transition-colors duration-300">
          <ArrowUpRight className="h-5 w-5 text-white group-hover:text-[#333] transition-colors duration-300" />
        </Link>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform rounded-t-2xl"
        />
      </div>
      <CardContent className="p-6 text-white flex-1">
        <h3 className="font-bold text-xl text-gray-200 mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center text-gray-300 rounded-md bg-[#333]/80 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={link} target="_blank" className="inline-flex items-center gap-2 text-base text-gray-300 group hover:text-white transition-colors duration-300">
          <Github className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
          Ver no GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}
