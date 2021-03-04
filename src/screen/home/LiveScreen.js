import React from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {DataTable} from 'react-native-paper';
import {useSelector} from 'react-redux';

const itesmPerPage = 10;

const LiveScreen = () => {
  const [page, setPage] = React.useState(0);
  const from = page * itesmPerPage;
  const to = (page + 1) * itesmPerPage;
  const {
    Country,
    NewConfirmed,
    totalConfirmed,
    totalRecovered,
    totalDeaths,
  } = useSelector((state) => state.live);
  const items = [
    {
      key: 1,
      country: Country,
      NewConfirmed: NewConfirmed,
      totalConfirmed: totalConfirmed,
      totalRecovered: totalRecovered,
      totalDeaths: totalDeaths,
    },
  ];
  return (
    <DataTable>
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(items.length / itesmPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1} - ${to} of ${items.length}`}
      />
    </DataTable>
  );
};

export default LiveScreen;
