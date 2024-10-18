const About = () => {
    return (
        <section id="about" className="py-16 bg-gray-900 text-white">
            <h2 className="text-3xl lg:text-5xl font-bold text-center">About Us</h2>
            <div className="text-white py-24 px-6 sm:px-12 w-full">
                <div className="container mx-auto flex flex-col items-center justify-center sm:gap-12 gap-20 ">

                    <div className="w-full my-10 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-center gap-10">
                        <div className="w-full md:w-[50%]">
                            <img
                                src="https://images.pexels.com/photos/5439140/pexels-photo-5439140.jpeg"
                                alt="Mapbox Navigation"
                                className="w-full h-full object-cover pointer-events-none rounded-lg"
                            />
                        </div>
                        <div className="rounded-md p-4 text-center flex flex-col gap-5 flex-1">
                            <h2 className="text-xl font-bold text-left text-white ">
                                Our Mission Statement
                            </h2>
                            <p className="text-base text-left">
                                Our mission is to empower organizations by providing strategic HR solutions that drive growth, foster a positive workplace culture, and optimize talent management. Through tailored recruitment, innovative training programs, and expert consulting, we are dedicated to helping businesses achieve their full potential while ensuring employee success and satisfaction
                            </p>
                            <a
                                href="#"
                                className="inline-block px-6 py-2 bg-blue-500 duration-300 hover:bg-blue-600 rounded-md text-white font-semibold"
                            >
                                Get stated now →
                            </a>
                        </div>
                    </div>

                    <div className="w-full my-10 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-center gap-10">

                        <div className="rounded-md p-4 text-center flex flex-col gap-5 flex-1">
                            <h2 className="text-xl font-bold text-left text-white ">
                                Our Vision
                            </h2>
                            <p className="text-base text-left">
                                Our vision is to revolutionize the human resources landscape by becoming the trusted partner for organizations worldwide, empowering them with innovative solutions in recruitment, training, and compliance. We aim to create workplaces where talent thrives, employee well-being is prioritized, and businesses are equipped to achieve sustainable growth in an ever-evolving global market.

                            </p>
                            <a
                                href="#"
                                className="inline-block px-6 py-2 bg-blue-500 duration-300 hover:bg-blue-600 rounded-md text-white font-semibold"
                            >
                                Get stated now →
                            </a>
                        </div>

                        <div className="w-full md:w-[50%]">
                            <img
                                src="https://images.pexels.com/photos/6248946/pexels-photo-6248946.jpeg"
                                alt="Mapbox Navigation"
                                className="w-full h-full object-cover pointer-events-none rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;