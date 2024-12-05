import React from "react";
import SOne_index_bullet1 from "../Assets/SOne_index_bullet1.png";
import SOne_index_bullet2 from "../Assets/SOne_index_bullet2.png";
import SOne_index_pic3 from "../Assets/SOne_index_pic3.jpg";

interface NewsItemType {
  key: number;
  date: string;
  image: string;
  label: string;
}

const newsList = [
  {
    key: 1,
    date: "19 NOV 2014",
    image: SOne_index_pic3,
    label:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
  {
    key: 2,
    date: "19 NOV 2014",
    image: SOne_index_pic3,
    label:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
  {
    key: 3,
    date: "19 NOV 2014",
    image: SOne_index_pic3,
    label:
      "ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม",
  },
];

const DateCard = ({ date }: { date: string }) => {
  const [day, month, year] = date.split(" "); // Assuming the date is in "DD MMM YYYY" format

  return (
    <div className="absolute w-10 py-1 leading-3 text-center whitespace-pre-wrap bg-dark opacity-90 top-1 left-1">
      <p className="text-white text-10">{day}</p>
      <p className="text-white text-10">{month}</p>
      <p className="text-white text-10">{year}</p>
    </div>
  );
};

const NewsAndEvents = () => {
  return (
    <div className="flex flex-col border border-b-4 border-main">
      <div className="flex items-center justify-between px-2 border-b border-main">
        <p className="text-xl text-black font-supermarket">News & Events</p>
        <div className="flex gap-1">
          <img src={SOne_index_bullet1} alt="bullet" width={10} height={10} />
          <img src={SOne_index_bullet2} alt="bullet" width={10} height={10} />
          <img src={SOne_index_bullet2} alt="bullet" width={10} height={10} />
        </div>
      </div>
      <div className="flex gap-3 p-3">
        {newsList.map((newsItem: NewsItemType, index: number) => (
          <React.Fragment key={newsItem.key}>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <img
                  src={newsItem.image}
                  alt="newsImage"
                  className={`w-full relative border-b-4 
          ${index === 0 ? "border-main" : "border-black"}`}
                />
                <DateCard date={newsItem.date} />
              </div>
              <a className="text-xs hover:underline" href="#">
                {newsItem.label}
              </a>
            </div>
            {index < newsList.length - 1 && (
              <div className="h-32 border-l border-divider" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NewsAndEvents;
