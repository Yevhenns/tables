import { Link } from "react-router-dom";
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
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(({ accountId, email, authToken, creationDate }) => {
              return (
                <Tr key={accountId}>
                  <Td>{email}</Td>
                  <Td>{authToken}</Td>
                  <Td>{creationDate}</Td>
                  <Td>
                    <Link to={`/${accountId}`}>Check profiles</Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
