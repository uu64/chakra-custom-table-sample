import { Table, Thead, Tbody, Tr, Th, Td, Stack } from "@chakra-ui/react";
import { ReactElement } from "react";
import AttrView from "./AttrView";

export interface TableConfig {
  mappings: TableMapping[];
}

export interface TableMapping {
  // Unique id of the attribute.
  id: string;
  // Name of the table column. This is used as label in table header.
  name: string;
  // Value definitions that is displayed in single cell.
  definitions: ValueDefinition[];
  // Whether the value is numeric or not.
  isNumeric?: boolean;
}

export interface ValueDefinition {
  // Key in the JSON.
  key: string;
  // Name of the the attribute. This is used as label in table header.
  name: string;
  // The string returned by this function is displayed after the value.
  suffix?: (record: Record) => string;
}

export interface Record {
  [key: string]: string;
}

interface Props {
  config: TableConfig;
  data: Record[];
}

function renderHeader(mappings: TableMapping[]): ReactElement {
  const headers = mappings.map((m) => (
    <Th key={m.id} isNumeric={m.isNumeric}>
      {m.name}
    </Th>
  ));
  return <Tr>{headers}</Tr>;
}

function renderRows(mappings: TableMapping[], data: Record[]): ReactElement[] {
  const rows: ReactElement[] = [];
  for (const r of data) {
    const cols: ReactElement[] = [];
    for (const m of mappings) {
      const attrs: ReactElement[] = [];
      for (const d of m.definitions) {
        attrs.push(<AttrView key={d.key} label={d.name} value={r[d.key]} />);
      }
      cols.push(
        <Td key={m.id}>
          <Stack>{attrs}</Stack>
        </Td>
      );
    }
    rows.push(<Tr>{cols}</Tr>);
  }

  return rows;
}

const CustomTable: React.FC<Props> = (props) => {
  const { config, data } = props;

  return (
    <Table variant="simple">
      <Thead>{renderHeader(config.mappings)}</Thead>
      <Tbody>{renderRows(config.mappings, data)}</Tbody>
    </Table>
  );
};

export default CustomTable;
