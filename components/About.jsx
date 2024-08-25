"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import Image from "next/image"
import Badge from "./Badge"
import Separator from "./Separator"


const data = [
    {
        imgSrc: "/assets/about/photo-1.jpg",
        title: 'Our Journey',
        description: "Founded in 2000, MochaCraft started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time."
    },
    {
        imgSrc: "/assets/about/photo-2.jpg",
        title: 'Our Promise',
        description: "At MochaCraft, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community."
    },
    {
        imgSrc: "/assets/about/photo-3.jpg",
        title: 'Our Team',
        description: "At MochaCraft, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories."
    },
]

const About = () => {

    const scrollableSectionRef = useRef(null)
    const scrollableTriggerRef = useRef(null)

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const animation = gsap.fromTo(
            scrollableSectionRef.current,
            { translateX: 0 },
            {
                translateX: "-200vw", ease: "none", duration: 1, scrollTrigger: {
                    trigger: scrollableTriggerRef.current,
                    start: "top top",
                    end: "1800vw top",
                    scrub: 0.6,
                    pin: true,
                }
            }
        )
        return () => {
            animation.kill()
        }
    }, [])

    return (
        <section className="overflow-hidden bg-primary lg:p-20">
            <div ref={scrollableTriggerRef}>
                <div
                    ref={scrollableSectionRef}
                    className="h-screen lg:h-[90vh] w-[300vw] flex relative">
                    {data.map((item, index) => {
                        return <div
                            key={index}
                            className="w-screen h-screen flex flex-col justify-center items-center relative">
                            <div className="container mx-auto">
                                <div className="flex gap-[30px] relative">
                                    {/*text*/}
                                    <div className="flex flex-1 flex-col justify-center items-center">
                                        <Badge containerStyles="w-[180px] h-[180px]" />
                                        <div className="max-w-[560px] text-center">
                                            {/*title*/}
                                            <h2 className="h2 text-white mb-4 lg:mb-2">
                                                <span className="mr-4">{item.title.split(" ")[0]}</span>
                                                <span className="text-accent">{item.title.split(" ")[1]}</span>
                                            </h2>
                                            {/*Separator*/}
                                            <div className="mb-8 lg:mb-5">
                                                <Separator />
                                            </div>
                                            {/*Description*/}
                                            <p className="leading-relaxed mb-36 lg:mb-10 px-8 xl:px-0">
                                                {item.description}
                                            </p>
                                            {/*btn */}
                                            <button className="btn">
                                                See More
                                            </button>
                                        </div>
                                    </div>
                                    {/*image*/}
                                    <div className="hidden w-full flex-1 relative lg:flex xl:h-[70vh]">
                                        <Image src={item.imgSrc}
                                            fill
                                            className="object-contain"
                                            quality={100}
                                            priority
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </section>
    )
}

export default About