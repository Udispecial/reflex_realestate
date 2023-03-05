import { AgentCardProp, InfoBarProps } from "interfaces/agent";
import { EmailOutlined, Place, LocationCity, Phone } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import { useGetIdentity } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

const InfoBar = ({ icon, name }: InfoBarProps) => (
  <Stack direction="row" flex={1} minWidth={{ xs: "100%", sm: 300 }} gap={1.5}>
    {icon}
    <Typography fontSize={14} color="#808191">
      {name}
    </Typography>
  </Stack>
);

const AgentCard = ({
  id,
  name,
  email,
  avatar,
  noOfProperties,
}: AgentCardProp) => {
  const { data: currentUser } = useGetIdentity();

  const generateLink = () => {
    if (currentUser.email === email) return "/my-profile";

    return `/agents/show/${id}`;
  };

  return (
    <Box
      component={Link}
      to={generateLink()}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "20px",
        padding: "20px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
        },
      }}
    >
      <img
        src={avatar}
        alt="agent avatar"
        width={90}
        height={90}
        style={{ borderRadius: "8px", objectFit: "cover" }}
      />
      <Stack
        direction="column"
        justifyContent="space-between"
        flex={1}
        gap={{ xs: 4, sm: 2 }}
      >
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          <Typography fontSize={22} fontWeight={600} color="#11142d">
            {name}
          </Typography>
          <Typography fontSize={14} color="#808191">
            Real-Estate Agent
          </Typography>
        </Stack>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
        >
          <InfoBar
            icon={<EmailOutlined sx={{ color: "#808191" }} />}
            name={email}
          />
          <InfoBar icon={<Place sx={{ color: "#808191" }} />} name="Abuja" />
          <InfoBar
            icon={<Phone sx={{ color: "#808191" }} />}
            name="08160017327"
          />
          <InfoBar
            icon={<LocationCity sx={{ color: "#808191" }} />}
            name={`${noOfProperties} Properties`}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
