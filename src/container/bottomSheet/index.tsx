import { Box, Button } from "@mui/material";
import { ReactElement, useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";

export default function BottomSheetContainer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backdropFilter: open ? "blur(3px)" : "",
        background: open ? "var(--Color-Dim-Dim-60, rgba(0, 0, 0, 0.60))" : "",
      }}
    >
      <Button
        fullWidth
        sx={{ maxWidth: "180px" }}
        variant="outlined"
        onClick={() => setOpen(true)}
      >
        열기
      </Button>

      <BottomSheet open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
