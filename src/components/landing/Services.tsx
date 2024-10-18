import { Headset, PenLine, Presentation } from "lucide-react";


const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl lg:text-5xl font-bold lg:mb-20">Our Services</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white shadow-sm group hover:scale-95 duration-300  flex flex-col gap-5 items-start rounded-md">
                        <div className="bg-blue-950 p-2 rounded-md group-hover:bg-blue-500 duration-300">
                            <Presentation className="text-white" />
                        </div>
                        <h3 className="font-semibold">Recruitment</h3>
                        <p className="text-start text-stone-700">We streamline your recruitment process by sourcing top talent that aligns with your company's vision and goals, ensuring a perfect cultural fit</p>
                    </div>

                    <div className="p-4 bg-white shadow-sm group hover:scale-95 duration-300 flex flex-col gap-5 items-start rounded-md">
                        <div className="bg-blue-950 p-2 rounded-md group-hover:bg-blue-500 duration-300">
                            <PenLine className="text-white" />
                        </div>
                        <h3 className="font-semibold">Training</h3>
                        <p className="text-start text-stone-700">Our comprehensive training programs equip your employees with the latest skills and tools to thrive in an evolving business landscape</p>
                    </div>

                    <div className="p-4 bg-white shadow-sm group hover:scale-95 duration-300 flex flex-col gap-5 items-start rounded-md">
                        <div className="bg-blue-950 p-2 rounded-md group-hover:bg-blue-500 duration-300">
                            <Headset className="text-white" />
                        </div>
                        <h3 className="font-semibold">Consulting</h3>
                        <p className="text-start text-stone-700">We offer expert HR consulting services to optimize your organizational structure, enhance productivity, and foster long-term growth</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;