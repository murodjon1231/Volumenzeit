import React from 'react'
import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, User, ShoppingCart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import watchData from "../data/watchData";

const Home = () => {
    return (
        <div className="font-sans">

            <section className="relative flex flex-col md:flex-row px-8 py-12">
                <div className="flex-1 relative z-10">
                    <div className="space-y-4 max-w-lg">
                        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">FIND YOUR DREAM WATCH</h1>
                        <p className="text-gray-500 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis assumptior temporibus ipsum. Eaque veritatis voluptate rigt.
                        </p>
                        <button className="bg-[#735CFF] text-white text-sm px-6 py-3 rounded">
                            Design Your Watch
                        </button>
                    </div>
                </div>
                <div className="flex-1 mt-8 md:mt-0">
                    <img
                        src="/img.svg"
                        alt="Luxury watch"
                        className="w-full h-auto object-cover"
                    />
                </div>
                <div className="hidden md:flex flex-col items-center space-y-6 absolute left-2 top-1/2 transform -translate-y-1/2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                </div>
            </section>



            <section className="px-8 py-12">
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-12 text-center">FEATURES</h2>

                <div className="relative flex justify-center">
                    <img
                        src="/img2.svg"
                        alt="Watch features"
                        className="w-84 h-84 "
                    />

                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-6 left-8 md:left-24">
                            <div className="flex items-center">
                                <div className="w-20 md:w-32 h-px bg-purple-400"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            </div>
                            <div className="ml-2 mt-2">
                                <h3 className="text-sm font-medium">Individual Style</h3>
                                <p className="text-xs text-gray-500 max-w-xs">Choose your own unique style and design</p>
                            </div>
                        </div>

                        <div className="absolute top-10 right-8 md:right-24">
                            <div className="flex items-center">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <div className="w-20 md:w-32 h-px bg-purple-400"></div>
                            </div>
                            <div className="mr-2 mt-2 text-right">
                                <h3 className="text-sm font-medium">Features</h3>
                                <p className="text-xs text-gray-500 max-w-xs">
                                    Digital and analog displays<br />
                                    Water resistant up to 50m<br />
                                    Multiple time zones<br />
                                    Long battery life
                                </p>
                            </div>
                        </div>

                        <div className="absolute bottom-6 left-8 md:left-24">
                            <div className="flex items-center">
                                <div className="w-20 md:w-32 h-px bg-purple-400"></div>
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            </div>
                            <div className="ml-2 mt-2">
                                <h3 className="text-sm font-medium">High-Quality Components</h3>
                                <p className="text-xs text-gray-500 max-w-xs">Premium materials designed to last</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#735CFF] py-16 px-8 text-white text-center">
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-12">DESIGN YOUR WATCH</h2>

                <div className="flex justify-center items-center space-x-12 max-w-2xl mx-auto mb-10">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white text-purple-500 flex items-center justify-center mb-2">1</div>
                        <span className="text-xs">Select Case</span>
                    </div>
                    <div className="h-px bg-white flex-1"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white text-purple-500 flex items-center justify-center mb-2">2</div>
                        <span className="text-xs">Select Band</span>
                    </div>
                    <div className="h-px bg-white flex-1"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white text-purple-500 flex items-center justify-center mb-2">3</div>
                        <span className="text-xs">Customize</span>
                    </div>
                    <div className="h-px bg-white flex-1"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-white text-purple-500 flex items-center justify-center mb-2">4</div>
                        <span className="text-xs">Buy/Order</span>
                    </div>
                </div>

                <button className="bg-black text-white px-6 py-2 text-sm">Design Your Watch</button>
            </section>

            <section className="bg-black text-white  relative">
                <div className="flex flex-col md:flex-row">
                    <div className="">
                        <img
                            src="/girl.svg"
                            alt="Team working together"
                            className=""
                        />
                    </div>
                    <div className="flex-1 md:pl-12 p-8  items-center">
                        <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">OUR MISSION</h2>
                        <p className="text-sm mb-6">
                            We have succeeded in one of our aims to create a new technology of production in an offer with quality at accessible industry. All what we need to turn on our imaginations and projection.
                        </p>
                        <p className="text-sm mb-6">
                            We have built of the new design in the industry that's the only company who makes the same.
                        </p>
                        <button className="bg-purple-500 text-white px-6 py-2 text-sm mt-4">Design Your Watch</button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/4 h-12 bg-white transform translate-y-px"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-12 bg-white transform -translate-y-px"></div>
            </section>

            <section className="px-8 py-16">
                <section className="px-8 py-16">
                    <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                        WATCHES
                    </h2>
                    <p className="text-sm text-gray-500 max-w-3xl mb-12">
                        Our watches come in a variety of styles and configurations with
                        state-of-the-art technology. Exquisite, handcrafted, and customized
                        engineering details.
                    </p>

                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: ".next",
                            prevEl: ".prev",
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                    >
                        {watchData.map((watch) => (
                            <SwiperSlide key={watch.id}>
                                <div className="border p-4 text-center rounded-xl">
                                    <img
                                        src={watch.image}
                                        alt={watch.name}
                                        className="w-full h-48 object-contain mb-4 rounded-md"
                                    />
                                    <div className="text-lg font-semibold mb-1">{watch.name}</div>
                                    <div className="text-lg font-bold">{watch.price}</div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-between items-center mt-8">
                        <div className="flex space-x-4">
                            <button className="prev p-2 bg-gray-200 rounded">
                                <ChevronLeft size={20} />
                            </button>
                            <button className="next p-2 bg-gray-200 rounded">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                        <button className="bg-[#735CFF] hover:bg-purple-700 text-white px-6 py-2 text-sm rounded shadow">
                            Design Your Watch
                        </button>
                    </div>
                </section>
            </section>

            <section className="px-8 py-16 flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-8 md:mb-0 md:pr-12">
                    <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">ABOUT US</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        The best watch manufacturing art from Switzerland with iconic design, innovative materials, and exceptional movements.
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                        Born from a fusion of style and technology, our Swiss-made watches combine modern elegance with ancient traditions in one complex, brilliant, refined timepiece design with time.
                    </p>
                </div>
                <div className="flex-1 relative">
                    <iframe width="460" height="315" src="https://www.youtube.com/embed/s-x_HVCwKgI?si=HGMQMyKLjnoiG9K2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </section>

            <section className="bg py-12 px-8 text-white ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl font-bold mb-2">Don't Miss Your Chance To Get Free Giveaway</h2>
                    <h3 className="text-lg mb-6">Sign Up To Our Newsletter</h3>
                    <p className="text-sm mb-6">
                        We will inform you about product arrivals, offers, special promotions and the latest news of our store.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="py-2 px-4 text-black rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="py-2 px-4 text-black rounded"
                        />
                        <button className="bg-black text-white px-6 py-2">OK</button>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Home