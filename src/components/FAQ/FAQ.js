import React from "react";
import "./FAQ.css";
import FAQicon from "../../icons/Group.svg";
import { getTranslation } from "../../Utils/getLanguage";
import FAQquestion from "../FAQquestion/FAQquestion";

function FAQ(props) {
  const [faqIon, setFaqIcon] = React.useState(window.innerWidth >= 1000);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1000) {
      setFaqIcon(true);
    } else {
      setFaqIcon(false);
    }
  });

  const questions = [
    {
      header: "What is Go Halal?",
      text: "Go Halal is a fresh approach to the halal grocery shopping. We offer 100% authentic halal for a delicious, nutritious, and hygienic experience. Our promise to you is outstanding customer experience, and our promise of Zakat means we give back to the poor with every purchase you make. Go Halal employs a unique traceability system that guarantees transparency, quality, and authenticity for every product on our shelves. We are Go Halal, the halal food company made for you.",
    },
    {
      header: "Are you an exclusive 100% halal shop?",
      text: "Yes, we pledge to be your 100% halal grocer. Since we were just recently founded, we are currently suppling 100% halal meat, milk, and animal products—but our our goal in the near future is to provide an entire supermarket's worth of 100% halal products.",
    },
    {
      header: "Is Go Halal a halal certified shop?",
      text: "Yes, and we couldn't be prouder! Go Halal is certified as a Trusted Halal Shop by Pro Halal Certification. We are honored to have this accreditation—this is the first time ever in retail store history! Go Halal is incredibly thankful to our Quality Assurance team and the Pro Halal team to incorporate the new traceability system in order to bestow complete transparency and prevent halal fraud.",
    },
    {
      header: "Do you have home delivery options?",
      text: "Yes! Since Go Halal is a brand new concept, we are currently operating 100% online and offering express delivery for Munich within the same day for just 1.95 Euros so long as the minimum purchase amount is met. Standard delivery is free within an average delivery time of 24 hours at a purchase order of 35 Euros. For better experience, Go Halal offers multiple delivery options for your convenience.",
    },
    {
      header: "What are standard shipping policies?",
      text: "Delivery is Monday to Saturday between 11:OO Hrs to 20:00 Hrs local time. If you are not hometo accept delivery, a delivery notification card with further details will be issued. In some cases, e,g. if you choose contact less delivery, the delivery may be left at your doorsetps. Please not for larger orders, may require your presence at the time of delivery.",
    },
    // {
    //   header: "How much time it takes to recieve the delivery?",
    //   text: "Go Halal is a fresh approach to the halal grocery shopping. We offer 100% authentic halal for a delicious, nutritious, and hygienic experience. Our promise to you is outstanding customer experience, and our promise of Zakat means we give back to the poor with every purchase you make. Go Halal employs a unique traceability system that guarantees transparency, quality, and authenticity for every product on our shelves. We are Go Halal, the halal food company made for you.",
    // },
    {
      header: "Why should we buy from Go Halal?",
      text: "At Go Halal, we believe in doing things the right way at every step of the way: we care about you and your family; we care about authenticity and transparency; and we care about the less fortunate by donating proceeds to the poor with every purchase that you make. Healthy food for a happier, healthier community. We care about giving back while giving you and your family exactly what you want, need, and deserve. We are Go Halal, your 100% trusted halal and a do good grocer.",
    },
    {
      header: "Are there any rewards and offers from Go Halal shopping?",
      text: "Sign up to our newsletter to receive promotions, special offers, and updates. We are also launching a Go Halal Family Card that allows you to get special offers and discounts on a subscription service—in addition to connecting with our community and receiving alerts about cherished festivities and special events",
    },
    {
      header: "What is Go halal affliate?",
      text: "Care about halal as much as we do? Want to earn money for our shared passion? With the Go Halal Affiliate program, you can help us build us reaching each new customer who shops at our store! for additioanl details, please read affliate page or contact us here.",
    },
    {
      header: "How can I become Go Halal supplier?",
      text: "We would love to do business with anyone who demands high quality food standards, sustainable relationships, and superb customer satisfaction. If you are committed to moving the wheel of our engine with our shared values of quality, authenticity, and halal, please send us your information on our Contact Us page.",
    },
  ];

  return (
    <div className="FAQ">
      <div className="FAQcontainer">
        <div className="FAQHeader">
          {faqIon && <img src={FAQicon} alt="" />}
          <span>{getTranslation("Frequently Asked Questions (FAQ)")}</span>
        </div>
        <span>
          {getTranslation(
            "Do you have questiions, please find the answers for frequently asked questions. You can also write to us if you are not able to find your question."
          )}
        </span>
        {questions.map((elem, index) => {
          return (
            <FAQquestion
              key={index}
              header={elem.header}
              text={elem.text}
              isDivider={index !== questions.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FAQ;
