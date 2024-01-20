// making data that used
const projectData = [
  "Next.js and React front-end developer for fast business websites and applications.",

  "Crafting unique and captivating designs to make your project stand out.",

  "Open communication, sharing designs pre-implementation for your input.",

  "Flexibility to incorporate client feedback and swift post-project revisions.",

  "Tackling challenges proactively with a solutions-driven mindset.",

  "Ensuring high-quality, polished projects with meticulous attention to detail.",

  "Tailoring solutions to meet your business needs, prioritizing satisfaction.",

  "Staying updated on industry trends to bring fresh and innovative ideas.",

  "Efficient project management ensuring on-time delivery and respect for deadlines.",

  "Providing ongoing support for post-launch updates, fostering a positive client-developer relationship.",
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
              {index + 1}. {item}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProData;
