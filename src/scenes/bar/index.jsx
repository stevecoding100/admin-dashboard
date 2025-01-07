import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
    return (
        <Box
            sx={{
                margin: { xs: "10px", md: "20px" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Header title="Bar Chart" subtitle="Simple Bar Chart" />
            <Box
                sx={{
                    height: { xs: "50vh", md: "75vh" },
                    width: { xs: "100%", md: "50%" },
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
