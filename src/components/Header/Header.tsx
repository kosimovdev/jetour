
const Header = () => {
    return (
        <header className='fixed w-full top-0 bg-green-100 '>
           <div className="container mx-auto px-5">
               <nav className='flex justify-between items-center h-[61px] border-b-2 border-[#CCC] py-12'>
                   <ul className='flex gap-x-8 items-center'>
                       <li>
                           <a href="#" className='hover:text-slate-400 duration-200'>Models</a>
                       </li>
                       <li>
                           <a href="#" className='hover:text-slate-400 duration-200'>About us</a>
                       </li>
                       <li>
                           <a href="#" className='hover:text-slate-400 duration-200'>Service</a>
                       </li>
                       <li>
                           <a href="#" className='hover:text-slate-400 duration-200'>Contact</a>
                       </li>
                   </ul>
                   <button className='bg-black text-white py-2 px-[78px] hover:bg-white hover:text-black hover:border-2 hover:border-black hover:duration-200 rounded-[20px] active:bg-white active:text-black active:border-2 active:border-black active:duration-300 focus:bg-white focus:text-black focus:ring-4'>Buyurtirish</button>
               </nav>
           </div>
        </header>
    );
};

export default Header;