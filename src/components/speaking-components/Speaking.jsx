import HeadingContainer from "../utility components/HeadingContainer";
import Heading from "../utility components/Heading";
const Speaking = () => {
  return (
    <div className="speaking-container">
      <HeadingContainer>
        <Heading heading="Get to know more about me. What do I do? Just everything..." />
      </HeadingContainer>

      <div className="article-card-container my-10 flex flex-col sm:w-[100%] md:w-[80%]">
        {/* First block container */}
        <div className="flex flex-col">
          <p className="sub-text text-md mr-3 my-5 text-gray-500 dark:text-gray-400">
            Hey, I'm Kumar. I've been a Web developer since 2022, and I've been
            making websites since 2021. I also have a cricket kit with kashmir
            willow bat (SG), and a wonderful partner (Stop thinking! Its my
            laptop itself). I like working out, playing on the ground, watching
            crime movies, research about gangsters and occasionally updating
            this website. Welcome to my spot on the web for writing, projects,
            tutorials, art, and anything else I want to put out there. You can
            read some of my personal thoughts, as well as all the technical
            articles I've written over the years. Also check out the projects
            page to see a highlight of my open-source work.
            <p className="sub-text my-5 text-gray-500 dark:text-gray-400">
              I don't post too often, so feel free to subscribe to the RSS feed
              for updates when I do.
            </p>
          </p>
          <img
            src="../../../src/assets/IMG_1555.jpg"
            className="lg:w-[50%] md:w-[30%] sm:w-[100%] rounded-md ml-3"
          />
          <p className="sub-text text-md mr-3 my-5 text-gray-500 dark:text-gray-400">
            This is how I look. People often say why do you stay serius all the
            time? IDK but in fact my face looks like this (always serius). Also
            nowadays I need very strong (very funnier) jokes to laugh on. May be
            I forget how to laugh. Its ok I wont make you bore, lets go ahead...
          </p>
        </div>
        <div className="current-situation text-gray-600 dark:text-gray-400">
          <h1 className="text-3xl font-semibold mt-4 border-b-2 pb-3 dark:border-b-gray-800 text-gray-800 dark:text-gray-400">
            What I'm doing now
          </h1>
          <p className="italic text-sm my-5">Updated October 6th, 2024</p>

          {/* <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2> */}
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Learning cloud computing</li>
            <li>Getting ripped weak muscle to become more strong and fit</li>
            <li>Driving while using ear buds. (was not easy for me)</li>
            <li>
              Analyzing various kinds of minds & behavioural personalities.
            </li>
            <li>
              Lastly, helping close friends to identify fake people around them.
              😁
            </li>
          </ul>
        </div>
        <div className="current-situation text-gray-600 dark:text-gray-400">
          <h1 className="text-3xl font-semibold mt-16 border-b-2 pb-3 dark:border-b-gray-800 text-gray-800 dark:text-gray-400">
            Lifting
          </h1>
          <p className="italic text-sm my-5">Updated October 6th, 2024</p>

          {/* <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2> */}
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>Chest machine press - 3x15 @ 30kg</li>
            <li>Bicep curls (Bar lifting) - 3x15 @ 35kg</li>
            <li>Shoulder (Dumbell press) - 3x15 | 12 | 10 @ 30kg </li>
            <li>Pull ups - 3x12 | 10 | 7</li>
            <li>Tricep (Skull crusher) - 3x15 @ 15kg</li>
            <li>Squat - 3x15 | 12 | 10 @ 40kg</li>
          </ul>
        </div>
        <div className="current-situation text-gray-600 dark:text-gray-400">
          <h1 className="text-3xl font-semibold mt-16 border-b-2 pb-3 dark:border-b-gray-800 text-gray-800 dark:text-gray-400">
            Movies I love
          </h1>
          <p className="italic text-sm my-5">Updated October 6th, 2024</p>
          <p className="text-md my-5">
            Its amazing to know how these poor mind owned criminal find out
            flaws in the whole system and take advantages of that...
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://i.pinimg.com/originals/ae/fc/56/aefc56760546239f121a5baca0cdd373.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://www.tallengestore.com/cdn/shop/products/Godfather_II_-_Al_Pacino_-_Tallenge_Hollywood_Cult_Classics_Movie_Poster_75056c4e-dfce-422c-bb7e-f93a5e76446b_grande.jpg?v=1570155954"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://posterspy.com/wp-content/uploads/2023/04/TheGodfatherPartIII_Poster_VAR.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaking;
