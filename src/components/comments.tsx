import React from "react";
import { AiFillStar, AiOutlineLike, AiOutlineComment } from "react-icons/ai";

const comments = [
  {
    user: "Aysun Babayeva",
    avatar: "/be17eb407de2677ea565868ca0232e75607fd0f5.jpg",
    reviews: 6,
    date: "2 months ago",
    stars: 5,
    text: "Möhtəşəm idi! Atın nəcibliyi və o qızılı rəngi adamı valeh edir. Üstündə özünü çox güclü və azad hiss etdim. Heyvana o qədər qumarçı sözlə rədd edilmaz bir duyğudur. Mütləq yoxlayın!",
    likes: 5,
    replies: 0,
  },
  {
    user: "Əli Vəliyev",
    avatar: "/44532aa7e2bc08cd514c803f3cf7c47d5e7ad8e6.jpg",
    reviews: 23,
    date: "5 months ago",
    stars: 5,
    text: "Pataklara baxmaq, o an vızıltısını eşitmək maraqlı idi, amma bir az adrenalinli işdir. Adam hər tərpanişdə ehtiyat edir. Balı birbaşa patakdan yemək superdir, amma geyim bir az narahatdır.",
    likes: 17,
    replies: 1,
  },
  {
    user: "Selcan Babazadə",
    avatar: "/50c484820b6abd1f21f7a14a27f02d1f9b1db30c.jpg",
    reviews: 8,
    date: "3 months ago",
    stars: 5,
    text: "Konardan çox qoşəng görsənir, amma işin içində çıxanda çətindir. Gün vurur adamın başına, pambığın kolları da bir az sərtdir. Şəkil çəkdirmək üçün aladır, amma yığmaq mənlik deyilmiş.",
    likes: 3,
    replies: 3,
  },
];

export default function Comments() {
  return (
    <div className="w-full flex flex-col gap-6 py-4">
      {comments.map((c, i) => (
        <div key={i} className="flex gap-3 items-start bg-white rounded-2xl px-3 py-4 shadow-sm">
          <img src={c.avatar} alt={c.user} className="w-12 h-12 rounded-full object-cover mt-1" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900 text-base">{c.user}</span>
              <span className="text-xs text-gray-500">{c.reviews} reviews</span>
              <span className="text-xs text-gray-400">{c.date}</span>
            </div>
            <div className="flex items-center gap-1 mt-1 mb-1">
              {Array.from({ length: c.stars }).map((_, idx) => (
                <AiFillStar key={idx} className="text-yellow-400 text-base" />
              ))}
            </div>
            <div className="text-gray-800 text-sm mb-2 leading-snug">{c.text}</div>
            <div className="flex items-center gap-4 text-gray-500 text-xs">
              <span className="flex items-center gap-1"><AiOutlineComment className="text-lg" />{c.replies}</span>
              <span className="flex items-center gap-1"><AiOutlineLike className="text-lg" />{c.likes}</span>
            </div>
          </div>
        </div>
      ))}
      <button className="text-[#5C7D41] text-sm font-medium mt-2">More reviews</button>
    </div>
  );
}
