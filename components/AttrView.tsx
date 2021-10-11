import { Stack, Text } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
}

const AttrView: React.FC<Props> = (props) => {
  const { label, value } = props;
  return (
    <Stack>
      <Text fontWeight="bold">{label}</Text>
      <Text>{value}</Text>
    </Stack>
  );
};

export default AttrView;
