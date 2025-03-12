const TanoboraCard = () => {
  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-lg max-w-xl mx-auto">
      <p className="text-center text-lg font-semibold">Predict & Win</p>
      <div className="flex justify-center items-center my-4">
        <img
          src="/ncs.png"
          alt="Gor Mahia"
          className="w-16 h-16 object-contain"
        />
        <span className="text-2xl font-bold mx-4">VS</span>
        <img
          src="/sharks.png"
          alt="Shabana"
          className="w-16 h-16 object-contain"
        />
      </div>
      <p className="text-center">
        2 pm, Saturday 11th May 2025, Mamboleo Stadium
      </p>
      <ul className="list-none text-center my-4">
        <li className="flex items-center justify-center">
          <span className="mr-2">✔️</span> Predict 5 GOR MAHIA FC events
        </li>
        <li className="flex items-center justify-center">
          <span className="mr-2">✔️</span> Play with Ksh 20/=
        </li>
        <li className="flex items-center justify-center">
          <span className="mr-2">✔️</span> Win
        </li>
      </ul>
      <div className="flex justify-between text-center text-gray-500 font-bold">
        <div>
          <p className="text-xl">🥇 Ksh 700/=</p>
        </div>
        <div>
          <p className="text-xl">🥈 Ksh 150/=</p>
        </div>
        <div>
          <p className="text-xl">🥉 Ksh 100/=</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded-lg text-lg font-semibold">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default TanoboraCard;
