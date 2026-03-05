// Home.js
import React from 'react';
import { menuData } from './data';
import logo from './3am Farid.png'; // تأكد من وضع صورة اللوجو بنفس المجلد وتسميتها هكذا

const HomeScreen = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#F7E5CF] text-[#2B1A12] p-6 flex flex-col items-center">
      {/* اللوجو */}
      <img src={logo} alt="شعار مطعم العم فريد" className="w-48 h-48 mb-8 mt-10" />

      {/* نص ترحيبي */}
      <h1 className="text-3xl font-bold mb-4 text-[#9E4624]">أهلاً بكم في مطعم العم فريد</h1>
      <p className="text-lg mb-10 text-center">اختار القسم اللي تحبه واستمتع بأحلى طعم في 6 أكتوبر</p>

      {/* أزرار الأقسام */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {menuData.sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onNavigate(section.id)}
            className="bg-[#9E4624] text-[#F7E5CF] p-5 rounded-xl text-center text-lg font-bold shadow-md hover:bg-[#85391D] transition duration-300"
          >
            {section.name}
          </button>
        ))}
        {/* زر تواصل معنا */}
        <button
          onClick={() => onNavigate('contact')}
          className="col-span-2 bg-[#2B1A12] text-[#F7E5CF] p-5 rounded-xl text-center text-lg font-bold shadow-md hover:bg-[#1A100B] transition duration-300"
        >
          تواصل معنا
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
