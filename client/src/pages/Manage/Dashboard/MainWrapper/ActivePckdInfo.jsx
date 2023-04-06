import React from "react";
import styled from "styled-components";
import {
  getCompanyLogoLinkFromURI,
  getHumanDateFromEpoch,
  getHumanTimeFromEpoch,
  getBackendURL,
} from "../../../../utils";
import toast from "react-hot-toast";
// import Icons
import NotFound from "../../../../assets/icons/not-found.svg";
import { ReactComponent as Globe } from "../../../../assets/icons/globe_color.svg";
import { ReactComponent as LinkUnPckd } from "../../../../assets/icons/linkunpckd.svg";
import { ReactComponent as Label } from "../../../../assets/icons/label.svg";
import { ReactComponent as Calendar } from "../../../../assets/icons/calendar.svg";
import { useState } from "react";

const DetailsWrapper = styled.div`
  position: relative;

  & p {
    margin: 0;
    font-weight: 500;
    font-size: 0.9em;
    line-height: 1.3em;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 1.3em;

    /* identical to box height */

    /* Text-Secondary */

    color: rgba(0, 0, 0, 0.6);
  }

  & .row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  & .row.top {
    justify-content: start;
    gap: 2%;
  }

  & .row.top img {
    height: 50px;
    margin-top: 5px;
  }

  & .row.top h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    margin: 0;
  }

  & a {
    color: inherit;
  }

  .link-copy button {
    right: 5vw;
    position: absolute;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) => props.theme.accentColor};
    color: white;
  }
`;

const ActivePckdInfo = ({ activePckd }) => {
  const [copyText, setCopyText] = useState("Copy");

  const getFullUrl = () => {
    return `${getBackendURL()}/${activePckd?.pckd || "error"}`;
  };

  return (
    <>
      {/* Info */}
      <div className="info">
        {/* Title */}
        <div className="title">
          <h3 className="sub-heading">View and Edit</h3>
          <h1 className="heading">Information</h1>
        </div>
        {/* Main content */}
        {/* Details */}
        <DetailsWrapper className="details">
          {/* Pckd Details */}
          <div className="detail">
            <h3 className="title">Details</h3>
            <div className="detail-content shadowed">
              <div className="row top">
                <div className="detail-content-item">
                  <h1 className="text">
                    <img
                      src={getCompanyLogoLinkFromURI(activePckd?.target)}
                      alt="Company Logo"
                      onError={(e) => {
                        e.target.src = NotFound;
                      }}
                    />
                  </h1>
                </div>
                <div className="detail-content-item">
                  <div className="header">
                    <Label className="icon" />
                    <span>Title</span>
                  </div>
                  <h1 className="text">{activePckd?.title || "Untitled"}</h1>
                </div>
                <div className="link-copy">
                  <button
                    onClick={() => {
                      try {
                        navigator.clipboard.writeText(getFullUrl());
                      } catch (err) {
                        toast.error("Unable to copy the text");
                      }

                      toast("Copied to clipboard!", { icon: "👍" });
                      setCopyText("👍");

                      setInterval(() => {
                        setCopyText("Copy");
                      }, 1000);
                    }}
                  >
                    {copyText}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="detail-content-item">
                  <div className="header">
                    <Globe className="icon" />
                    <span>Target</span>
                  </div>
                  <p className="text">{activePckd?.target}</p>
                </div>
                <div className="detail-content-item">
                  <div className="header">
                    <LinkUnPckd className="icon" />
                    <span>Pckd / Link</span>
                  </div>
                  <p
                    className="text"
                    onMouseOver={(e) => {
                      e.target.value = `${activePckd?.pckd}`;
                    }}
                  >
                    {activePckd?.pckd}
                  </p>
                </div>
                <div className="detail-content-item">
                  <div className="header">
                    <Calendar className="icon" />
                    <span>Created On</span>
                  </div>
                  <p className="text">
                    {getHumanDateFromEpoch(activePckd?.createdAt)} |{" "}
                    {getHumanTimeFromEpoch(activePckd?.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DetailsWrapper>
      </div>
    </>
  );
};

export default ActivePckdInfo;
