const Hero = () => {
    return (
        <section
            id="#"
            className="relative p-8 py-20 flex flex-col gap-y-6 items-center justify-center shadow bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg')" }}
        >
            <div className="absolute inset-0 bg-white opacity-80" />
            <div className="relative z-10 flex flex-col items-center gap-5">
                <h2 className="w-full text-4xl lg:text-6xl font-bold sm:w-[80%] lg:w-[65%] text-center">
                    <strong className="text-black">Global Team </strong>
                    <strong className="text-blue-950"> HR, Payroll, and Compliance</strong>
                </h2>
                <p className="w-full text-center text-lg md:text-2xl sm:w-2/3 md:w-1/2">
                    Empowering businesses with seamless HR solutions
                    Simplifying payroll management for global teams
                    Ensuring compliance across all your operations
                </p>
                <div className="flex items-center flex-wrap gap-3 mb-10">
                    <button className="bg-blue-950 hover:bg-blue-900 duration-300 text-white rounded-full px-6 py-3 font-semibold">
                        Get started for free
                    </button>
                    <button className="border-blue-950 hover:bg-blue-950/50 hover:text-white duration-300 border-2 rounded-full px-6 py-3 font-semibold">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
