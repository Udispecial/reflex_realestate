import { useGetIdentity, useOne } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";
import { Profile } from "components";

const MyProfile = () => {
  const { data: user } = useGetIdentity();

  const { data, isLoading, isError } = useOne({
    resource: "users",
    id: user?.userId,
  });

  const myProfile = data?.data ?? [];

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error...</Typography>;

  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
