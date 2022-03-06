import {
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

// TODO get barcode data from server
const getBarcode = async (code: string) => ({
  distance: 5000,
  from: "NY",
  to: "Europe",
  code,
});

export default function Index() {
  const [pack, setPackage] = useState<null | {
    code: string;
    distance: number;
    from: string;
    to: string;
  }>(null);
  const searchBarcode = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const response = await getBarcode((e.target as HTMLInputElement).value);
      setPackage(response);
    }
  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Stack spacing={2}>
        <TextField
          id="barcode"
          label="Barcode"
          variant="outlined"
          onKeyDown={searchBarcode}
        />
        {pack && (
          <Card variant="outlined">
            <CardHeader title={`#${pack.code}`} />
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {pack.distance} Miles
              </Typography>
              <Typography variant="body2">
                {pack.from} to {pack.to}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>
    </div>
  );
}
