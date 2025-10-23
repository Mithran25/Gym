"use client";

import React from 'react'
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(() => import("@/components/ui/radial-orbital-timeline"), {
  ssr: false,
});
import { Dumbbell, NotebookPen, Bike,Apple, Activity, HandCoins } from "lucide-react";

const Anima = () => {

    
    const timelineData = [
      { id: 1, icon:NotebookPen , title: "Free Lesson", content: "Our FREE LESSON offers you a risk-free start." },
      { id: 2, icon: Dumbbell, title: "Workout", content: "Professional WORKOUT programs customized for you." },
      { id: 3, icon: Apple, title: "Protein", content: "Food and nutrition guidance for your fitness." },
      { id: 4, icon: Activity, title: "Boxing", content: "Specialized sessions like BOXING for cardio and strength." },
      { id: 5, icon: Bike, title: "Cycling", content: "Specialized sessions like CYCLING for endurance." },
      { id: 6, icon: HandCoins, title: "Price", content: "Premium coaching and facilities at the best PRICE." },
    ];


  return (
    <div id="ui" className="flex flex-col items-center p-10 justify-center min-h-screen text-white">
      <h2 className="text-3xl font-bold mb-8">Why Choose US</h2>
      <RadialOrbitalTimeline timelineData={timelineData}/>
    </div> 
  )
}

export default Anima