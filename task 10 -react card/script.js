const root = ReactDOM.createRoot(document.getElementById("root"));
const Card = () => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="nature"
      />
      <h2>Beautiful Scenery</h2>
      <p>
        This is a beautiful scenery of mountains during sunset. The vibrant
        colors and serene atmosphere make it a perfect place to relax and
        unwind.
      </p>
      <button>Learn More</button>
    </div>
  );
};

root.render(<Card />);
