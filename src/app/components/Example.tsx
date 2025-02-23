export default function Example() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20 text-center">
        <h1 className="text-5xl font-bold text-minion-yellow">
          Welcome to Gru's Lair
        </h1>
        <p className="text-gray-300 mt-4">
          Where villains, minions, and crazy inventions come to life!
        </p>
        <button className="mt-6 px-6 py-3 text-gray-900 font-bold bg-minion-yellow rounded-lg shadow-lg transition duration-300 hover:bg-crimson-red hover:text-white hover:shadow-crimson-red-lg neon-glow">
          Join the Lair
        </button>
      </section>

      {/* Family & Minions Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-4xl font-semibold text-electric-blue">
          Meet the Family & Minions
        </h2>
        <p className="text-gray-400 mt-2">
          The mastermind, the minions, and the unexpected heroes.
        </p>
      </section>

      {/* Inventions Section */}
      <section className="bg-gray-800 py-16 px-8 text-center">
        <h2 className="text-4xl font-semibold text-crimson-red">
          Gru’s Greatest Inventions
        </h2>
        <p className="text-gray-400 mt-2">
          From shrink rays to cookie robots – genius at work.
        </p>
      </section>
    </div>
  );
}
