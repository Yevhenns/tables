import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

export const ProfilesTable = () => {
  const [filtered, setFiltered] = useState(null as null | Profiles);

  const { accountId } = useParams();

  useEffect(() => {
    if (accountId) {
      const newObj = data.find((item) => item.accountId === accountId);
      if (newObj) {
        setFiltered(newObj.profiles);
      }
    }
  }, [accountId]);

  return (
    <>
      <Text>Profiles Table</Text>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Marketplace</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filtered?.map(({ profileId, country, marketplace }) => {
              return (
                <Tr key={profileId}>
                  <Td>{country}</Td>
                  <Td>{marketplace}</Td>
                  <Td>
                    <Link to={`/${accountId}/${profileId}`}>
                      Check campaigns
                    </Link>
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
