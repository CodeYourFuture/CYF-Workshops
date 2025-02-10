import cyfLogo from "/cyf.svg";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 h-72 bg-gradient-to-r from-purple-600 to-indigo-600">
        <header className="container mx-auto px-4 content-center ">
          <h1 className="text-3xl font-bold text-indigo-50 ">
            Vite React Express CYF
          </h1>
        </header>
        <main className="container mx-auto px-4 content-center ">
          <a href="https://curriculum.codeyourfuture.io" target="_blank">
            <img src={cyfLogo} className="max-w-xs" alt="CYF logo" />
          </a>
        </main>
      </div>
    </>
  );
}

export default App;
