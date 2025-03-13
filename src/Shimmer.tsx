const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
      <div key={i}>
        <div className="w-64 h-64 bg-gray"></div>
      </div>
    ));
};

export default Shimmer;
