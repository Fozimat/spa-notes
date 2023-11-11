import "./App.css";

function App() {
  return (
    <>
      <nav class="bg-blue-500 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
              Notes App
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="text-gray-100 hover:text-gray-300 md:p-0 dark:text-white dark:hover:text-red-500"
                >
                  Aktif
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-100 hover:text-gray-300 md:p-0 dark:text-white dark:hover:text-red-500"
                >
                  Arsip
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="flex-grow flex-shrink overflow-y-auto p-4">
        <h4 class="text-3xl font-bold max-w-screen-xl mx-auto py-2">
          Catatan Aktif
        </h4>
        <div class="max-w-screen-xl mx-auto">
          <input
            type="text"
            placeholder="Cari catatan..."
            class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="max-w-screen-xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
          <div class="bg-white p-4 rounded-md shadow-md">
            <h2 class="text-xl font-semibold mb-2">Judul Catatan 1</h2>
            <p class="text-gray-500 text-sm mb-2">Waktu: 2023-10-31 12:00 PM</p>
            <p class="text-gray-800">
              Isi catatan akan ditampilkan di sini. Ini adalah contoh isi
              catatan yang panjang.
            </p>
          </div>
        </div>
      </div>

      <div class="fixed bottom-0 right-0 p-4">
        <button class="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
