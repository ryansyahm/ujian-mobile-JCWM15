import React from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const FeedScreen = () => {
  const {feedList} = useSelector((state) => state.feed);
  return (
    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data={feedList}
      numColumns={1}
      renderItem={({item}) => {
        return (
          <View>
            {item.items.map((val) => {
              return (
                <>
                  <Text>{val.totalConfirmed}</Text>
                  <Text>{val.totalRecovered}</Text>
                  <Text>{val.totalDeaths}</Text>
                </>
              );
            })}
          </View>
        );
      }}
    />
  );
};

export default FeedScreen;
