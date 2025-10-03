"use client";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import useSearchQuery from "./hooks/useSearchQuery";
import { SearchIco } from "@/icons";
import CertificationCard from "../../cards/CertificationCard";
import { SearchQueryScopeType } from "./types";
import Modal from "react-modal";
import { CloseCircleIco } from "@/icons";
import ProjectCard from "../../cards/ProjectCard";
const SearchQuery = ({
  elementId,
  data,
  scope,
  keywords,
  renderedElWithModal,
  onSelectedProject,
}: {
  data: any;
  scope: SearchQueryScopeType;
  keywords: string[];
  onSelectedProject: (id: number) => void;
  renderedElWithModal: {
    width: number | "auto";
    el: React.ComponentType<any>;
    props: any;
  };
  elementId?: string;
}) => {
  const { handleSearchQuery, filterData } = useSearchQuery(data, keywords);
  const selectScopeOptions = {
    certifications: CertificationCard,
    projects: ProjectCard,
  };
  const SelectedComponent = selectScopeOptions[scope];

  const [visibleModal, setVisibleModal] = useState(false);
  const [ContentModal, setContentModal] = useState<null | ReactNode>(null);
  const handleSelectContentModal = (
    Component: React.ComponentType<any>,
    props?: any
  ) => {
    setContentModal(<Component {...props} />);
  };

  useEffect(() => {
    handleSelectContentModal(renderedElWithModal.el, renderedElWithModal.props);
  }, [renderedElWithModal]);

  useEffect(() => {
    elementId && onSelectedProject(parseInt(elementId));
    setVisibleModal(true);
    handleSelectContentModal(renderedElWithModal.el, renderedElWithModal.props);
  }, [elementId]);

  useEffect(() => {
    !elementId && setVisibleModal(false);
  }, [elementId]);
  return (
    <div className="w-full min-h-[800px] flex justify-center mt-20 ">
      <div className="flex flex-col w-[1300px]">
        <div className="w-200 h-15 bg-gray-200 rounded-3xl flex items-center p-5 box-border mb-20 self-center">
          <input
            type="text"
            placeholder="Introduce tu busqueda"
            className="w-full h-15 outline-0"
            onChange={handleSearchQuery}
          />

          <SearchIco width={25} height={25} className={"text-gray-800"} />
        </div>
        {filterData && (
          <div className="section-results flex flex-wrap  justify-center lg:justify-start">
            <Modal
              isOpen={visibleModal}
              onRequestClose={() => setVisibleModal(false)}
              ariaHideApp={false}
              style={{
                overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
                content: {
                  width: renderedElWithModal.width,
                  margin: "auto",
                  borderRadius: "12px",
                  overflow: "hidden",
                },
              }}
            >
              {ContentModal && ContentModal}
              <div className="absolute right-0 top-0 object-cover text-gray-800 flex items-center justify-end p-7 cursor-pointer box-border  w-full h-30">
                <CloseCircleIco
                  width={50}
                  height={50}
                  onClick={() => setVisibleModal(false)}
                />
              </div>
            </Modal>
            {filterData.map((el: any, index: number) => (
              <div key={`${index}-key-data-searchquery`}>
                {el.ico && el.img && (
                  <>
                    <SelectedComponent
                      categories={el.categories}
                      ico={{ src: el.ico.src, alt: el.ico.alt }}
                      img={{ src: el.img.src, alt: el.img.alt }}
                      title={el.name}
                      description={el.description}
                      onClick={() => {
                        onSelectedProject(index);
                        setVisibleModal(true);
                        handleSelectContentModal(
                          renderedElWithModal.el,
                          renderedElWithModal.props
                        );
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchQuery;
