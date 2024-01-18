// making data that used
const projectData = [
  {
    point:
      "Next.js and React front-end developer for fast business websites and applications.",
  },
  {
    point:
      "Crafting unique and captivating designs to make your project stand out.",
  },
  {
    point:
      "Open communication, sharing designs pre-implementation for your input.",
  },
  {
    point:
      "Flexibility to incorporate client feedback and swift post-project revisions.",
  },
  {
    point: "Tackling challenges proactively with a solutions-driven mindset.",
  },
  {
    point:
      "Ensuring high-quality, polished projects with meticulous attention to detail.",
  },
  {
    point:
      "Tailoring solutions to meet your business needs, prioritizing satisfaction.",
  },
  {
    point:
      "Staying updated on industry trends to bring fresh and innovative ideas.",
  },
  {
    point:
      "Efficient project management ensuring on-time delivery and respect for deadlines.",
  },
  {
    point:
      "Providing ongoing support for post-launch updates, fostering a positive client-developer relationship.",
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
              {index + 1}. {item.point}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProData;
