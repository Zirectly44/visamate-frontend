import React from "react";
import useOpenController from "./useOpenController";
import s from "./faqs.module.css";
import ChevronDownIcon from "@/components/Icons/ChevronDownIcon";

interface Section {
  question: string;
  answer: string;
}

interface AccordionProps {
  section: Section;
  myKey: number;
}

interface ExpendableColumnProps {
  question: string;
  isOpen: boolean;
  toggle: () => void;
}

interface TextSectionProps {
  text: string;
}

export const Accordion: React.FC<AccordionProps> = ({ section, myKey }) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <div className={s.accordionContainer} key={myKey}>
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
    </div>
  );
};

export const ExpendableColumn: React.FC<ExpendableColumnProps> = ({
  question,
  isOpen,
  toggle,
}) => {
  return (
    <div className={s.columnContainer} onClick={toggle}>
      <div>{question}</div>
      <span>
        <ChevronDownIcon fill="#934FFF" />
      </span>
    </div>
  );
};

export const TextSection: React.FC<TextSectionProps> = ({ text }) => {
  return (
    <div className={s.textContainer}>
      <div>{text}</div>
    </div>
  );
};
