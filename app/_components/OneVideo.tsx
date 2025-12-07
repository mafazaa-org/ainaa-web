const DATA = [
  {
    title: "85%",
    description: "من المراهقين معرضين للاباحية قبل سن 16 عامًا",
  },
  {
    title: "12",
    description: "متوسط ​​عمر التعرض الأول",
  },
  {
    title: "95%",
    description: "من التعرض غير مقصود",
  },
];

export default function OneVideo() {
  return (
    <div className="bg-slate-900 p-10 lg:p-20 text-slate-200">
      <div className="flex flex-col gap-10 mx-auto max-w-7xl">
        {/* Title and description */}
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="font-bold text-3xl lg:text-4xl">
            فيديو واحد اليوم،
            <span className="text-red-600">وإدمان مدى الحياة غدًا</span>
          </p>
          <p className="font-normal text-xl lg:text-2xl">
            يمكن أن يؤدي التعرض المبكر إلى عواقب وخيمة - والوقاية هي المفتاح
            لحماية مستقبل طفلك ورفاهته العقلية
          </p>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-16">
          {DATA.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between items-center gap-1 font-semibold lg:font-bold text-center"
            >
              <span className="text-red-600 text-3xl lg:text-4xl">
                {item.title}
              </span>
              <p className="text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
