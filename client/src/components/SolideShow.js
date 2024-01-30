import React from "react";
import CarouselSlider from "react-carousel-slider";

export default function SlideShow() {
  let data = [
    {
      id: "1",
      imgSrc:
        "https://www.samsungtunisie.tn/10522-large_default/samsung-galaxy-s24-ultra-prix-tunisie.jpg",
    },
    {
      id: "2",
      imgSrc: "https://m.media-amazon.com/images/I/61IEqIccCDL._AC_SX679_.jpg",
    },
    {
      id: "3",
      imgSrc:
        "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-11-2023-new/images/kv/Huawei-matepad-11-inch-2023-kv@2x.webp",
    },
    {
      id: "4",
      imgSrc:
        "https://dji-official-fe.djicdn.com/dps/9b0fbb241041f73b4853f8f5c3eb8b59.jpg",
    },
    {
      id: "5",
      imgSrc:
        "https://skymil-informatique.com/15807-large_default/spirit-of-gamer-pro-mk5.jpg",
    },
    {
      id: "6",
      imgSrc:
        "data:image/jpeg;base64,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",
    },
    {
      id: "7",
      imgSrc:
        "https://skymil-informatique.com/22809-large_default/intel-core-i9-13900k.jpg",
    },
  ];

  let manner = {
    autoSliding: { interval: "2s" },
  };
  let buttonSetting = {
    placeOn: "bottom-beneath",
    //hoverEvent: true,
    style: {
      left: {
        margin: "0px 0px 0px 10px",
      },
      right: {
        margin: "0px 10px 0px 0px",
      },
    },
  };
  let itemsStyle = {
    margin: "0px 0px",
    padding: "0px",
  };
  return (
    <div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        itemsStyle={itemsStyle}
      />
    </div>
  );
}
