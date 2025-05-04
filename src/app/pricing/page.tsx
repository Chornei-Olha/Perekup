import Header from "@/app/components/Header";

export default function SubscriptionPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#8B0000] to-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 mt-20">
          {[
            {
              price: "250 грн",
              duration: "неделя",
              description:
                "подходит для тех кто занимается автоподбором уведомления на telegram",
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
                <h2 className="text-[66px] font-bold mb-1 text-[#821810]">
                  {item.price}
                </h2>
                <p className="text-[48px] text-[#821810] font-light mb-4">
                  {item.duration}
                </p>
                <p className="text-[29px] text-[#1F0404] mb-6 max-w-xs mx-auto leading-snug">
                  {item.description}
                </p>
              </div>
              <button className="bg-gradient-to-r from-[#821810] to-[#000000] text-white px-6 py-2 rounded-[6px] text-[12px] font-medium w-[213px] h-[63px] cursor">
                Оплатить
              </button>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-left text-[#EFEFEF] text-[32px] font-light">
          После оплаты пришлите почту или вайбер
        </p>
      </div>
    </main>
  );
}
