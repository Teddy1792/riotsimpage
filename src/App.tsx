import riotfire from "/riotfire.png";
import "./App.css";

function App() {
  return (
    <main>
      <img className="w-full h-screen object-cover" src={riotfire} />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute press-start-2p-regular inset-0 flex flex-col justify-center items-center text-white">
        <h2 className="text-4xl font-bold mb-12">RIOT SIMULATOR</h2>
        <button>Download</button>
        <button>Instagram</button>
        <button>Twitter</button>
        <button>TikTok</button>
        <button>Youtube</button>
      </div>
    </main>
  );
}

export default App;
