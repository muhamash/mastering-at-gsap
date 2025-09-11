import HomeHeroText from "../components/pages/home/HeroText";
import HomeBottomText from "../components/pages/home/HomeText";
import Video from "../components/pages/home/Video";

export default function Home() {
    return (
        <div className="text-white">
            <div className='fixed h-screen w-screen'>
                <Video/>
            </div>
            
            <div className='h-full relative pb-5 overflow-hidden flex flex-col justify-between'>
                <HomeHeroText />
                <HomeBottomText/>
            </div>
        </div>
    );
}
