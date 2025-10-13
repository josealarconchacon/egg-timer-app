"use client";

import React, { useMemo, useState, useCallback } from "react";
import { useTimer } from "@/hooks/useTimer";
import { useSound } from "@/hooks/useSound";
import { EggTypeSelector } from "@/components/timer/EggTypeSelector";
import { EggSizeSelector } from "@/components/timer/EggSizeSelector";
import { TimerProgress } from "@/components/timer/TimerProgress";
import { TimerDisplay } from "@/components/timer/TimerDisplay";
import { TimerControls } from "@/components/timer/TimerControls";
import { Card } from "@/components/ui/Card";
import { EGG_TYPES, EGG_SIZES } from "@/lib/constants";
import { calculateProgress } from "@/lib/utils";

export default function Home() {
  const [selectedEggSizeId, setSelectedEggSizeId] = useState("medium");
  const [baseTime, setBaseTime] = useState(179); // Default to Liquid egg base time

  const {
    selectedTime,
    timeLeft,
    isRunning,
    isCompleted,
    start,
    pause,
    reset,
    setTime,
  } = useTimer(179);

  // Initialize sound to play when timer completes
  useSound(isCompleted);

  // Calculate adjusted time based on egg size
  const getAdjustedTime = useCallback((time: number, sizeId: string) => {
    const eggSize = EGG_SIZES.find((size) => size.id === sizeId);
    if (!eggSize) return time;
    return Math.round(time * eggSize.timeMultiplier);
  }, []);

  // Handle egg type selection
  const handleEggTypeSelect = useCallback(
    (time: number) => {
      setBaseTime(time);
      const adjustedTime = getAdjustedTime(time, selectedEggSizeId);
      setTime(adjustedTime);
    },
    [selectedEggSizeId, getAdjustedTime, setTime]
  );

  // Handle egg size selection
  const handleEggSizeSelect = useCallback(
    (sizeId: string) => {
      setSelectedEggSizeId(sizeId);
      const adjustedTime = getAdjustedTime(baseTime, sizeId);
      setTime(adjustedTime);
    },
    [baseTime, getAdjustedTime, setTime]
  );

  const progress = useMemo(
    () => calculateProgress(selectedTime, timeLeft),
    [selectedTime, timeLeft]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-indigo-600 mr-3 flex items-center justify-center">
              <span className="text-white text-lg">⏲</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              eggTimer
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Perfect Eggs, Every Time
          </h2>

          <p className="text-sm sm:text-base text-gray-500">
            Select your preferred doneness and start the timer!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Timer Controls */}
          <div className="order-2 lg:order-1">
            <Card className="h-full">
              <div className="space-y-6 sm:space-y-8 pb-24 lg:pb-0">
                {/* Egg Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">
                    Egg Size
                  </h3>
                  <EggSizeSelector
                    eggSizes={EGG_SIZES}
                    selectedSizeId={selectedEggSizeId}
                    onSelect={handleEggSizeSelect}
                    disabled={isRunning}
                  />
                </div>

                {/* Egg Type Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    Doneness Level
                  </h3>
                  <p className="text-sm mb-4 text-gray-500">
                    Time will auto-adjust based on egg size
                  </p>
                  <EggTypeSelector
                    eggTypes={EGG_TYPES}
                    selectedTime={selectedTime}
                    onSelect={handleEggTypeSelect}
                    disabled={isRunning}
                  />
                </div>

                {/* Launch Timer Button - Sticky on mobile */}
                <div className="lg:text-center">
                  <div className="lg:static fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-gray-200 lg:border-0 lg:p-0 lg:bg-transparent lg:backdrop-blur-none z-10 shadow-lg lg:shadow-none">
                    <TimerControls
                      isRunning={isRunning}
                      onStart={start}
                      onPause={pause}
                      onReset={reset}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Timer Display */}
          <div className="order-1 lg:order-2">
            <Card className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <p className="text-lg sm:text-xl mb-2 text-gray-600">
                    Ready In
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Everything you need to know about Eggs
            </h3>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-gray-600">
              Egg cooking is an art of timing, it is only a matter of seconds to
              make a mistake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Hard Boiled */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-indigo-600"></div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Hard</h4>
                  <p className="text-sm text-gray-600">
                    Firm yolk and whites, ideal for snacks or salads
                  </p>
                </div>
              </div>
            </div>

            {/* Soft Boiled */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-indigo-600"></div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">Soft</h4>
                  <p className="text-sm text-gray-600">
                    Creamy yolk center with fully set whites
                  </p>
                </div>
              </div>
            </div>

            {/* Liquid Boiled */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 rounded-full mt-2 flex-shrink-0 bg-indigo-600"></div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-gray-800">
                    Liquid
                  </h4>
                  <p className="text-sm text-gray-600">
                    Runny yolk, tender whites, perfect for dipping
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            💡 Pro Tips
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p>
                <strong>Egg Size Matters:</strong> Larger eggs need more cooking
                time - use our size selector above!
              </p>
            </div>
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
      <footer className="bg-white border-t border-gray-200 mt-12 mb-20 lg:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            Copyright © 2025 - Jose.
          </p>
        </div>
      </footer>
    </div>
  );
}
