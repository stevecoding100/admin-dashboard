import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box
                height="75vh"
                sx={{
                    height: { xs: "40vh", sm: "60vh", md: "75vh" },
                    width: { xs: "500px", md: "50%" },
                }}
            >
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;
