import React, { useState } from 'react';
import { menuData } from './data';
import logo from './3am Farid.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // صفحة القسم (بتعرض الأصناف بناءً على اللي بتختاره)
  const SectionPage = ({ sectionId }) => {
    const section = menuData.sections.find(s => s.id === sectionId);
    return (
      <div dir="rtl" className="min-h-screen bg-[#F7E5CF] p-4 pb-20 font-sans">
        <button onClick={() => setCurrentPage('home')} className="bg-[#9E4624] text-white px-6 py-2 rounded-full mb-6 shadow-md">← رجوع للرئيسية</button>
        <h2 className="text-3xl font-bold text-[#9E4624] mb-6 border-b-4 border-[#9E4624] inline-block pb-2">{section.name}</h2>
        <div className="grid gap-4">
          {section.items.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border-r-8 border-[#9E4624]">
              <h3 className="font-bold text-xl text-[#2B1A12]">{item.name}</h3>
              {item.desc && <p className="text-gray-600 text-sm mt-1">{item.desc}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.prices ? (
                  <>
                    <span className="bg-[#F1DCC2] text-[#9E4624] px-3 py-1 rounded-lg font-bold">صغير: {item.prices.s}</span>
                    <span className="bg-[#F1DCC2] text-[#9E4624] px-3 py-1 rounded-lg font-bold">وسط: {item.prices.m}</span>
                    <span className="bg-[#F1DCC2] text-[#9E4624] px-3 py-1 rounded-lg font-bold">كبير: {item.prices.l}</span>
                  </>
                ) : (
                  <span className="bg-[#9E4624] text-white px-4 py-1 rounded-lg font-bold">السعر: {item.price} ج.م</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // صفحة تواصل معنا
  const ContactPage = () => (
    <div dir="rtl" className="min-h-screen bg-[#F7E5CF] p-6 text-center font-sans">
      <button onClick={() => setCurrentPage('home')} className="bg-[#9E4624] text-white px-6 py-2 rounded-full mb-10 shadow-md">← رجوع</button>
      <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-[#9E4624]">
        <h2 className="text-3xl font-bold text-[#9E4624] mb-6">📍 عنواننا</h2>
        <p className="text-lg mb-8 leading-relaxed">{menuData.contact.address}</p>
        <div className="space-y-4 mb-10">
          {menuData.contact.phones.map(p => <div key={p} className="text-2xl font-black text-[#2B1A12] tracking-wider">{p}</div>)}
        </div>
        <a 
          href={`https://wa.me/${menuData.contact.whatsapp}?text=السلام عليكم، حابب أطلب من مطعم العم فريد`}
          className="bg-[#25D366] text-white px-10 py-4 rounded-full text-xl font-bold shadow-green-200 shadow-2xl flex items-center justify-center gap-2"
        >
          📱 اطلب الآن (واتساب)
        </a>
      </div>
    </div>
  );

  return (
    <div dir="rtl">
      {currentPage === 'home' && (
        <div className="min-h-screen bg-[#F7E5CF] flex flex-col items-center p-6 font-sans">
          <img src={logo} className="w-48 h-48 mb-6 drop-shadow-2xl" alt="العم فريد" />
          <h1 className="text-4xl font-black text-[#9E4624] mb-2">مطعم العم فريد</h1>
          <p className="text-[#2B1A12] mb-10 opacity-80">أحلى فطاير وبيتزا في 6 أكتوبر</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            {menuData.sections.map(s => (
              <button 
                key={s.id} 
                onClick={() => setCurrentPage(s.id)} 
                className="bg-[#9E4624] text-white p-6 rounded-3xl font-bold text-xl shadow-lg active:scale-95 transition-all text-right flex justify-between items-center"
              >
                {s.name}
                <span className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center">←</span>
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')} 
              className="bg-[#2B1A12] text-[#F7E5CF] p-6 rounded-3xl font-bold text-xl shadow-lg mt-4"
            >
              📍 اطلب دلوقتي / تواصل معنا
            </button>
          </div>
        </div>
      )}
      {menuData.sections.some(s => s.id === currentPage) && <SectionPage sectionId={currentPage} />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}
