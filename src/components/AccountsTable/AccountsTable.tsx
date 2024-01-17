import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { data } from "../../@data/data";

export const AccountsTable = () => {
  return (
    <>
      <Text>Accounts Table</Text>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Email</Th>
              <Th>Auth Token</Th>
              <Th>Creation Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ accountId, email, authToken, creationDate }) => {
              return (
                <Tr key={accountId}>
                  <Td>{email}</Td>
                  <Td>{authToken}</Td>
                  <Td>{creationDate}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
