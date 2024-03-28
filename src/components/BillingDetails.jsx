const BillingDetails = ({ handleSubmit }) => {
  return (
    <form className="mt-10 w-1/2 border-2 p-10" onSubmit={handleSubmit}>
      <div className="md:grid-cols mb-6 grid gap-6">
        <p>Billing details</p>
        <div>
          <label
            html_for="first_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            First name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="First name"
            required
          />
        </div>
        <div>
          <label
            html_for="last_name"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Last name"
            required
          />
        </div>
        <div>
          <label
            html_for="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Email name
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Email"
            required
          />
        </div>

        <p>Card details</p>
        <div>
          <label
            html_for="number"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Zip"
            required
          />
        </div>

        <div>
          <label
            html_for="expiry_date"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Expiry date
          </label>
          <input
            type="text"
            id="expiry_date"
            name="expiry_date"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Zip"
            required
          />
        </div>

        <div>
          <label
            html_for="cvv"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            cvv
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Zip"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Checkout
      </button>
    </form>
  );
};

export default BillingDetails;
