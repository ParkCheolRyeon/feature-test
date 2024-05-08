// "use client";

// import styled from "@emotion/styled";
// import Image from "next/image";
// import { ReactNode } from "react";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import RootStyleRegistry from "@/components/RootStyleRegistry";
// import TOAST_ERR from "@/images/toast-error.svg";
// import { up } from "@/theme/breakpoints";

// export default function ClientRootLayout({
//   children,
// }: {
//   children?: ReactNode;
// }) {
//   return (
//     <>
//       <CustomToast
//         limit={1}
//         hideProgressBar
//         autoClose={3000}
//         draggable={false}
//         closeButton={true}
//         position="top-center"
//         icon={<Image src={TOAST_ERR} alt="TOAST_ERR" width={24} height={24} />}
//       />
//       <RootStyleRegistry>{children}</RootStyleRegistry>
//     </>
//   );
// }

// const CustomToast = styled(ToastContainer)({
//   width: "100%",

//   "& .Toastify__toast-body": {
//     maxWidth: "312px",

//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",

//     [up("sm")]: {
//       maxWidth: "420px",
//     },
//   },

//   "&.Toastify__toast-container": {
//     top: "20px",
//     padding: "0px 12px",

//     [up("sm")]: {
//       maxWidth: "420px",
//     },
//   },

//   "& .Toastify__toast-icon": {
//     width: "24px",
//     height: "26px",

//     padding: 0,
//     margin: "0px 10px 0px 0px",
//   },

//   "& .Toastify__close-button--light": {
//     opacity: 0.8,
//     color: "#fff",
//   },

//   "& .Toastify__toast--success": {
//     color: "white",
//     fontWeight: 700,
//     fontSize: "14px",
//     lineHeight: "20px",
//     borderRadius: "12px",
//     padding: "12px 20px",
//     backgroundColor: "#4caf50",
//     fontFamily: "NanumSquareRound",

//     [up("sm")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//   },

//   "& .Toastify__toast--error": {
//     color: "white",
//     fontWeight: 700,
//     fontSize: "14px",
//     lineHeight: "20px",
//     borderRadius: "12px",
//     padding: "12px 20px",
//     backgroundColor: "#FA6561",
//     fontFamily: "NanumSquareRound",

//     [up("sm")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//   },

//   "& .Toastify__toast--warning": {
//     color: "white",
//     fontWeight: 700,
//     fontSize: "14px",
//     lineHeight: "20px",
//     borderRadius: "12px",
//     padding: "12px 20px",
//     backgroundColor: "#FF9800",
//     fontFamily: "NanumSquareRound",

//     [up("sm")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//   },

//   "& .Toastify__toast--info": {
//     color: "white",
//     fontWeight: 700,
//     fontSize: "14px",
//     lineHeight: "20px",
//     borderRadius: "12px",
//     padding: "12px 20px",
//     backgroundColor: "#24BEF0",
//     fontFamily: "NanumSquareRound",

//     [up("sm")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//   },

//   "& .Toastify__toast--default": {
//     color: "white",
//     fontWeight: 700,
//     fontSize: "14px",
//     lineHeight: "20px",
//     borderRadius: "12px",
//     padding: "12px 20px",
//     backgroundColor: "#424242",
//     fontFamily: "NanumSquareRound",

//     [up("sm")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//   },
// });
