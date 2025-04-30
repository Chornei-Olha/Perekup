import Image from "next/image";

type Car = {
  title: string;
  price: string;
  link: string;
  image: string;
  source: string;
};

export default function CarsGrid({ cars }: { cars: Car[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-lg">
          <Image
            src={car.image}
            alt={car.title}
            width={300}
            height={200}
            className="object-cover rounded"
          />
          <h3 className="text-xl font-semibold mt-2">{car.title}</h3>
          <p className="text-red-700 font-bold">{car.price}</p>
          <a
            href={car.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-sm"
          >
            Перейти на {car.source}
          </a>
        </div>
      ))}
    </div>
  );
}
