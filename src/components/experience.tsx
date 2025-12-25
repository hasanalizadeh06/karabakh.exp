import React from "react";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const categories = [
  {
    title: "Macəra",
    items: [
      {
        img: "/exp7.jpg",
        title: "Atçılıq",
        subtitle: "",
        rating: 5.0,
        price: null,
      },
    ],
  },
  {
    title: "Könüllülük",
    items: [
      {
        img: "/exp6.jpg",
        title: "Ağac əkmək",
        subtitle: "Bazar",
        rating: 5.0,
        price: 4.99,
      },
      {
        img: "/exp5.jpg",
        title: "Pambıq yığımı",
        subtitle: "Hər gün",
        rating: 4.86,
        price: 6.99,
      },
    ],
  },
  {
    title: "Kulinariya",
    items: [
      {
        img: "/exp4.jpg",
        title: "Saxsı qab hazırlamaq",
        subtitle: "Hər gün",
        rating: 5.0,
        price: 20.0,
      },
      {
        img: "/exp3.jpg",
        title: "Yerli mətbəx dərsləri",
        subtitle: "Hər gün",
        rating: 5.0,
        price: 28.0,
      },
    ],
  },
  {
    title: "İncəsənət",
    items: [
      {
        img: "/exp2.jpg",
        title: "Bal toplamaq",
        subtitle: "Hər gün",
        rating: 5.0,
        price: 15.0,
      },
      {
        img: "/exp1.jpg",
        title: "İnək sağmaq",
        subtitle: "Hər gün",
        rating: 5.0,
        price: 8.0,
      },
    ],
  },
];


interface CardProps {
  img: string;
  title: string;
  subtitle: string;
  rating: number;
  price: number | null;
  large?: boolean;
}

const experienceSlugMap: Record<string, string> = {
  "Atçılıq": "horse-ridding",
  "Ağac əkmək": "tree-planting",
  "Pambıq yığımı": "cotton-picking",
  "Saxsı qab hazırlamaq": "pottery-making",
  "Yerli mətbəx dərsləri": "local-cuisine-classes",
  "Bal toplamaq": "honey-harvesting",
  "İnək sağmaq": "cow-milking",
};

function getExperienceSlug(title: string) {
  return experienceSlugMap[title] || title.toLowerCase().replace(/ /g, "-");
}

function Card({ img, title, subtitle, rating, price, large }: CardProps) {
  const slug = getExperienceSlug(title);
  const linkHref = `/experiences/${slug}`;
  if (large) {
    return (
      <Link href={linkHref} className="block w-full max-w-[420px] h-56 sm:h-72 bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col mb-4 border border-gray-100 mx-auto transition hover:shadow-lg hover:scale-[1.02]">
        <div className="relative w-full h-full">
          <img src={img} alt={title} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full bg-black/40 py-4 text-center">
            <span className="text-white text-3xl font-light">{title}</span>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <Link href={linkHref} className="min-w-[160px] max-w-[180px] bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col mr-4 border border-gray-100 transition hover:shadow-lg hover:scale-[1.03]">
      <div className="relative w-full h-28">
        <img src={img} alt={title} className="w-full h-full object-cover" />
        {title === "Atçılıq" ? (
          <div className="absolute bottom-0 left-0 w-full bg-black/40 py-2 text-center">
            <span className="text-white text-2xl font-light">{title}</span>
          </div>
        ) : null}
      </div>
      {title !== "Atçılıq" && (
        <div className="flex flex-col flex-1 px-3 py-2">
          <div className="flex items-center gap-1 mb-1">
            <AiFillStar className="text-yellow-500 text-base" />
            <span className="text-xs text-gray-700">({rating.toFixed(2)})</span>
          </div>
          <div className="text-[#5C7D41] text-base font-medium leading-tight">{title}</div>
          <div className="text-[#5C7D41] text-xs mb-2">{subtitle}</div>
          <div className="text-gray-800 text-base font-semibold mt-auto">{price ? price.toFixed(2) + " ₼" : ""}</div>
        </div>
      )}
    </Link>
  );
}

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-8 py-4">
      {categories.map((cat, i) => (
        <div key={i} className="w-full">
          <h2 className="text-[#5C7D41] text-2xl font-semibold mb-4 ml-1">{cat.title}</h2>
          {i === 0 ? (
            <Card {...cat.items[0]} large />
          ) : (
            <div className="flex overflow-x-auto pb-2 pl-1">
              {cat.items.map((item, idx) => (
                <Card key={idx} {...item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
