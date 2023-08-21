function Body() {
    return (
        <main>
            <div className="relative h-[600px] w-full bg-cover bg-[url('https://res.cloudinary.com/dbdbmbyee/image/upload/v1692440331/background-image_jx5pi8.jpg')]">
                <div className="bg-black w-full h-full opacity-30"/>
                <div className="flex flex-col absolute left-10 bottom-20 text-white space-y-10 p-4">
                    <h1 className="text-6xl">Welcome to the University of Benin</h1>
                    <p className="text-lg text-gray-300">The University of Benin Main Auditorium wears a new look. Visit the newly 
                        refurbished<br/>Main Auditorium as you enter the Main Campus, you cannot miss it.</p>
                    <button className="w-fit p-3 rounded-xl	border-2 border-rose-200 bg-[#9C0C84]">Read More</button>
                </div>
            </div>
            <div className="h-[600px] w-full bg-slate-300">

            </div>
        </main>
    );
}

export default Body;