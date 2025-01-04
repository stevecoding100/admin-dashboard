import { Box, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    // Check if the screen size is small (mobile)
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <Box
            m={isMobile ? "10px" : "20px"}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box
                height={isMobile ? "50vh" : "75vh"}
                width={isMobile ? "100%" : "auto"}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <BarChart />
            </Box>
        </Box>
    );
};

export default Bar;
