import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

export const CampaignsTable = () => {
  const [filtered, setFiltered] = useState(null as null | Campaigns);

  const { accountId, profileId } = useParams();

  useEffect(() => {
    const newObj = data.find((item) => item.accountId === accountId)?.profiles;
    const profile = newObj?.find((item) => item.profileId === profileId);
    if (profile) {
      setFiltered(profile.campaigns);
    }
  }, [accountId, profileId]);

  return (
    <>
      <Text>Campaigns Table</Text>
      <TableContainer>
        <Table variant="simple" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Clicks</Th>
              <Th>Cost</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filtered?.map(({ campaignId, clicks, cost, date }) => {
              return (
                <Tr key={campaignId}>
                  <Td>{clicks}</Td>
                  <Td>{cost}</Td>
                  <Td>{date}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};
