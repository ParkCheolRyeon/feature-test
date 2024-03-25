import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  TextField,
  TextFieldProps,
  styled,
  useTheme,
} from "@mui/material";
import { BoxProps } from "@mui/system";
import dayjs from "dayjs";
import { ChangeEvent, useEffect, useState } from "react";

type IProps = TextFieldProps & {
  defaultText?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMsg?: string;
  success?: boolean;
  successMsg?: string;
  maxCount?: number;
  required?: boolean;
  timerTime?: number;
  timerStart?: boolean;
};
/**
 * example

<BBTextField
    defaultText="test"
    maxCount={10}
    helperText={"test"}
    successMsg="성공"
    success
    errorMsg="에러"
    error
    required
    label="라벨"
/>

*/
export default function BBTextField(props: IProps) {
  const {
    defaultText,
    label,
    helperText,
    error,
    errorMsg,
    success,
    successMsg,
    maxCount,
    required,
    onChange,
    timerTime,
    timerStart,

    ...prop
  } = props;
  const [textCount, setTextCount] = useState(0);
  const [text, setText] = useState(defaultText || "");
  const theme = useTheme();

  const renderBottom = () => {
    if (!error && !success && !helperText && !maxCount) {
      return;
    }

    const renderMsg = () => {
      if (error) {
        return <Box sx={{ color: theme.palette.error.main }}>{errorMsg}</Box>;
      }
      if (success) {
        return (
          <Box sx={{ color: theme.palette.success.main }}>{successMsg}</Box>
        );
      }
      if (helperText) {
        return <Box>{helperText}</Box>;
      }
    };

    const renderCounter = () => {
      if (maxCount) {
        if (error) {
          return (
            <BoxSTCount
              sx={{ color: theme.palette.error.main }}
            >{`${textCount} / ${maxCount}`}</BoxSTCount>
          );
        }

        if (success) {
          return (
            <BoxSTCount
              sx={{ color: theme.palette.success.main }}
            >{`${textCount} / ${maxCount}`}</BoxSTCount>
          );
        }

        return (
          <BoxSTCount
            sx={{ textWrap: "nowrap" }}
          >{`${textCount} / ${maxCount}`}</BoxSTCount>
        );
      }
    };

    return (
      <BoxSTBottom is_dual={(error || success || helperText)?.toString()}>
        {renderMsg()}
        {renderCounter()}
      </BoxSTBottom>
    );
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const textLength = value.length;
    if (maxCount && textLength > maxCount) {
      return;
    }
    setTextCount(textLength);
    setText(value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <Box>
      {label && (
        <BoxSTLabel>
          {label}
          {required && (
            <Box component="span" sx={{ color: theme.palette.error.main }}>
              *
            </Box>
          )}
        </BoxSTLabel>
      )}

      <TextField
        {...prop}
        sx={{
          ...props.sx,
          margin: "4px 0px",
          //   MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root
          "& .Mui-focused": {
            border: "none",
            outline: "none",
          },
        }}
        variant="outlined"
        value={text}
        InputProps={{
          style: {
            paddingRight: "12px",
            outline: "none",
            border: "none",
          },
          endAdornment: text.length > 0 && (
            <>
              <CancelIcon
                sx={{ fontSize: "24px" }}
                onClick={() => {
                  setText("");
                  setTextCount(0);
                }}
              />
            </>
          ),
        }}
        onChange={handleChange}
      />
      {renderBottom()}
    </Box>
  );
}

const BoxSTCount = styled(Box)(({ theme }) => {
  return {
    textWrap: "nowrap",
  };
});

const BoxSTBottom = styled(Box)<BoxProps & { is_dual?: string }>(
  ({ theme, is_dual }) => {
    const bool_dual = is_dual === "true";
    return {
      fontSize: "12px",
      margin: "0px 5px",
      display: "flex",
      justifyContent: bool_dual ? "space-between" : "flex-end",
      color: "#616161",
    };
  }
);

const BoxSTLabel = styled(Box)(({ theme }) => {
  return {
    fontSize: "14px",
    margin: "0px 4px",
    color: "#616161",
  };
});
