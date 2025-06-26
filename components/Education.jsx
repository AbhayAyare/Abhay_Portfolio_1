'use client';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech) in Electronics & Telecommunication',
      institution: 'KITs Collage Of Engineering Kolhapur',
      duration: '2021 - 2025',
    
    },
    {
      degree: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Dr.Tanajirao Chorge Junior College,Kolhapur',
      duration: '2019 - 2020',
    },
  ];

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-blue-50 to-white py-24 px-6 md:px-16 border-t border-blue-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Education</h2>
        <p className="text-lg text-gray-600 mb-16 text-center">
          My academic background and learning journey in science and engineering.
        </p>

        <div className="relative border-l-4 border-blue-400 pl-6 space-y-12">
          {education.map((edu, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-6 shadow-md border border-blue-100"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
              <p className="text-blue-600 font-medium">{edu.institution}</p>
              <p className="text-gray-600 text-sm">{edu.duration} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
