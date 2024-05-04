const LandingPage = () => {
  return (
    <div className="main-page-container">
      <div className="landing-page flex flex-col space-y-4 max-w-2xl">
        <div className="profile-container">
          <img
            src="\src\assets\profile.jpg"
            className="w-16 rounded-full border border-gray-200 shadow-sm"
            alt=""
          />
        </div>

        <div className="heading text-4xl md:text-5xl font-bold">
          Software designer, founder, and amateur astronaut.
        </div>

        <div className="">
          <p>
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
        </div>

        <div className="social-media-icons-container flex space-x-5">
          <div className="media-icon text-xl">
            <i className="fa-brands fa-github" style={{ color: "#a19e97" }}></i>
          </div>
          <div className="media-icon text-xl">
            <i
              className="fa-brands fa-linkedin"
              style={{ color: "#a19e97" }}
            ></i>
          </div>
          <div className="media-icon text-xl">
            <i
              className="fa-brands fa-instagram"
              style={{ color: "#a19e97" }}
            ></i>
          </div>
          <div className="media-icon text-xl">
            <i
              className="fa-brands fa-x-twitter"
              style={{ color: "#a19e97" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="second-section -ml-[23%] sm:-ml-[20%] my-20 flex w-[500%]">
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            // src="./assets/l-page1.png"
            src="\src\assets\l-page1.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder -rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page2.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page3.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page4.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
        <div className="image-holder rotate-2 w-[10%] md:w-[5%] mx-2 md:mx-5  overflow-hidden">
          <img
            src="\src\assets\l-page5.png"
            className="h-[80%] w-[120%] object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="third-section flex md:flex-row flex-col my-20">
        <div className="left flex flex-col w-[100%]">
          <div className="project1 flex flex-col my-5 hover:bg-gray-50 px-4 py-4 rounded-xl">
            <p className="border-l-2 border-b-gray-600 text-gray-500 px-4 my-3">
              September 5, 2024
            </p>
            <h2 className="font-semibold my-3">
              Crafting a design system for a multiplanetary future
            </h2>
            <p className="text-sm text-stone-600">
              Most companies try to stay ahead of the curve when it comes to
              visual design, but for Planetaria we needed to create a brand that
              would still inspire us 100 years from now when humanity has spread
              across our entire solar system.
            </p>
            <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
              Read article &gt;
            </p>
          </div>
          <div className="project2 flex flex-col my-5 hover:bg-gray-50 px-4 py-4 rounded-xl">
            <p className="border-l-2 border-b-gray-600 text-gray-500 px-4 my-3">
              July 14, 2022
            </p>
            <h2 className="font-semibold my-3">
              Rewriting the cosmOS kernel in Rust
            </h2>
            <p className="text-sm text-stone-600">
              When we released the first version of cosmOS last year, it was
              written in Go. Go is a wonderful programming language, but it’s
              been a while since I’ve seen an article on the front page of
              Hacker News about rewriting some important tool in Go and I see
              articles on there about rewriting things in Rust every single
              week.
            </p>
            <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
              Read article &gt;
            </p>
          </div>
          <div className="project3 flex flex-col my-5 hover:bg-gray-50 px-4 py-4 rounded-xl">
            <p className="border-l-2 border-b-gray-600 text-gray-500 px-4 my-3">
              September 2, 2022
            </p>
            <h2 className="font-semibold my-3">
              Introducing Animaginary: High performance web animations
            </h2>
            <p className="text-sm text-stone-600">
              When you’re building a website for a company as ambitious as
              Planetaria, you need to make an impression. I wanted people to
              visit our website and see animations that looked more realistic
              than reality itself.
            </p>
            <p className="my-4 text-[#14b8a6] text-sm font-semibold cursor-pointer">
              Read article &gt;
            </p>
          </div>
        </div>

        <div className="right flex flex-col w-[100%] my-5 lg:pl-32 px-4 py-0">
          <div className="contact-card p-5 border border-b-gray-700 rounded-lg">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-stone-500">Stay up to date</h3>
            </span>
            <p className="text-stone-400 my-3">
              Get notified when i publish something new, and unsubscribe at
              anytime.
            </p>
            <div className="contact-card-fields flex gap-4 my-2">
              <input
                className="p-1 shadow-sm border border-b-gray-500 w-[84%] rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
              <button className="bg-black text-white py-3 px-2 rounded-lg">
                Join
              </button>
            </div>
          </div>

          <div className="work-exp p-5 border border-b-gray-700 rounded-lg my-10">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-stone-500">Work</h3>
            </span>
            <div className="companies flex flex-col my-3">
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border">
                    <img
                      src="\src\assets\company-logo1.png"
                      className="w-14 rounded-3xl border-white border-8"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm">Planetaria</h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>

              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border">
                    <img
                      src="\src\assets\company-logo2.png"
                      className="w-14 rounded-3xl border-white border-8"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm">Planetaria</h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border">
                    <img
                      src="\src\assets\company-logo3.png"
                      className="w-14 rounded-3xl border-white border-8"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm">Planetaria</h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border">
                    <img
                      src="\src\assets\company-logo4.png"
                      className="w-14 rounded-3xl border-white border-8"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm">Planetaria</h5>
                    <p className="text-stone-400 text-sm">CEO</p>
                  </div>
                </div>

                <div className="year">
                  <span className="timeline text-stone-400 text-xs">
                    2019-present
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="px-4 py-2 w-[100%] border rounded-lg bg-gray-100 font-semibold">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LandingPage;
