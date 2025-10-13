"use client";

import React, { useMemo } from "react";
import { useTimer } from "@/hooks/useTimer";
import { EggTypeSelector } from "@/components/timer/EggTypeSelector";
import { TimerProgress } from "@/components/timer/TimerProgress";
import { TimerDisplay } from "@/components/timer/TimerDisplay";
import { TimerControls } from "@/components/timer/TimerControls";
import { Card } from "@/components/ui/Card";
import { EGG_TYPES } from "@/lib/constants";
import { calculateProgress } from "@/lib/utils";

export default function Home() {
  const {
    selectedTime,
    timeLeft,
    isRunning,
    isCompleted,
    start,
    pause,
    reset,
    setTime,
  } = useTimer(180);

  const progress = useMemo(
    () => calculateProgress(selectedTime, timeLeft),
    [selectedTime, timeLeft]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div
              className="w-8 h-8 rounded-full mr-3"
              style={{ backgroundColor: "#2f4858" }}
            ></div>
            <h1
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#2f4858" }}
            >
              EggTimer
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#2f4858" }}
          >
            Perfect Eggs, Every Time
          </h2>

          <p className="text-sm sm:text-base" style={{ color: "#748ea0" }}>
            Select your preferred doneness and start the timer!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Timer Controls */}
          <div className="order-2 lg:order-1">
            <Card className="h-full">
              <div className="space-y-6 sm:space-y-8">
                {/* Egg Type Selection */}
                <div>
                  <h3
                    className="text-lg font-semibold mb-4"
                    style={{ color: "#2f4858" }}
                  >
                    Choose Your Egg Type
                  </h3>
                  <EggTypeSelector
                    eggTypes={EGG_TYPES}
                    selectedTime={selectedTime}
                    onSelect={setTime}
                    disabled={isRunning}
                  />
                </div>

                {/* Launch Timer Button */}
                <div className="text-center">
                  <TimerControls
                    isRunning={isRunning}
                    onStart={start}
                    onPause={pause}
                    onReset={reset}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Timer Display */}
          <div className="order-1 lg:order-2">
            <Card className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <p
                    className="text-lg sm:text-xl mb-2"
                    style={{ color: "#516a7b" }}
                  >
                    Ready in
                  </p>
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto relative">
                      <TimerProgress
                        progress={progress}
                        isCompleted={isCompleted}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TimerDisplay
                          timeLeft={timeLeft}
                          isCompleted={isCompleted}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Educational Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#2f4858" }}
            >
              Everything you need to know about Eggs
            </h3>
            <p
              className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
              style={{ color: "#516a7b" }}
            >
              Egg cooking is an art of timing, it is only a matter of seconds to
              make a mistake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Hard Boiled */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#2f4858" }}
                ></div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2f4858" }}
                  >
                    Hard
                  </h4>
                  <p className="text-sm" style={{ color: "#516a7b" }}>
                    Firm yolk and whites, ideal for snacks or salads
                  </p>
                </div>
              </div>
            </div>

            {/* Medium Boiled */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#2f4858" }}
                ></div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2f4858" }}
                  >
                    Medium
                  </h4>
                  <p className="text-sm" style={{ color: "#516a7b" }}>
                    Creamy yolk center with fully set whites
                  </p>
                </div>
              </div>
            </div>

            {/* Soft Boiled */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="flex items-start space-x-4">
                <div
                  className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "#2f4858" }}
                ></div>
                <div>
                  <h4
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2f4858" }}
                  >
                    Soft
                  </h4>
                  <p className="text-sm" style={{ color: "#516a7b" }}>
                    Runny yolk, tender whites, perfect for dipping.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="text-center">
            <div
              className="inline-flex items-center justify-center w-32 h-32 rounded-full"
              style={{ backgroundColor: "#748ea0" }}
            >
              <div className="text-6xl">🐔</div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h4
            className="text-lg font-semibold mb-4"
            style={{ color: "#2f4858" }}
          >
            💡 Pro Tips
          </h4>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm"
            style={{ color: "#516a7b" }}
          >
            <div>
              <p>
                <strong>Start Timing:</strong> Begin once the water reaches a
                full boil
              </p>
            </div>
            <div>
              <p>
                <strong>Room Temp Eggs:</strong> Reduce cracking and ensure even
                cooking
              </p>
            </div>
            <div>
              <p>
                <strong>Ice Bath:</strong> Cool eggs immediately in ice water to
                stop cooking
              </p>
            </div>
            <div>
              <p>
                <strong>Freshness Check:</strong> Older eggs peel easier; fresh
                ones taste richer
              </p>
            </div>
            <div>
              <p>
                <strong>Storage:</strong> Refrigerate boiled eggs up to 7 days
                (unpeeled)
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm" style={{ color: "#748ea0" }}>
            Copyright © 2025 - Jose.
          </p>
        </div>
      </footer>
    </div>
  );
}
