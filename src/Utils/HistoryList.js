import React from "react";
import founder from "../icons/avatar1 2.png";

function HistoryList(props) {
  const list = [
    {
      photo: founder,
      text: "Dr. Ali Abas Wani migrates to Germany. Upon his arrival, he discovers that Germany does not offer high-quality halal products and sevices which are similar to Aldi, Lidl, Rewe etc. ",
      date: "June, 2011",
      year: "2011",
    },
    {
      photo: founder,
      text: "Our founders, Dr. Wani, Phillip Tomio, and Ferhat Balyeli, with more than 50 years of combined experience worked in their respective industries meeting at ESSEC & Mannheim Business Schools ",
      date: "September, 2019",
      year: "2019",
    },
    {
      photo: founder,
      text: "The seeds for Go Halal are planted. The three founders want to provide customers with Halal products online – an market with lots of potential to improves the lives of people. ",
      date: "Feberuary, 2020",
      year: "2020",
    },
    {
      photo: founder,
      date: "June, 2020",
      text: "Work is progressing. The idea of a Halal online supermarket is theorized, much to the excitement of the men behind the project.",
      year: "2020",
    },
    {
      photo: founder,
      date: "November, 2020",
      text: "The Go Halal team starts to grow. Scientists, marketing and sales, customer innovation experts form part of a rapidly growing company.",
      year: "2020",
    },
    {
      photo: founder,
      date: "June - October , 2021",
      text: "The Go Halal food safety and halal fraud prevention team is established team starts to grow. Halal traceability is developed to screen the food and halal fraud to ensure that the 100% halal products make it to our shelves",
      year: "2021",
    },
    {
      photo: founder,
      text: "Go Halal website is launched. At last, customers can access to prebook high quality halal meat online, alongside a range of chicken and plant-based products. Go Halal is the Amazon of Halal!",
      date: "January , 2022",
      year: "2022",
    },
    {
      photo: founder,
      text: "Go Halal website will start delivering products in the city of Munich in the holy month of June 2022!",
      date: "April, 2022 (Ramadhan 1443)",
      year: "2022",
    },
  ];

  return list;
}

export default HistoryList;
