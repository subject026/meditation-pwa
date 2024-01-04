function App() {
  return (
    <div className="min-h-screen bg-orange-400 flex items-center justify-center flex-col gap-12">
      <h1 className="font-bold text-4xl text-purple-800">Heyy :)</h1>
      <audio controls src="/forest-rain.mp3" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/uqSz1ddkZvY?si=6RM84r-c1ajXKb6k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default App;
