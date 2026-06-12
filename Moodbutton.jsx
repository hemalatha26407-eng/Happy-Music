const MoodButton = ({ mood, setMood, activeMood }) => {
  return (
    <button
      className={activeMood === mood ? "active-btn" : "mood-btn"}
      onClick={() => setMood(mood)}
    >
      {mood}
    </button>
  );
};

export default MoodButton;