import React, { useEffect, useState } from "react";

// star:{ id, size, x, y, opacity, animationDuration}
// meteor:{id , size ,x ,y , delay, animationDuration}
export default function StarBackground() {
        const [stars, setStars] = useState([]);
        const [meteors, setMeteors] = useState([]);

        const generateStars = () => {
                const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 3000);

                const newStars = [];

                for (let i = 0; i < numberOfStars; i++) {
                        const size = Math.random() * 3 + 1;
                        const x = Math.random() * 100;
                        const y = Math.random() * 100;
                        const opacity = Math.random() * 0.5 + 0.5;
                        const animationDuration = Math.random() * 4 + 2;

                        newStars.push({
                                id: i,
                                size,
                                x,
                                y,
                                opacity,
                                animationDuration,
                        });
                }
                setStars(newStars);
        };

        const generateMeteors = () => {
                const numberOfMeteors = Math.floor((window.innerWidth * window.innerHeight) / 40000);
                const newMeteors = [];

                for (let i = 0; i < numberOfMeteors; i++) {
                        const size = Math.random() * 2 + 1;
                        const x = Math.random() * 100;
                        const y = Math.random() * 20;
                        const delay = Math.random() * 15;
                        const animationDuration = Math.random() * 3 + 2;

                        newMeteors.push({
                                id: i,
                                size,
                                x,
                                y,
                                delay,
                                animationDuration,
                        });
                }
                setMeteors(newMeteors);
        };

        useEffect(() => {
                generateStars();
                generateMeteors();

                const handleResize = () => {
                        generateStars();
                        generateMeteors();
                };

                window.addEventListener("resize", handleResize);

                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, []);

        return (
                <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                        {stars.map((star) => {
                                return (
                                        <div
                                                key={star.id}
                                                className="star animate-pulse-subtle"
                                                style={{
                                                        width: `${star.size}px`,
                                                        height: `${star.size}px`,
                                                        left: `${star.x}%`,
                                                        top: `${star.y}%`,
                                                        opacity: star.opacity,
                                                        animationDuration: `${star.animationDuration}s`,
                                                }}
                                        ></div>
                                );
                        })}
                        {meteors.map((meteor) => {
                                return (
                                        <div
                                                key={meteor.id}
                                                className="meteor animate-meteor"
                                                style={{
                                                        width: `${meteor.size * 35}px`,
                                                        height: `${meteor.size * 2}px`,
                                                        left: `${meteor.x}%`,
                                                        top: `${meteor.y}%`,
                                                        animationDelay: meteor.delay,
                                                        animationDuration: `${meteor.animationDuration}s`,
                                                }}
                                        ></div>
                                );
                        })}
                </div>
        );
}
