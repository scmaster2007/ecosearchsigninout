
const TeamView = () => {
    return (
      <div className="py-12 lg:py-24" id="team">
      <div className="container mx-auto px-4">
        <div className="pt-16">
          <div className="md:max-w-xl lg:max-w-none mx-auto">
            <div className="mb-20 lg:mb-32 text-center">
            <h2
              className="mb-5 text-6xl md:text-7xl text-center font-medium text-[#0E5040] font-heading tracking-px-n leading-tight"
            >
              Meet our experts...
            </h2>
              <p
              className="mb-20 text-lg text-gray-900 text-center font-medium md:max-w-lg mx-auto"
            >
              Our team boasts top green energy experts, driving innovation in sustainability.          
            </p>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="py-4 pl-4 pr-4 sm:pr-10 mb-8 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Gabriel Dalton</span>
                        <span className="text-lg font-medium text-gray-700">Founder</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/gabrieldalton/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 pl-4 pr-4 sm:pr-10 mb-8 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Hemit Patel</span>
                        <span className="text-lg font-medium text-gray-700">Head of Website Development</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/hemit-patel-383ab3271/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 pl-4 pr-4 sm:pr-10 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Aparajita Lohmor</span>
                        <span className="text-lg font-medium text-gray-700">Head of Design</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/aparajitaloh/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="py-4 pl-4 pr-4 sm:pr-10 mb-8 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Glauber Bannwart</span>
                        <span className="text-lg font-medium text-gray-700">Head of Search Engine</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/gbannwart/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 pl-4 pr-4 sm:pr-10 mb-8 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Sungwoo Cho</span>
                        <span className="text-lg font-medium text-gray-700">Head of AI</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/sungwoo-cho-337732277/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 pl-4 pr-4 sm:pr-10 mb-8 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Zen Blocka</span>
                        <span className="text-lg font-medium text-gray-700">Head of Quality Assurance</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/zen-blocka/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 pl-4 pr-4 sm:pr-10 shadow-md rounded-2xl">
                  <div className="flex flex-wrap -mx-4 items-center">
                    <div className="w-full xs:w-7/12 sm:w-6/12 md:w-7/12 px-4 mb-4 xs:mb-0">
                      <div>
                        <span className="block text-xl font-medium">Aashita Sharma</span>
                        <span className="text-lg font-medium text-gray-700">Designer</span>
                      </div>
                    </div>
                    <div className="w-full xs:w-2/12 sm:w-2/12 ml-auto xs:text-right px-4">
                      <a href="https://www.linkedin.com/in/aashitasharma09/" className="inline-block text-[#0072B1] hover:text-teal-900">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"xmlns="http://www.w3.org/2000/svg">
                          <path d="M25.3333 4C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333ZM24.6667 24.6667V17.6C24.6667 16.4472 24.2087 15.3416 23.3936 14.5264C22.5784 13.7113 21.4728 13.2533 20.32 13.2533C19.1867 13.2533 17.8667 13.9467 17.2267 14.9867V13.5067H13.5067V24.6667H17.2267V18.0933C17.2267 17.0667 18.0533 16.2267 19.08 16.2267C19.5751 16.2267 20.0499 16.4233 20.3999 16.7734C20.75 17.1235 20.9467 17.5983 20.9467 18.0933V24.6667H24.6667ZM9.17333 11.4133C9.76742 11.4133 10.3372 11.1773 10.7573 10.7573C11.1773 10.3372 11.4133 9.76742 11.4133 9.17333C11.4133 7.93333 10.4133 6.92 9.17333 6.92C8.57571 6.92 8.00257 7.1574 7.57999 7.57999C7.1574 8.00257 6.92 8.57571 6.92 9.17333C6.92 10.4133 7.93333 11.4133 9.17333 11.4133ZM11.0267 24.6667V13.5067H7.33333V24.6667H11.0267Z" fill="currentColor"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default TeamView