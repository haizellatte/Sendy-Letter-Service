import { create } from "zustand";

const useStore = create((set) => ({
  currentPage: null,
  changeCurrentPage: (page) => set((state) => ({ currentPage: page })),
  isLogin: false,
  setIsLogin: (loginState) => set((state) => ({ isLogin: loginState })),
  letterContents: {
    toName: null,
    fromName: null,
    content: null,
    password: null,
    urlName: null,
    fontName: "프리텐다드",
    themeName: null,
  },
  setLetterContents: (contents) =>
    set((state) => ({ letterContents: contents })),
  outLetters: [],
  setOutLetters: (outLetters) => set((state) => ({ outLetters })),
  inLetters: [],
  setInLetters: (inLetters) => set((state) => ({ inLetters })),
  isSend: false,
  setIsSend: (isSend) => set((state) => ({ isSend })),
  filterOut: [],
  setFilterOut: (filterOut) => set((state) => ({ filterOut })),
  filterIn: [],
  setFilterIn: (filterIn) => set((state) => ({ filterIn })),
  acessTokenExpire: false,
  setAcessTokenExpire: (token) => set((state) => ({ acessTokenExpire: token })),
  letterPassword: "",
  setLetterPassword: (password) =>
    set((state) => ({ letterPassword: password })),
  messageId: "",
  setMessageId: (messageId) => set((state) => ({ messageId: messageId })),
}));

export default useStore;
