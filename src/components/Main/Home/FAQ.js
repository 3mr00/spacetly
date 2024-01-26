import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { FaPlus } from "react-icons/fa6";

const FAQ = () => {
  const FAQ = [
    {
      id: 1,
      title: "ما هي شركة سبيستلي؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 2,
      title:
        "ما هي أهمية استخدام أدوات الذكاء الاصطناعي في مجال إنشاء المحتوى؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 3,
      title: "هل توفر سبيستلي دورات تدريبية لاستخدام أدواتها؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 4,
      title:
        "كيف يمكن للشركات الاستفادة من استخدام أدوات سبيستلي في استراتيجيات التسويق الرقمي؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 5,
      title: "هل يمكنني تجربة أدوات سبيستلي قبل الاشتراك؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 6,
      title: "هل تقدم سبيستلي دعمًا فنيًا لعملائها؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 7,
      title: "هل تقدم سبيستلي خدمات مخصصة لمتطلبات الشركات الكبيرة؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
    {
      id: 8,
      title: "هل هناك تحديثات دورية لأدوات سبيستلي؟",
      dec: "مع SpaceChat، ستستفيد من أحدث التقنيات في مجال الذكاء الاصطناعي لتحسين تجربة المستخدم وزيادة جاذبية محتواك. سواء كنت تقوم بإنشاء مقالات، فيديوهات، أو محتوى تفاعلي، فإن SpaceChat يوفر لك الأدوات الضرورية لتحقيق أداء استثنائي.",
    },
  ];
  return (
    <section className="ar faq-section">
      <div className="container d-flex justify-content-center">
        <div className=" col-lg-9 col-12  parent">
          <div className="faq w-100">
            <span className="w-100">
              {FAQ &&
                FAQ.map((item, index) => (
                  <Accordion
                    key={index}
                    style={{
                      boxShadow: "none",
                      borderBottom: "1px solid #fff",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<FaPlus className=" text-white" />}
                      aria-controls={`${item.id}-content`}
                      id={`${item.id}-header`}
                      style={{
                        background: "#ed5ab3",
                        borderBottom: "1px soild #fff",
                      }}
                    >
                      <span className=" text-fs text-white d-flex align-items-center gap-2">
                        {item.title}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{
                        background: "#ed5ab3",
                        borderBottom: "1px soild #fff",
                      }}
                    >
                      <p className="  text-fs mt-lg-3 mt-3  ">{item.dec}</p>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
