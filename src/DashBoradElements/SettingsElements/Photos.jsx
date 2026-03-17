import React from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

const Photos = () => {
  return (
    // Main Container: Slate-50 for light mode, Deep Blue for dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 p-6 md:p-10 transition-colors duration-300">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header>
          <h1 className="text-3xl font-black tracking-tight">My Photos</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Manage your profile and cover photos</p>
        </header>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          
          {/* Upload New Card: Dashed border with hover states */}
          <button className="aspect-square border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-50 dark:hover:bg-teal-500/5 transition-all group">
            <div className="p-3 bg-slate-100 dark:bg-slate-800/50 rounded-2xl group-hover:bg-teal-100 dark:group-hover:bg-teal-500/20 transition-colors">
              <FiPlus size={28} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Upload New</span>
          </button>

          {/* Photo Item Example */}
          <div className="relative aspect-square bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 group shadow-sm hover:shadow-xl transition-all">
             <img 
               src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" 
               alt="Gallery item" 
               className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" 
             />
             
             {/* Status Badge */}
             <div className="absolute top-4 left-4 bg-teal-600 dark:bg-teal-500 text-white dark:text-[#0b1120] text-[8px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-lg">
               Profile Picture
             </div>

             {/* Delete Button: Visible on hover */}
             <button className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all hover:scale-110 shadow-lg">
                <FiX size={16}/>
             </button>

             {/* Bottom Info Overlay */}
             <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <p className="text-[10px] font-black text-white/90 uppercase tracking-widest">Uploaded Mar 14</p>
             </div>
          </div>

          {/* Placeholder for more photos */}
          {[1, 2].map((i) => (
            <div key={i} className="aspect-square bg-slate-200 dark:bg-slate-800/20 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 flex items-center justify-center">
               <div className="w-12 h-1 bg-slate-300 dark:bg-slate-800 rounded-full" />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Photos;