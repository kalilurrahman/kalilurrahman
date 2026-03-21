import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Section from "./Section";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  organisation: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I had the privilege of working under Kalil's leadership for over six years, and I can say with confidence that he is one of the most effective leaders I've worked with. He sets a clear vision, empowers his team, and consistently delivers results—without compromising on integrity or people.",
    name: "Ratan Susarla",
    title: "Associate Director",
    organisation: "Novartis",
  },
  {
    quote: "If you need a heavy hitter in E2E Testing for complex larger scale Telco programmes, look no further — Kalilur is your man. He demonstrated exceptional leadership, technology domain knowledge and the sharpest mind and attention to detail I have ever experienced. Brilliant combination of executive presence and hands-on practical expectation.",
    name: "Ajit Dhaliwal",
    title: "CIO Group Enterprise Technology",
    organisation: "Aviva",
  },
  {
    quote: "Kalilur is one of the best professionals in the industry I have come across. He strikes a fine balance between managerial and technical approach. His knowledge of software engineering process, tools and their applications is exemplary. He has the ability to pick up any new topic with ease at the right level of abstraction.",
    name: "Mahesh Venkataraman",
    title: "Managing Director — Advisory Services",
    organisation: "Accenture",
  },
  {
    quote: "Kalil is a natural leader. He knows how to adapt to every situation. He is patient, tolerant and guides his team with tolerance and how modern leaders should behave. He always was positive and built an atmosphere of trust.",
    name: "Alejandro Cruz",
    title: "Agile and Digital Products Coach Director",
    organisation: "Novartis",
  },
  {
    quote: "If you are a people leader, you learn every day from your team members. I was fortunate to have Kalil who I have learned a lot from. He is an inquisitive leader, a learner, a motivator, and a bundle of positive energy in every team he is a part of.",
    name: "Pranay Ranjan",
    title: "Senior Director, Head of Enterprise Business Applications",
    organisation: "Arm",
  },
  {
    quote: "Over the past 7 years, I have known Kalilur as a results-driven, technically savvy, customer focused senior test management professional. He is extremely dependable, very bright, and able to manage multiple streams of work concurrently. If I had any problem or issue, Kalilur was always one of the first people I would call upon for help.",
    name: "Kyle Sparks",
    title: "Associate Director",
    organisation: "Accenture",
  },
  {
    quote: "Kalil and I have worked on multiple assignments together. His invaluable advice and guidance played a significant role in helping me complete my tasks successfully. One of the qualities that stood out the most was Kalil's patience and persistence. His ability to simplify complex tasks made a significant impact.",
    name: "Samir Mishra",
    title: "Associate Director, Portfolio Management",
    organisation: "Novartis",
  },
  {
    quote: "Kalilur is very knowledgeable in all areas of the Software Delivery Lifecycle, testing in particular. His friendly and pragmatic attitude makes him a very effective communicator who is able to get stakeholders and colleagues on board with ease. I would recommend him without any hesitation.",
    name: "David Freemantle",
    title: "IT Portfolio Test Manager",
    organisation: "Vodafone",
  },
  {
    quote: "Generally a supervisor is highly technical or a people person but Kalilur has a mix of both good worlds. He has a passion to be master of new trends of IT. He protects his team and comes up with innovative and motivating ideas during crisis times. Overall a great leader and a great human being.",
    name: "Nitin Parikh",
    title: "Associate Director",
    organisation: "Accenture",
  },
  {
    quote: "Kalilur is a quick learner with a huge background in technology and a strong technical orientation. He has completed a number of challenging assignments and offered architectural blueprints and solutions. Extremely self-motivated, committed, and diligent in work.",
    name: "Manuel Schöllig",
    title: "Product Manager Soldering",
    organisation: "Inventec Performance Chemicals",
  },
  {
    quote: "Based on my interactions with Kalil, I admire his learning agility, team spirit, experience in testing centre of excellence and willingness to contribute beyond his defined role.",
    name: "Sanjana Paranjpe",
    title: "Senior Director, Development IT Operations",
    organisation: "GSK",
  },
  {
    quote: "I got the chance working with Kalilur for a couple of years and that was an amazing learning journey. He is very practical, approachable and crystal clear about the goal. I am highly impressed with his skills to keep updated with latest trends and technologies in IT industry.",
    name: "Abubakar Pasha",
    title: "Site Reliability Engineering Manager",
    organisation: "Accenture",
  },
  {
    quote: "Kalil is highly respected for his domain and technology expertise. He keeps track of the trends in the industry and shares his knowledge with his peers. He has matured into a strong release manager. Overall, it has been a pleasure having Kalil as part of the team.",
    name: "Reghu Kaippillil",
    title: "North America — Delivery Enablement and Transformation",
    organisation: "Accenture",
  },
  {
    quote: "The depth of Telecom Business knowledge Kalil exhibits is exceptional and he has been an asset to colleagues who need guidance and more importantly clients. He exhibits enormous initiative to learn new trends in industry and implement in his work consistently.",
    name: "Krishnakumar Kanniappan",
    title: "Global Head — Delivery Excellence",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Kalilur led the development and integration of the ICON catalyst project, sponsored by France Telecom. Kalilur's technical competency and personable managerial skills were a true success factor for this series of catalyst projects. I welcome the opportunity to work with Kalilur again on any project.",
    name: "Debbie Burkett",
    title: "Retired (formerly TM Forum)",
    organisation: "TM Forum",
  },
  {
    quote: "I have worked with Kalil in the Telecom group of projects for around 7-8 years. Kalil was known for his reputation to get into the details of the problem he was involved in. He clearly emerged as a thoughtful leader, with technical, telecom and architectural expertise.",
    name: "Srivatsan Parthasarathy",
    title: "Senior Vice President",
    organisation: "Infinite Computer Solutions",
  },
  {
    quote: "Kalilur is a very innovative and assiduous manager, with exceptional people management skills. He has proven astonishing drive and skills to drive the offshore delivery teams and has established very good client and stakeholder relationship management.",
    name: "Mushtaq Hussain",
    title: "Principal Director",
    organisation: "Accenture",
  },
  {
    quote: "I worked briefly with Kalilur at Cognizant. Kalilur came across as a very bright person within a few days after getting to know him. He is very personable, well read and sincere. I continue to have fond memories of my interactions with him.",
    name: "Vish Ramamurti",
    title: "Senior Director of Machine Learning",
    organisation: "Vagaro",
  },
  {
    quote: "Kalil had made significant contributions to TCS and always went a step beyond his normal duties to make a difference. Technically Kalil always kept himself up to date with the market trends and never shied away from challenges.",
    name: "Sadeesh C",
    title: "Pre-Sales Head, Media & Information Services",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Kalilur is technically very strong and possesses great communications skills. He was also a great QUIZ person.",
    name: "Vijayakumar Ekambaram",
    title: "Business Unit Head, BFSI APAC",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Kalil is a great guy to work with. He was a great managerial asset to the team allowing us to put up a great show during the entire sales cycle. He proved to be highly resourceful, SME on Telecom outsourcing industry and a great Project Manager. Ultimately we won the deal and Kalil was one of the key contributors.",
    name: "Sanyog Jain",
    title: "Co-Founder",
    organisation: "Blue Nectar Ayurved",
  },
  {
    quote: "Kalil's knowledge and understanding of the competition is phenomenal and an asset to any business development team. His work enthusiasm and go-get attitude are contagious. It is certainly a pleasure to work with him.",
    name: "Indrasena Pamulapati",
    title: "Senior Director, Delivery Partner",
    organisation: "Cognizant",
  },
  {
    quote: "I've reported to Kalil, who is result oriented. He is a person with clarity and he knows what he wants and expects. One of the best techy and ambitious professionals I've seen.",
    name: "Poyyamozhi Kuttalam",
    title: "Senior Program/Product Manager",
    organisation: "McKesson",
  },
  {
    quote: "Kalil was friendly, professional and dedicated in his work as an E2E test service manager for a large telecoms client. I would recommend Kalil for any large scale application or test outsourcing senior management role.",
    name: "Adam Lutz",
    title: "SAP Pharma — QA Associate Director",
    organisation: "Accenture",
  },
  {
    quote: "Kalil has very strong technical orientation and is a quick learner. He has delivered several complex engagements and provided solutions and architecture blueprints. Very dedicated, self-motivated with very good work ethic.",
    name: "Sudhakar Gudala",
    title: "Senior Vice President — Global Head CPG",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Kalilur was known for his penchant for details, being the Quiz Club Lead. He is a very detail-oriented manager and very hard working; Kalil is very resourceful and has helped his colleagues frequently in projects.",
    name: "Ravichandran Raghunathan",
    title: "Vice President",
    organisation: "Cognizant",
  },
  {
    quote: "I had an opportunity to work with Kalilur during 2006. Kalilur is very friendly and impressed with know-how on any domain and technical nuances. He could get into any depth, even at architecture level, on any topics — which is unique for him.",
    name: "Muralidhar Singh",
    title: "Segment Head — Technology Business North Americas",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Kalil is a manager with lots of technical knowledge and has a passion to work closely with his associates to get rid of their issues. He's got good team-building skills.",
    name: "Mugunthan Rajaram",
    title: "AI Digital Transformation Consultant",
    organisation: "TCS",
  },
  {
    quote: "Kalilur was a good friend of me at school. I enjoyed his company for his vast general knowledge on any subject we talked about. He was a great people person and was a quick learner.",
    name: "Anand N Sundaram",
    title: "Senior Director R&D",
    organisation: "Broadcom Inc.",
  },
  {
    quote: "Kalilur is a very intelligent senior manager and it has been a real pleasure working with him. He has a very 'can do' attitude to getting the job done and adds realism and pragmatism to any difficult decisions.",
    name: "Ian Bradley",
    title: "Information Technology Specialist",
    organisation: "Various Companies",
  },
  {
    quote: "I have worked with Kalilur in Accenture for Vodafone UK where Kalilur was a results-oriented, high-energetic leader who could perform to the highest level. He has the killer instinct to go for any challenge and always accomplished the task in time.",
    name: "Karthikeyan S",
    title: "Director",
    organisation: "GREENTREND LIMITED",
  },
  {
    quote: "Kalil is a detail-oriented manager who watches the balance sheet like a hawk without losing sight of the strategic objective.",
    name: "Srinivasan T",
    title: "HOBS Operations E2E Delivery Management",
    organisation: "Tata Consultancy Services",
  },
  {
    quote: "Chandrasekaran confirms Kalil has strong technical knowledge with Telco domain expertise. He is considered as a Technical Expert and consulted by other Project leads and Technical leads for his technical expertise.",
    name: "Chandrasekaran Ayyasamy",
    title: "Transformation Leader",
    organisation: "Tata Consultancy Services",
  },
];

const INITIAL_COUNT = 6;

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);

  return (
    <Section
      id="testimonials"
      title="What colleagues say"
      subtitle={`${testimonials.length} recommendations received from leaders across the industry.`}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index < INITIAL_COUNT ? index * 0.08 : 0 }}
            className="border-l-4 border-teal bg-card p-6 shadow-sm transition-transform duration-200 hover:-translate-y-[2px]"
          >
            <p className="mb-5 text-sm italic leading-relaxed text-muted-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              <p className="text-sm text-muted-foreground">{testimonial.organisation}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {testimonials.length > INITIAL_COUNT && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {showAll ? (
              <>
                Show fewer <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                View all {testimonials.length} recommendations <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Testimonials;
