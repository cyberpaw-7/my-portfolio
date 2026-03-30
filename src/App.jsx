import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* 1. Header  */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex p-5 items-center">
          <div className="flex title-font font-medium items-center text-gray-900">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl font-bold tracking-tight text-slate-800 uppercase">Chen's Page</span>
          </div>
        </div>
      </header>

      {/* 2. 主視覺 */}
      <div className="w-full bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Hi, I'm Chen.</h1>
          <p className="text-xl md:text-2xl text-blue-100 font-light tracking-wide">NTU Electrical Engineering</p>
        </div>
      </div>

      {/* 3. 內容 */}
      <main className="max-w-3xl w-full mx-auto p-6 -mt-16 flex-grow">
        <section className="bg-white rounded-3xl shadow-2xl p-12 mb-12 border border-slate-100">
          
          {/* 使用 space-y-10 讓段落徹底拉開 */}
          <div className="space-y-10 text-lg md:text-xl text-slate-700 leading-relaxed">
            
            {/* 教育背景 */}
            <div className="flex items-start">
              <div className="w-1.5 h-8 bg-blue-600 rounded-full mr-5 mt-1 shadow-sm"></div>
              <p>
                I’m currently studying Electrical Engineering at NTU.
              </p>
            </div>
            
            {/* 興趣 */}
            <p className="pl-6">
              Technology has always fascinated me, especially <span className="italic">understanding how things work</span>.
            </p>

            {/* 旅遊引用 - 加上內縮與更大的圓角 */}
            <div className="mx-2 bg-blue-50/50 p-8 rounded-2xl border-l-8 border-blue-500 italic">
              <p className="text-blue-900 font-medium leading-loose">
                "I enjoy traveling. Exploring different cultures helps me relax and stay curious."
              </p>
            </div>

            {/* 結尾展望 */}
            <p className="pl-6 pt-4 text-slate-500">
              This course is a great chance to build useful skills for the future. 
              I’m really looking forward to meeting new people and learning new things.
            </p>
          </div>
        </section>

        {/* 底部狀態 */}
        <div className="flex justify-center gap-8 text-[11px] font-mono text-slate-400 uppercase tracking-[0.3em]">
          <span className="hover:text-blue-500 transition-colors cursor-default">SECURITY</span>
          <span>•</span>
          <span className="hover:text-blue-500 transition-colors cursor-default">LAB</span>
          <span>•</span>
          <span className="hover:text-blue-500 transition-colors cursor-default">NTU EE</span>
        </div>
      </main>

      {/* 4. Footer */}
      <footer className="py-12 text-center text-slate-400 text-xs mt-10 border-t border-slate-100">
        <p className="font-medium tracking-widest">&copy; CHEN | All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;