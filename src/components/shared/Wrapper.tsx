const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-lg mx-auto px-2">{children}</div>;
};

export default Wrapper;
