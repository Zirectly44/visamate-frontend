"use client";
import React from "react";
import { data } from "./data";
import s from "./faqs.module.css";
import { Accordion } from "./Accordion";

export default function FAQs() {
  return (
    <div style={{ width: "100%" }}>
      <h3 className={s.mainTitle}>Frequently Asked Questions</h3>
      {data.map((section, index) => (
        <Accordion key={index} myKey={index} section={section} />
      ))}
    </div>
  );
}
