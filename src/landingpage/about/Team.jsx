import TeamCard from "../UI/TeamCard";

const Team = () => {

  const teamMembers = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      image: "./images/Nikhil.jpg",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      name: "Dr. Kailash Nadh",
      role: "CTO",
      image: "./images/Kailash.jpg",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      image: "./images/Venu.jpg",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.",
    },
    {
      name: "Seema Patil",
      role: "Director",
      image: "./images/Seema.jpg",
      bio: "Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      image: "./images/karthik.jpg",
      bio: `Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.`,
    },
    {
      name: "Austin Prakesh",
      role: "Director Strategy",
      image: "./images/Austin.jpg",
      bio: "Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.",
    },
  ];
  return (
    <section className="py-20 px-4 mt-20 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Grid Layout: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team;