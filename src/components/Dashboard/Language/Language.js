import React, { useState } from "react";
import "./language.css";
import Sidebar from "../Sidebar/Sidebar";
import { HiMenuAlt3 } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";
import Avatar from "../../../assets/images/Avatar.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CgFileDocument } from "react-icons/cg";
import { FaCircleCheck } from "react-icons/fa6";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { TbDeviceIpadHorizontalSearch } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Language = () => {
  const [expend, setexpend] = useState(false);

  const modules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ align: [] }],

      [{ list: "ordered" }, { list: "bullet" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["link"],
      [{ color: [] }],
    ],
  };

  const { quillRef } = useQuill({ modules });

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header ar">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ar m-auto w-100">
              <form className="d-flex align-items-center gap-1 w-100  ">
                <button type="submit" className="btn ">
                  <LuSearch className="fs-4 primary" />
                </button>
                <input
                  type="text"
                  className="form-control h-75"
                  id="inputPassword2"
                  placeholder="ابحث"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header ar">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ar">
              <div className=" col-12 d-flex flex-column align-items-center justify-content-between  ">
                <div className=" w-100 mb-2 d-flex flex-column align-items-center ">
                  <button className="button_lang fs_auth mb-3">
                    <FaCircleCheck />
                    تصحيح
                  </button>
                  <span className="w-100">
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <span className=" primary d-flex align-items-center gap-2">
                          <FaCircleCheck className="primary" />
                          الأخطاء الاملائية{" "}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button size="small" variant="outlined" color="error">
                          إملائ
                        </Button>
                        <FaLongArrowAltLeft />
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          إملاء
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <span className=" primary d-flex align-items-center gap-2">
                          <FaCircleCheck className="color_pink" />
                          التدقيق النحوي{" "}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button size="small" variant="outlined" color="error">
                          إملائ
                        </Button>
                        <FaLongArrowAltLeft />
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          إملاء
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <span className=" primary d-flex align-items-center gap-2">
                          <FaCircleCheck className="yellow" />
                          الصياغة
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button size="small" variant="outlined" color="error">
                          إملائ
                        </Button>
                        <FaLongArrowAltLeft />
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          إملاء
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <span className=" primary d-flex align-items-center gap-2">
                          <FaCircleCheck className="green" />
                          المعجم{" "}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button size="small" variant="outlined" color="error">
                          إملائ
                        </Button>
                        <FaLongArrowAltLeft />
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          إملاء
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                      >
                        <span className=" primary d-flex align-items-center gap-2">
                          <FaCircleCheck className="dark_color" />
                          تصحيحات اخرى{" "}
                        </span>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Button size="small" variant="outlined" color="error">
                          إملائ
                        </Button>
                        <FaLongArrowAltLeft />
                        <Button
                          size="small"
                          variant="contained"
                          color="success"
                        >
                          إملاء
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className=" d-flex ar h-100">
        <Sidebar expend={expend} setexpend={setexpend} />
        <div className="ar col-xl-9 col-12 vh_85vh">
          <div className="shadow-sm d-flex justify-content-between  gap-2 p-3">
            <div className=" d-flex align-items-center  gap-2 w-75">
              <HiMenuAlt3
                className="color_pink fs-2 button_toggle "
                onClick={() => setexpend(!expend)}
              />
              <span className=" header_name fw-bold primary">
                مرحبًا بك في المدقق اللغوي
              </span>
            </div>
            <div className="d-flex justify-content-end align-items-center  gap-2 w-50">
              <LuSearch
                className="fs-4 primary d-lg-block d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />

              <div className="dropdown en">
                <button
                  className="btn dropdown-toggle font_en border-0 "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <LazyLoadImage
                    alt={"hi"}
                    effect="blur"
                    src={Avatar}
                    opacity="true"
                    placeholderSrc={Avatar}
                    className="me-2 "
                  />
                  Mostafa M.
                </button>
                <ul
                  className="dropdown-menu font_en"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a className="dropdown-item" href="#/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#/">
                      Something else here
                    </a>
                  </li>
                  <li>
                    <span className="dropdown-item" href="#/">
                      <LuSearch
                        className="fs-4 primary d-lg-none d-block"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* language */}
          <section className="w-100 h-100 d-flex flex-lg-row flex-column  mt-3">
            <div className="col-lg-9 col-12 mb-lg-0 mb-2">
              <p className=" primary d-flex gap-1 align-items-center pe-3">
                <CgFileDocument />
                مستند جديد
              </p>
              <div className="en  w-100  ">
                <div ref={quillRef} />
              </div>
            </div>

            <div className="col-12  d-flex d-lg-none flex-column align-items-center justify-content-between  ">
              <div className="w-100 mb-2 d-flex flex-column align-items-center ">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                  className="button_lang fs_auth  "
                >
                  <IoIosInformationCircleOutline />
                  تصحيح جميع الأخطاء
                </button>
              </div>
              <div className="w-100 d-flex flex-column align-items-center">
                <p className=" primary d-flex gap-1 align-items-center pe-3">
                  <TbDeviceIpadHorizontalSearch />
                  كاشف الاقتباسات{" "}
                </p>
                <p className="color_pink d-flex gap-1 align-items-center pe-3">
                  <IoIosInformationCircleOutline />
                  لاتوجد كلمات لتدقيقها{" "}
                </p>
                <span className="d-flex justify-content-between">
                  <p className="color_pink d-flex gap-1 align-items-center pe-3">
                    عدد الكلمات
                  </p>
                  <p className="color_pink d-flex gap-1 align-items-center pe-3">
                    <MdElectricBolt />
                    999
                  </p>
                </span>
              </div>
            </div>
            <div className=" col-lg-3 d-lg-flex d-none flex-column align-items-center justify-content-between  ">
              <div className="w-100 mb-2 d-flex flex-column align-items-center ">
                <button className="button_lang fs_auth mb-3">
                  <IoIosInformationCircleOutline />
                  تصحيح جميع الأخطاء
                </button>
                <span className="w-100">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <span className=" primary d-flex align-items-center gap-2">
                        <FaCircleCheck className="primary" />
                        الأخطاء الاملائية{" "}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button size="small" variant="outlined" color="error">
                        إملائ
                      </Button>
                      <FaLongArrowAltLeft />
                      <Button size="small" variant="contained" color="success">
                        إملاء
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <span className=" primary d-flex align-items-center gap-2">
                        <FaCircleCheck className="color_pink" />
                        التدقيق النحوي{" "}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button size="small" variant="outlined" color="error">
                        إملائ
                      </Button>
                      <FaLongArrowAltLeft />
                      <Button size="small" variant="contained" color="success">
                        إملاء
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <span className=" primary d-flex align-items-center gap-2">
                        <FaCircleCheck className="yellow" />
                        الصياغة
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button size="small" variant="outlined" color="error">
                        إملائ
                      </Button>
                      <FaLongArrowAltLeft />
                      <Button size="small" variant="contained" color="success">
                        إملاء
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <span className=" primary d-flex align-items-center gap-2">
                        <FaCircleCheck className="green" />
                        المعجم{" "}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button size="small" variant="outlined" color="error">
                        إملائ
                      </Button>
                      <FaLongArrowAltLeft />
                      <Button size="small" variant="contained" color="success">
                        إملاء
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2-content"
                      id="panel2-header"
                    >
                      <span className=" primary d-flex align-items-center gap-2">
                        <FaCircleCheck className="dark_color" />
                        تصحيحات اخرى{" "}
                      </span>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Button size="small" variant="outlined" color="error">
                        إملائ
                      </Button>
                      <FaLongArrowAltLeft />
                      <Button size="small" variant="contained" color="success">
                        إملاء
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </span>
              </div>
              <div className="w-100 d-flex flex-column align-items-center">
                <p className=" primary d-flex gap-1 align-items-center pe-3">
                  <TbDeviceIpadHorizontalSearch />
                  كاشف الاقتباسات{" "}
                </p>
                <p className="color_pink d-flex gap-1 align-items-center pe-3">
                  <IoIosInformationCircleOutline />
                  لاتوجد كلمات لتدقيقها{" "}
                </p>
                <span className="d-flex justify-content-between">
                  <p className="color_pink d-flex gap-1 align-items-center pe-3">
                    عدد الكلمات
                  </p>
                  <p className="color_pink d-flex gap-1 align-items-center pe-3">
                    <MdElectricBolt />
                    999
                  </p>
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Language;
