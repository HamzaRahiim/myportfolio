// making data that used
const projectData = [
  {
    id: 1,
    text: "Next.js and React front-end developer for fast business websites and applications.",
  },
  {
    id: 2,
    text: "Crafting unique and captivating designs to make your project stand out.",
  },
  {
    id: 3,
    text: "Open communication, sharing designs pre-implementation for your input.",
  },
  {
    id: 4,
    text: "Flexibility to incorporate client feedback and swift post-project revisions.",
  },
  {
    id: 5,
    text: "Tackling challenges proactively with a solutions-driven mindset.",
  },
  {
    id: 6,
    text: "Ensuring high-quality, polished projects with meticulous attention to detail.",
  },
  {
    id: 7,
    text: "Tailoring solutions to meet your business needs, prioritizing satisfaction.",
  },
  {
    id: 8,
    text: "Staying updated on industry trends to bring fresh and innovative ideas.",
  },
  {
    id: 9,
    text: "Efficient project management ensuring on-time delivery and respect for deadlines.",
  },
  {
    id: 10,
    text: "Providing ongoing support for post-launch updates, fostering a positive client-developer relationship.",
  },
];

const ProData = () => {
  return (
    <main>
      {/* heading  */}
      <div>
        <h1 className="text-2xl font-medium mb-6">Why Choose Me:</h1>
      </div>
      {/* main points map function on projectData */}
      <div className="grid sm:grid-cols-2 gap-4 grid-cols-1">
        {projectData.map((item, index) => (
          <div key={index}>
            <h1>
              {item.id}. {item.text}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProData;
