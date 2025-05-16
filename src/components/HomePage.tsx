'use client'
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#fefefe] min-h-screen flex items-center p-4 md:p-8 lg:p-12">
      <div className="p-8 w-full">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24 mb-24">
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start">
            <div className="writing-mode-vertical-rl text-vertical h-[420px] flex items-center justify-center">
              <div className="relative">
                <h1 className="text-5xl md:text-6xl text-gray-900 font-shodo tracking-wider leading-[1.4]">
                  一
                  期
                  一
                  会
                </h1>
                <div className="absolute -right-6 top-0 h-full w-px bg-gray-300"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Ichigo Ichie</p>
          </div>

          <div className="order-1 md:order-2 flex-1">
            <div className="flex items-end gap-4 mb-12">
              <span className="text-6xl text-gray-900 font-light font-serif">TA VAN THAI</span>
              <div className="h-px flex-1 bg-gray-300 mb-6"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
              <span className="font-medium">Ichigo Ichie (一期一会)</span> - 
              I approach each project as a once-in-a-lifetime opportunity, 
              blending the essence of tradition with modern technology 
              to create unique digital experiences.
            </p>

            <div className="space-y-8 max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-tight">
                Fullstack artisan crafting digital experiences with precision
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Specializing in Vue/Nuxt and Next.js ecosystems, I build applications 
                  with the philosophy of &quot;right tool for the right purpose&quot;. 
                  Backend expertise includes Node.js, PHP, PostgreSQL with Prisma, and MongoDB.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-medium text-gray-700">Beyond code: </span>
                  Football and badminton enthusiast. Native Vietnamese speaker 
                  (basic Japanese/limited working proficiency in English).
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3 flex justify-center">
              <div className="writing-mode-vertical-rl text-vertical h-[280px] flex items-center justify-center">
                <div className="inline-block p-4 bg-stone-50 border border-stone-300 shadow-sm rounded-lg">
                  <span className="text-xl text-gray-500 font-shodo">和洋折衷</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 space-y-8">
              <h2 className="text-xl md:text-2xl font-light text-gray-900 leading-relaxed">
                Fullstack developer embracing the spirit of Ichigo Ichie
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Leveraging Vue/Nuxt and Next.js, I build applications with a &quot;right tool for the right job&quot; philosophy.
                  Specializing in backend architecture with Node.js, PHP, PostgreSQL (Prisma), and MongoDB.
                </p>
                <p className="text-lg leading-relaxed">
                  <span className="font-medium text-gray-700">Beyond development:</span>
                  Football and badminton enthusiast. Native Vietnamese speaker
                  (basic Japanese/limited working proficiency in English).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;