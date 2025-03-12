const TanoboraCard = () => {
  return (
    <div className="border shadow-md p-2 rounded-md space-y-2">
      <img src="tanobora.jpg" alt="tanobora" />

      <div className="space-y-2">
        <div>Starts: 15:00</div>

        <button className="primary-btn w-full hover:bg-secondary">play</button>
      </div>
    </div>
  );
};

export default TanoboraCard;
