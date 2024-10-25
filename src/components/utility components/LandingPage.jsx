import MediaIcon from "./Mediacon";
import OverviewArticle from "./OverviewArticle";
import resume from "../../assets/Copy of Resume.pdf";
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

        <div className="heading text-4xl md:text-5xl font-bold dark:text-white">
          Software designer, adviser, and amateur psychophile.
        </div>

        <div className="">
          <p className="dark:text-stone-500">
            I’m Kumar, a software designer by profession and psychophile based
            in Pune City. I’m strongly interested in psychology - The science of
            human thought, emotion, and learning, including interpersonal
            relationships.
          </p>
        </div>

        <div className="social-media-icons-container flex space-x-5">
          <MediaIcon class="fa-brands fa-github" link="#" />
          <MediaIcon class="fa-brands fa-linkedin" link="#" />
          <MediaIcon class="fa-brands fa-instagram" link="#" />
          <MediaIcon class="fa-brands fa-x-twitter" link="#" />
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
          <OverviewArticle />
          <OverviewArticle />
          <OverviewArticle />
        </div>

        <div className="right flex flex-col w-[100%] my-5 lg:pl-32 px-4 py-0">
          <div className="contact-card p-5 border dark:border-gray-700 rounded-lg">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-sm text-stone-900 dark:text-gray-50">
                Stay up to date
              </h3>
            </span>
            <p className="text-stone-400 dark:text-stone-500 my-3 text-sm">
              Get notified when i publish something new, and unsubscribe at
              anytime.
            </p>
            <div className="contact-card-fields flex gap-4 my-2">
              <input
                className="dark:bg-[#161618] dark:focus:outline-none focus:border-none dark:text-stone-50 dark:border-gray-700 p-2 shadow-sm border w-[84%] rounded-md"
                type="text"
                name=""
                id=""
                placeholder="Email address"
              />
              <button className="bg-black text-sm font-bold  text-white py-3 dark:hover:bg-[#35353a] dark:bg-[#3f3f46] dark:text-stone-50 px-2 rounded-lg">
                Join
              </button>
            </div>
          </div>

          <div className="work-exp p-5 border dark:border-gray-700 rounded-lg my-10">
            <span className="flex gap-2 items-center text-stone-600">
              <i className="fa-solid fa-briefcase"></i>
              <h3 className="font-semibold text-stone-500 dark:text-stone-100">
                Work
              </h3>
            </span>
            <div className="companies flex flex-col my-3">
              <div className="work-holder flex my-1 justify-between items-baseline">
                <div className="company-logo rounded-3xl flex flex-row items-center gap-3">
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\company-logo1.png"
                      className="w-14 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
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
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\company-logo2.png"
                      className="w-14 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
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
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\company-logo3.png"
                      className="w-14 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
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
                  <span className="rounded-3xl border-gray-200 border dark:border-none">
                    <img
                      src="\src\assets\company-logo4.png"
                      className="w-14 rounded-3xl border-white border-8 dark:border-[#1e1e20]"
                      alt=""
                    />
                  </span>

                  <div className="company-info">
                    <h5 className="font-semibold text-sm dark:text-stone-100">
                      Planetaria
                    </h5>
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
              <a href={resume} download="Copy of Resume.pdf">
                <button className="text-sm dark:hover:bg-[#3F3F46] dark:bg-[#303035] dark:border-none dark:text-stone-300 px-4 py-2 w-[100%] border rounded-lg bg-gray-100 font-semibold">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="heading text-4xl md:text-5xl font-bold dark:text-white text-center my-10">
        Stuff that i know !
      </div>
      <div className="flex justify-center items-center">
        <div className="flex w-[50%] overflow-hidden space-x-16 h-16">
          <div className="flex space-x-16 h-10 animate-loop-scroll">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 4"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 10"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 10"
            />
          </div>
          <div
            className="flex space-x-16 h-10 animate-loop-scroll"
            aria-hidden="true"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 4"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&"
              className="max-w-none"
              alt="Image 10"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default LandingPage;
