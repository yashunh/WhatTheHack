import Image from 'next/image'

export default function OurTeamPage() {
  const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=200&width=200' },
    { name: 'John Smith', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Alice Johnson', role: 'Lead Designer', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Bob Williams', role: 'AI Specialist', image: '/placeholder.svg?height=200&width=200' },
  ]

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="text-lg text-muted-foreground mb-8">
        The Reflect team is a diverse group of thinkers, creators, and problem-solvers. 
        We&apos;re united by our passion for building tools that enhance human cognition and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-muted-foreground">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

