import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />

        <Grid />

        <RecentProjects />
      </div>
    </main>
  );
};

export default Home;
