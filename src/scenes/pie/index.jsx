import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box
                height="75vh"
                sx={{
                    height: { xs: "50vh", sm: "60vh", md: "75vh" },
                }}
            >
                <PieChart />
            </Box>
        </Box>
    );
};

export default Pie;
