import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
    Box,
    IconButton,
    Typography,
    useTheme,
    Drawer,
    useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
                background: "transparent",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
            component={<Link to={to} />}
        >
            <Typography
                sx={{
                    "&:hover": {
                        color: `${colors.greenAccent[600]} !important`,
                    },
                }}
            >
                {title}
            </Typography>
        </MenuItem>
    );
};

const ProSidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    const SidebarContent = (
        <Menu
            iconShape="square"
            style={{
                backgroundColor: colors.blueAccent[900],
            }}
        >
            <MenuItem
                onClick={() => {
                    if (isMobile)
                        setDrawerOpen(false); // Close the drawer on mobile
                    else setIsCollapsed(!isCollapsed); // Toggle collapse on desktop
                }}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                    margin: "10px 0 20px 0",
                }}
            >
                {!isCollapsed && !isMobile && (
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        ml="15px"
                    >
                        <Typography variant="h3" color={colors.grey[100]}>
                            ADMINIS
                        </Typography>
                        <IconButton
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        >
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                )}
            </MenuItem>

            {!isCollapsed && (
                <Box mb="25px">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <img
                            alt="profile-user"
                            width="100px"
                            height="100px"
                            src="/assets/user.png"
                            style={{
                                cursor: "pointer",
                                borderRadius: "50%",
                            }}
                        />
                    </Box>
                    <Box textAlign="center">
                        <Typography
                            variant="h2"
                            color={colors.grey[100]}
                            fontWeight="bold"
                            sx={{ m: "10px 0 0 0" }}
                        >
                            John Doe
                        </Typography>
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[400]}
                        >
                            CEO Admin
                        </Typography>
                    </Box>
                </Box>
            )}

            <Box
                paddingLeft={isCollapsed ? undefined : "10%"}
                backgroundColor={colors.blueAccent[900]}
            >
                <Item
                    title="Dashboard"
                    to="/"
                    icon={<HomeOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Data
                </Typography>
                <Item
                    title="Manage Team"
                    to="/team"
                    icon={<PeopleOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Contacts Information"
                    to="/contacts"
                    icon={<ContactsOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Invoices Balances"
                    to="/invoices"
                    icon={<ReceiptOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Pages
                </Typography>
                <Item
                    title="Profile Form"
                    to="/form"
                    icon={<PersonOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Calendar"
                    to="/calendar"
                    icon={<CalendarTodayOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="FAQ Page"
                    to="/faq"
                    icon={<HelpOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                >
                    Charts
                </Typography>
                <Item
                    title="Bar Chart"
                    to="/bar"
                    icon={<BarChartOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Pie Chart"
                    to="/pie"
                    icon={<PieChartOutlineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Line Chart"
                    to="/line"
                    icon={<TimelineOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Item
                    title="Geography Chart"
                    to="/geography"
                    icon={<MapOutlinedIcon />}
                    selected={selected}
                    setSelected={setSelected}
                />
            </Box>
        </Menu>
    );

    return (
        <>
            {isMobile ? (
                <>
                    <Box
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 1200,
                            padding: "10px",
                        }}
                    >
                        <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                    <Drawer
                        anchor="left"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        {SidebarContent}
                    </Drawer>
                </>
            ) : (
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                    }}
                >
                    <Sidebar
                        collapsed={isCollapsed}
                        backgroundColor={`${colors.primary[600]} !important`}
                    >
                        {SidebarContent}
                    </Sidebar>
                </Box>
            )}
        </>
    );
};

export default ProSidebar;
