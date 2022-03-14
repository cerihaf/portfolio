import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
  const projects = [
    {
      title: "Animal Showdown 2.0",
      desc: "An updated version of Animal Showdown made with React instead of Handlebars.js",
      url: "https://reactshowdown.herokuapp.com/login",
      repo: "https://github.com/cerihaf/react-showdown",
      thumbnail: "/reactshowdown.png",
    },
    {
      title: "Animal Showdown",
      desc: "Our first Animal Showdown site that lets you determine the winner of a matchup fight",
      url: "https://animalshowdown.herokuapp.com/",
      repo: "https://github.com/cerihaf/animal-showdown",
      thumbnail: "/animalshowdown.png",
    },
    {
      title: "Tech Blog",
      desc: "A technology blog site that allows you to preform CRUD actions",
      url: "https://tech-blog-ku.herokuapp.com/",
      repo: "https://github.com/cerihaf/tech-blog",
      thumbnail: "/tech-blog.png",
    },
    {
      title: "JavaScript 30 Challenge",
      desc: "Completed solutions for the JavaScript 30 Day Challenge.",
      url: "https://JavaScript30.com",
      repo: "https://github.com/cerihaf/Javascript30Challenge",
      thumbnail: "/javascript30.png",
    },
    {
      title: "Stew and Brew",
      desc: "Find recipes and find local breweries near you",
      url: "https://davidjaguilar104.github.io/recipe-nutrition-app/",
      repo: "https://github.com/davidjaguilar104/recipe-nutrition-app",
      thumbnail: "/stew-brew.png",
    },
    {
      title: "PWA Budget Tracker",
      desc: "PWA that helps you track your budget.",
      url: "https://arcane-inlet-56200.herokuapp.com/",
      repo: "https://github.com/cerihaf/PWA-budget-tracker",
      thumbnail: "/budget-tracker.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map(({ title, desc, url, repo, thumbnail }, index) => (
        <PortfolioItem
          key={index}
          title={title}
          desc={desc}
          url={url}
          repo={repo}
          thumbnail={thumbnail}
        />
      ))}
    </div>
  );
}
