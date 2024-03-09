import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";

function FAQ() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    //it will select one and close the other
  };
  const data = [
    {
      question: "What is BookMark ?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      question: "How can i request a new browser ?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      question: "is there a mobile app?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      question: "What about Chromium browsers?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center m-3 py-4 px-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2
          className="font-bold my-3"
          style={{
            fontSize: "24px",
          }}
        >
          Frequently Asked Questions
        </h2>
        <h4 className="text-slate-400">
          Here are some of our FAQs. If you have any other questions <br />{" "}
          you’d like answered please feel free to email us.
        </h4>
      </div>
      <section className="mx-64 my-4 flex flex-col items-center justify-center">
        {data.map((item, i) => (
          <div className="p-2 m-3 mx-4 faq-container">
            <div
              className="title-faq m-2 flex items-center cursor-pointer justify-between"
              onClick={() => toggle(i)}
            >
              <h2 className="font-bold question-faq ">{item.question}</h2>
              {/* */}
              <span className="cursor-pointer text-xl">
                {selected === i ? (
                  <IoIosArrowUp
                    style={{
                      color: "red",
                    }}
                  />
                ) : (
                  <IoIosArrowDown
                    style={{
                      color: "blue",
                    }}
                  />
                )}
              </span>
            </div>
            <div
              className={`m-2 ${selected === i ? "content show" : "content"}`}
            >
              <h4 className="text-slate-400">{item.answer}</h4>
            </div>
          </div>
        ))}
      </section>
      <Button />
    </div>
  );
}

export default FAQ;
