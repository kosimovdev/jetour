import Logo from "../../UI/Icons/Logo.tsx";
import Play from "../../UI/Icons/Play.tsx";

const Intro = () => {
    return (
        <section id='intro' className='pt-[264px]'>
            <div className="container mx-auto px-5">
                <div className="flex gap-x-[110px]">
                    <Logo/>
                    <Play/>

                </div>
                <video className="yt-bg-video d-sm-block none rounded-[12px] mt-20"  width="100%" controls height="740" autoPlay loop muted>
                    <source src="https://jetourglobal.com//videos/about/video/x70.mp4" type="video/mp4"/>
                </video>

            </div>
        </section>
    );
};

export default Intro;