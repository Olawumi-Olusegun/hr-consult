const Footer = () => {
    return (
        <>
            <footer className="bg-white border-t">
                <div className="flex flex-col md:flex-row gap-6 px-4 py-5 md:py-8 lg:py-16 w-full lg:max-w-[1218px] mx-auto">
                    <div className="flex flex-col gap-y-5 items-start">
                        <a href="#">
                            <h1 className="text-gray-900 text-2xl font-bold">HR Consult</h1>
                        </a>
                        <span className="text-gray-500 text-sm">
                            Be the first to receive all the recent updates, articles, and
                            valuable materials.
                        </span>

                        <form className="w-full">
                            <div className="flex gap-2 flex-col lg:flex-row">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    id="emailAddress"
                                    className="border px-4 py-2 flex-1 w-full rounded-lg"
                                />
                                <button
                                    type="button"
                                    className="bg-[#00263D] hover:bg-[#00263D]/90 duration-300 text-white text-center rounded-lg px-6 py-2"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-wrap gap-y-5 justify-between md:px-10 py-8">
                            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
                                <h2 className="font-bold text-md mb-2">Our Services</h2>
                                <ul className="list-none mb-0 space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Human Resource
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Companies Hiring
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Quality Control/Assurance
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Consulting/Strategies
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Skill Development
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
                                <h2 className="font-bold text-md mb-2">Quick Links</h2>
                                <ul className="list-none mb-0 space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            About us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Help
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Training
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
                                <h2 className="font-bold text-md mb-2">Legal</h2>
                                <ul className="list-none mb-0 space-y-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Terms of service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            Why Choose Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-1/4 mb-6 md:mb-0">
                                <h2 className="font-bold text-md mb-2">Contact</h2>
                                <ul className="list-none mb-0 space-y-2">
                                    <li>
                                        <a
                                            href="tel:+23400000000000"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            +234-00-0000-000-000
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:admin@hrconsult.com"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            admin@hrconsult.com
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:info@hrconsult.com"
                                            className="text-gray-600 hover:text-gray-800 text-sm"
                                        >
                                            info@hrconsult.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:px-4 lg:max-w-[1218px] mx-auto">

                    <div className="w-full border-y">
                        <div className="flex flex-col items-center md:flex-row md:justify-between gap-y-2 py-5 md:py-7">
                            <h3 className="font-semibold text-[18px]">Connect with us</h3>
                            <div>
                                <ul className="list-none mb-0 flex md:flex-row flex-wrap items-center justify-center gap-4 md:gap-8">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-gray-800 text-sm duration-300"
                                        >
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-pink-600 text-sm duration-300"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-green-600 text-sm duration-300"
                                        >
                                            Whatsapp
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-blue-600 text-sm duration-300"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-red-600 text-sm duration-300"
                                        >
                                            Youtube
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col items-center flex-wrap md:flex-row justify-center md:justify-between py-5 space-y-2  ">
                        <ul className="list-none flex items-center justify-center flex-wrap md:flex-row gap-4">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                                >
                                    Terms of service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:underline duration-300 hover:text-gray-800 text-sm"
                                >
                                    Why choose us
                                </a>
                            </li>
                        </ul>

                        <span className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} HR Consult. All rights reserved.
                        </span>
                    </div>

                </div>

            </footer>
        </>
    );
};

export default Footer;