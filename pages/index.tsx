import type { NextPage, GetServerSideProps } from "next";
import { Stack } from "@chakra-ui/react";
import CustomTable, { TableConfig } from "../components/CustomTable";

const config: TableConfig = {
  mappings: [
    {
      id: "name",
      name: "name",
      definitions: [
        {
          key: "firstname",
          name: "first name",
        },
        {
          key: "lastname",
          name: "last name",
        },
      ],
    },
    {
      id: "basic-information",
      name: "basic information",
      definitions: [
        {
          key: "sex",
          name: "sex",
        },
        {
          key: "birthday",
          name: "birth day",
        },
      ],
    },
    {
      id: "address",
      name: "address",
      definitions: [
        {
          key: "zipcode",
          name: "zipcode",
        },
        {
          key: "prefecture",
          name: "prefecture",
        },
        {
          key: "city",
          name: "city",
        },
      ],
    },
    {
      id: "contact",
      name: "contact",
      definitions: [
        {
          key: "tel",
          name: "tel",
        },
        {
          key: "mail",
          name: "e-mail",
        },
      ],
    },
  ],
};

interface Props {
  users: any;
}

const Home: NextPage<Props> = (props) => {
  const { users } = props;
  return (
    <Stack spacing={6}>
      <CustomTable config={config} data={users} />
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  console.log(users);
  return {
    props: {
      users,
    },
  };
};

export default Home;
