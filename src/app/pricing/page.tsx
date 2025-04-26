export default function SubscriptionPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#1f0b0b] to-[#1a1a1a] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-white">PERE</span>
            <span className="text-white font-extrabold">CUP</span>
          </h1>
          <p className="text-sm text-gray-300">
            Сервис для профессионалов автобизнеса
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              price: "250 грн",
              duration: "неделя",
              description:
                "подходит для тех кто занимается автободбором уведомления на telegram",
            },
            {
              price: "1200 грн",
              duration: "месяц",
              description: "подходит для перекупщиков уведомления на telegram",
            },
            {
              price: "3000 грн",
              duration: "3 месяца",
              description:
                "подходит для автоплощадок и перекупщиков уведомления на telegram",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white text-black p-6 rounded-[30px] text-center flex flex-col items-center justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">{item.price}</h2>
                <p className="text-lg text-red-700 font-semibold mb-4">
                  {item.duration}
                </p>
                <p className="text-sm mb-6 max-w-xs mx-auto leading-snug">
                  {item.description}
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#5e0b0b] to-[#1f0b0b] text-white px-6 py-2 rounded-full text-sm font-medium">
                Оплатить
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-300 text-sm">
          После оплаты пришлите почту или вайбер
        </p>
      </div>
    </main>
  );
}
