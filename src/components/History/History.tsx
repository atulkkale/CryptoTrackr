import { useQuery } from "@tanstack/react-query";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchMarkets } from "../../api/cryptoApi";
import { RootState } from "../../store/store";
import { updateLastFetchTime } from "../../store/cryptoSlice";
import { getCurrentTime } from "@utils/util";

const History: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterExchange, setFilterExchange] = useState<string>("");

  const dispatch = useDispatch();
  const selectedCrypto = useSelector(
    (state: RootState) => state.crypto.activeCrypto
  );

  const { data, isLoading, isError, fetchStatus } = useQuery({
    queryKey: ["markets", selectedCrypto],
    queryFn: () => fetchMarkets(selectedCrypto!),
    enabled: !!selectedCrypto,
  });

  useEffect(() => {
    if (fetchStatus === "fetching") {
      dispatch(updateLastFetchTime(getCurrentTime()));
    }
  }, [fetchStatus]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error loading data</Typography>;

  const filteredData = data?.filter((market) => {
    const matchesSearch =
      market.exchangeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.baseSymbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      market.quoteSymbol.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = filterExchange
      ? market.exchangeId === filterExchange
      : true;

    return matchesSearch && matchesFilter;
  });

  const uniqueExchanges = Array.from(
    new Set(data?.map((market) => market.exchangeId))
  );

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Typography variant="h5" gutterBottom sx={{ marginBottom: 4 }}>
        Crypto Markets
      </Typography>
      <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={filterExchange}
          onChange={(e) => setFilterExchange(e.target.value)}
          displayEmpty
          variant="outlined"
          fullWidth
        >
          <MenuItem value="">All Exchanges</MenuItem>
          {uniqueExchanges.map((exchange) => (
            <MenuItem key={exchange} value={exchange}>
              {exchange}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Exchange</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Base Symbol</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Quote Symbol</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                Price (USD)
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="right">
                24Hr Volume (USD)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData?.length ? (
              filteredData.map((market, index) => (
                <TableRow key={index}>
                  <TableCell>{market.exchangeId}</TableCell>
                  <TableCell>{market.baseSymbol}</TableCell>
                  <TableCell>{market.quoteSymbol}</TableCell>
                  <TableCell align="right">
                    ${parseFloat(market.priceUsd).toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    ${parseFloat(market.volumeUsd24Hr).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No results found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default History;
