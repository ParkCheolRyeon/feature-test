import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useState, CSSProperties } from "react";

import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
  } as CSSProperties,
  file: {} as CSSProperties,
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  } as CSSProperties,
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  } as CSSProperties,
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  } as CSSProperties,
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  } as CSSProperties,
  zoneHover: {
    borderColor: GREY_DIM,
  } as CSSProperties,
  default: {
    borderColor: GREY,
  } as CSSProperties,
  remove: {} as CSSProperties,
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);

  const [datas, setDatas] = useState<string[]>();

  console.log(datas);

  return (
    <Wrapper>
      <CSVReader
        onUploadAccepted={(results: any) => {
          console.log("---------------------------");
          console.log(results);
          setDatas(results?.data);

          console.log("---------------------------");
          setZoneHover(false);
        }}
        onDragOver={(event: DragEvent) => {
          event.preventDefault();
          setZoneHover(true);
        }}
        onDragLeave={(event: DragEvent) => {
          event.preventDefault();
          setZoneHover(false);
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
                <TableCell>테이블 제목1</TableCell>
                <TableCell align="right">테이블 제목2</TableCell>
                <TableCell align="right">테이블 제목3</TableCell>
                <TableCell align="right">테이블 제목3</TableCell>
                <TableCell align="right">테이블 제목4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datas?.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row[0]}
                  </TableCell>
                  <TableCell align="right">{row[1]}</TableCell>
                  <TableCell align="right">{row[2]}</TableCell>
                  <TableCell align="right">{row[3]}</TableCell>
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
    justifyContent: "center",
    padding: "40px 24px",
  };
});

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
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
    justifyContent: "center",
    border: "1px solid green",
    borderRadius: "24px",
  };
});
