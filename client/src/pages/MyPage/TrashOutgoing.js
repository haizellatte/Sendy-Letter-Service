import React, { useState, useEffect, useCallback } from "react";
import * as M from "./TrashStyled";
import * as W from "../WriteLetter/WriteStyled";
import Modal from "../commons/Modal";
import { TrashOutItem } from "./TrashItem";
import { AiOutlineCheck } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";
import Refresh from "../../util/Refresh";

function TrashOutgoing({ openModal, setOpenModal, modalRef }) {
  const [getData, setGetData] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();
  const [select, setSelect] = useState([]);

  const getLetters = useCallback(async () => {
    await axios({
      method: "get",
      url: `/api/sendy/mailbox/dustbin/outgoing?page=${page}`,
      headers: {
        "ngrok-skip-browser-warning": "230328",
        Authorization: getCookie("accesstoken"),
      },
    })
      .then((res) => setGetData(getData.concat(res.data.data)))
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => getLetters());
        }
      });
  }, [page]);

  // console.log(getData);

  useEffect(() => {
    setIsLoading(true);
    getLetters();
    setIsLoading(false);
  }, [page]);

  useEffect(() => {
    if (inView && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setPage((prev) => prev + 1);
        setIsLoading(false);
        // console.log("무한 스크롤 요청🥲");
      }, 1500);
    }
  }, [inView]);

  const handleDelete = () => {
    axios({
      method: "delete",
      url: `/api/sendy/mailbox/dustbin/outgoing/delete`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accesstoken"),
      },
      data: { ids: select },
    })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleDelete());
        }
      });
  };

  // console.log(select)

  const handleRestore = () => {
    axios({
      method: "patch",
      url: `/api/sendy/mailbox/dustbin/outgoing/restore`,
      headers: {
        "ngrok-skip-browser-warning": "230327",
        Authorization: getCookie("accesstoken"),
      },
      data: { ids: select },
    })
      .then(() => window.location.reload())
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => handleRestore());
        }
      });
  };

  return (
    <>
      {openModal ? <W.ExplainationBackground /> : <></>}
      {openModal && (
        <Modal ContainerHeight="280px" ContainerWidth="300px">
          <M.ModalBox ref={modalRef}>
            <img src={require("../../asset/Sad.png")} alt="" />
            <M.ModalText>삭제하면 다시는 편지를 보지 못해요</M.ModalText>
            <M.ButtonBox>
              <M.ModalButton onClick={() => setOpenModal(!openModal)}>
                취소
              </M.ModalButton>
              <M.ModalButton onClick={handleDelete}>잘 가</M.ModalButton>
            </M.ButtonBox>
          </M.ModalBox>
        </Modal>
      )}
      <M.TrashContainer>
        <M.TextBox>
          <M.Title>발신</M.Title>
          <M.Warning>30일 뒤에 영구 삭제 됩니다.</M.Warning>
        </M.TextBox>
        <M.TrashTable>
          <M.TrashTableMenu>
            <M.CheckBox
              className="select-all"
              onClick={() => setAllChecked(!allChecked)}
            >
              {allChecked ? <AiOutlineCheck /> : false}
            </M.CheckBox>
            <M.ButtonBox>
              <M.Button onClick={handleRestore}>복구</M.Button>
              <M.Button
                onClick={() => {
                  setOpenModal(!openModal);
                }}
              >
                영구 삭제
              </M.Button>
            </M.ButtonBox>
          </M.TrashTableMenu>
          {getData.map((trash) => {
            return (
              <TrashOutItem
                key={trash.outgoingId}
                trash={trash}
                select={select}
                setSelect={setSelect}
                allChecked={allChecked}
              />
            );
          })}
        </M.TrashTable>
      </M.TrashContainer>
      <M.TargetBox ref={ref}>{isLoading && "Loading..."}</M.TargetBox>
    </>
  );
}

export default TrashOutgoing;
