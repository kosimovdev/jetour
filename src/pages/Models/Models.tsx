import {data} from "autoprefixer";

const Models = () => {
    // const {models} = data;
    return (
        <section id='models' className='pt-[120px]'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <span></span>
                    <h1 className='text-[48px] leading-[52px] capitalize text-[#999] w-[55%]'><span className='text-black'>JETOUR</span>Yuqori Didli Insonlar Uchun</h1>
                    <div className='w-[84px] h-[84px] bg-[#E6E6E6] rounded-[12px] grid place-content-center'>
                        <a href="#">
                            <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61525 39.3848L38.3848 2.61522M38.3848 2.61522H1.61525M38.3848 2.61522V39.3848" stroke="#1A1A1A" stroke-width="4"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="models-box mt-[192px]">
                    <h1 className='text-[#666] text-[26px] mb-5'>MODELS</h1>
                    <div className="line border-t-[1px] border-[#CCC]"></div>

                </div>
            </div>
        </section>
    );
};

export default Models;