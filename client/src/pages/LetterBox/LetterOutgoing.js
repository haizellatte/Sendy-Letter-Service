import React, { useCallback, useEffect, useState } from "react";
import * as L from "./LetterBoxStyled";
import LetterOutItem from "./LetterOutItem";
import useStore from "../../store/store";
import { useInView } from "react-intersection-observer";
import { getCookie } from "../Certified/Cookie";
import axios from "axios";
import Refresh from "../../util/Refresh";

function LetterOutgoing({
  trash,
  isFocus,
  isSearchOut,
  selectId,
  setSelectId,
}) {
  const { outLetters, setOutLetters, filterOut, setFilterOut } = useStore();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ref, inView] = useInView();

  const getLetters = useCallback(async (page) => {
    return await axios({
      method: "get",
      url: `/api/sendy/mailbox/messages/out?page=${page}`,
      headers: {
        "ngrok-skip-browser-warning": "230328",
        Authorization: getCookie("accesstoken"),
      },
    })
      .then((res) => {
        setOutLetters(page === 1 ? res.data.data : [...outLetters, ...res.data.data]);
        setFilterOut(page === 1 ? res.data.data : [...outLetters, ...res.data.data]);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          Refresh().then(() => getLetters());
        }
      });
  }, [outLetters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // setIsLoading(true);
    getLetters(page);
    // setIsLoading(false);
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

  return (
    <L.ListContainer>
      <L.ListDateContainer>
        <L.ListDate>2023.03</L.ListDate>
        <L.ListBar></L.ListBar>
      </L.ListDateContainer>
      <L.ItemWrap>
        <L.ItemContainer>
          {isFocus ? (
            isSearchOut.length === 0 ? (
              <L.NotSearch>해당하는 편지를 찾을 수 없어요.</L.NotSearch>
            ) : (
              isSearchOut.map((letter) => {
                return (
                  <LetterOutItem
                    key={letter.outgoingId}
                    letter={letter}
                    trash={trash}
                  />
                );
              })
            )
          ) : (
            filterOut.map((letter) => {
              return (
                <LetterOutItem
                  key={letter.outgoingId}
                  letter={letter}
                  trash={trash}
                  selectId={selectId}
                  setSelectId={setSelectId}
                />
              );
            })
          )}
          <L.TargetBox ref={ref}>{isLoading && "Loading..."}</L.TargetBox>
        </L.ItemContainer>
      </L.ItemWrap>
    </L.ListContainer>
  );
}

export default LetterOutgoing;
