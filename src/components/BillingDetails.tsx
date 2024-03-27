const BillingDetails = () => {
  return (
    <form>
      <div className="md:grid-cols- mb-6 grid gap-6">
        <div>
          <label
            for="first_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label
            for="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email name
          </label>
          <input
            type="text"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <div>
          <label
            for="locale"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Locale
          </label>
          <input
            type="text"
            id="locale"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="locale"
            required
          />
        </div>
        <div>
          <label
            for="address"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            address
          </label>
          <input
            type="text"
            id="address"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Address"
            required
          />
        </div>
        <div>
          <label
            for="city"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            city
          </label>
          <input
            type="text"
            id="city"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="City"
            required
          />
        </div>

        <div>
          <label
            for="state"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            state
          </label>
          <input
            type="text"
            id="state"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="State"
            required
          />
        </div>

        <div>
          <label
            for="zip"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            zip
          </label>
          <input
            type="text"
            id="zip"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Zip"
            required
          />
        </div>
      </div>
      <button
        type="button"
        class="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Checkout
      </button>
    </form>
  );
};

export default BillingDetails;
