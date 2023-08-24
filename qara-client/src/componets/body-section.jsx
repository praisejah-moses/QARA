function Body() {
    return (
        <main>
            <section className="relative h-[600px] w-full bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692440331/background-image_jx5pi8.jpg')]">
                <div className="bg-black w-full h-full opacity-30"/>
                <div className="flex flex-col absolute left-10 bottom-20 text-white space-y-10 p-4">
                    <h1 className="text-6xl">Welcome to the University of Benin</h1>
                    <p className="text-lg text-gray-300">The University of Benin Main Auditorium wears a new look. Visit the newly 
                        refurbished<br/>Main Auditorium as you enter the Main Campus, you cannot miss it.</p>
                    <button className="text-[#ffc600] w-fit p-3 rounded-xl	border-2 border-[#ffc600] bg-[#9C0C84]">Read More</button>
                </div>
            </section>
            <section className="h-[700px] w-full bg-[#edf0f2] p-[72px]">
                <div className="flex justify-between items-end">
                    <div>
                        <h5 className="relative text-[15px] text-[#9C0C84]">All News</h5>
                        <h2 className="text-[48px] font-bold">News</h2>
                    </div>
                    <div className="flex space-x-3" >
                        <div className="border-2 border-[#aaaaaa] rounded w-[40px] h-[40px]"></div>
                        <div className="border-2 border-[#aaaaaa] rounded w-[40px] h-[40px]"></div>
                    </div>
                </div>

                <div className="flex space-x-4 mt-5 h-4/5">
                    <div className="rounded bg-[#fff] grow">
                        <div className="w-full h-[50%] bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692654926/DSC_9134_m038ui.jpg')]"></div>
                        <div className="flex flex-col p-6">
                            <h2 className="">Matriculation</h2>
                            <h2 className="text-[25px] font-bold">2021 Virtual <br /> Matriculation Ceremony</h2>
                        </div>
                    </div>
                    <div className="rounded bg-[#fff] grow">
                        <div className="w-full h-[50%] bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692730484/Pharm_2023_Induction_ga8lly.jpg')]"></div>
                        <div className="flex flex-col p-6">
                            <h2 className="">Induction</h2>
                            <h2 className="text-[25px] font-bold">46th Oath Taking <br /> Ceremony for Pharmacy</h2>
                        </div>
                    </div> 
                    <div className="rounded-md bg-[#fff] grow">
                        <div className="w-full h-[50%] bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692730471/Uniben_20Vice_20Chancellor_20Prof._20L.I._20Salami_i311w5.jpg')]"></div>
                        <div className="flex flex-col p-6">
                            <h2 className="">Academics</h2>
                            <h2 className="text-[25px] font-bold">ACADEMIC CALENDAR <br /> (21/22 & 22/23) SESSION</h2>
                        </div>
                    </div>  
                </div>
            </section>
            <section className="flex w-full h-[775px] bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692731219/IMG_3067_znm6e8.jpg')]">
                <div className="w-[50%] px-32 py-10">
                    <div>
                        <h5 className="relative text-[15px] text-[#9C0C84]">Whats Happening</h5>
                        <h2 className="text-[48px] font-bold">EVENTS</h2>
                    </div>
                    <div className="w-full h-[80%] flex items-center justify-center">
                        <div className="w-[120px] h-[120px] bg-[#9C0C84] rounded-full	"></div>
                    </div>
                </div>
                <div className="w-[50%] bg-[rgba(7,41,77,0.9)]">

                </div>
            </section>
            <section className="w-full h-[600px]">

            </section>
        </main>
    );
}

export default Body;