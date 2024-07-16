import '../index.css'

const WaitlistView = () => {
  return (
    <div className="relative pb-12 md:pb-16 bg-orange-50 overflow-hidden" id="waitlist">
      <img className="absolute top-0 left-0 h-full w-full" src="https://ecosearch.oasisofchange.org/images/double-waves.png" alt="Background waves" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-sm pt-32 lg:pt-40 mx-auto">
          <form action="https://dashnexpages.net/public/easyoptins/206c690d-ca3c-42bd-ad93-5aaffa2fbe79?page=122789" method="POST" className="easy-contact-form">
            <h3 className="text-4xl text-center font-medium mb-10">Join our Waitlist</h3>
            <label className="block pl-4 mb-1 text-sm font-medium">Email</label>
            <input type="email" className="w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" name="email" required />
            <button type="submit" className="inline-flex w-full py-3 px-6 items-center justify-center text-lg font-medium text-white bg-teal-900 rounded-full transition duration-200 mt-6">Submit</button>
          </form>
        </div>
      </div>

      <div className="custom-shape-divider-top-1719585384">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>
    </div>
  );
}

export default WaitlistView;
