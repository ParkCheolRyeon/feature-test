import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

import {
  useCSVReader,
  formatFileSize,
  useCSVDownloader,
} from "react-papaparse";

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const { CSVDownloader } = useCSVDownloader();

  const [datas, setDatas] = useState<string[]>();

  return (
    <Wrapper>
      <CSVDownloader
        filename={"수강생 목록"}
        data={datas}
        bom={true}
        download={true}
      >
        <Button
          variant="contained"
          sx={{
            width: "180px",
          }}
        >
          다운로드 하셈
        </Button>
      </CSVDownloader>
      <CSVReader
        onUploadAccepted={(results: any) => {
          console.log("---------------------------");
          console.log(results);
          setDatas(results?.data);

          console.log("---------------------------");
        }}
        onDragOver={(event: DragEvent) => {
          event.preventDefault();
        }}
        onDragLeave={(event: DragEvent) => {
          event.preventDefault();
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
          Remove,
        }: any) => (
          <BoxST>
            <FileUploadArea {...getRootProps()}>
              {acceptedFile ? (
                <File>
                  <Typography variant="caption">
                    사이즈 : {formatFileSize(acceptedFile.size)}
                  </Typography>
                  <Typography variant="caption">
                    파일명 : {acceptedFile.name}
                  </Typography>

                  <ProgressBar />
                  <DeleteBtn {...getRemoveFileProps()}>
                    <Remove color="red" />
                  </DeleteBtn>
                </File>
              ) : (
                <Typography variant="h5">
                  "클릭 or 드래그 앤 드롭 하셈"
                </Typography>
              )}
            </FileUploadArea>
          </BoxST>
        )}
      </CSVReader>
      {datas && (
        <TableContainerST>
          <Table sx={{ minWidth: 120 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>수강생 이름</TableCell>
                <TableCell align="right">성별</TableCell>
                <TableCell align="right">출생 년도</TableCell>
                <TableCell align="right">휴대폰 번호</TableCell>
                <TableCell align="right">마케팅 활용 정보 동의</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas?.map((row: any, index) => (
                <TableRow
                  key={`${row.name} , ${index}`}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell align="right">{row[1]}</TableCell>
                  <TableCell align="right">{row[2]}</TableCell>
                  <TableCell align="right">0{row[3]}</TableCell>
                  <TableCell align="right">{row[4]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerST>
      )}
    </Wrapper>
  );
}

const File = styled(Box)(() => {
  return {
    zIndex: 10,
    height: 120,
    display: "flex",
    borderRadius: "8px",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#eee",
  };
});

const DeleteBtn = styled(Box)(() => {
  return {
    top: 6,
    right: 6,
    width: 23,
    height: 23,
    position: "absolute",
    borderRadius: "100%",
    backgroundColor: "red",
  };
});

const FileUploadArea = styled(Box)(() => {
  return {
    width: "100%",
    cursor: "pointer",
    maxWidth: "420px",
    textAlign: "center",
    padding: "20px 0px",
    borderRadius: "20px",
    border: "5px dotted #9e9e9e",
  };
});

const BoxST = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    padding: "40px 24px",
    justifyContent: "center",
  };
});

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    padding: "40px 24px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const TableContainerST = styled(TableContainer)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    padding: "40px 24px",
    borderRadius: "24px",
    justifyContent: "center",
    border: "1px solid green",
  };
});
