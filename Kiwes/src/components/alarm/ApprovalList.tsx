import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RESTAPIBuilder} from '../../utils/restapiBuilder';
import {apiServer} from '../../utils/metaData';
import {SafeAreaView} from 'react-native-safe-area-context';
import {width} from '../../global';
import Icon from 'react-native-vector-icons/Ionicons';

import BoardList from '../BoardList';
import ApprovalRequst from './ApprovalRequst';

const url = `${apiServer}/api/v1/club/approval/simple`;
const fetchData = async () => {
  try {
    const response = await new RESTAPIBuilder(url, 'GET')
      .setNeedToken(true)
      .build()
      .run();
    return response.data.waitings;
  } catch (err) {
    console.log(err);
  }
};

const fetchRequest = async () => {
  try {
    const response = await new RESTAPIBuilder(url, 'GET')
      .setNeedToken(true)
      .build()
      .run();
    return response.data.requests;
  } catch (err) {
    console.log(err);
  }
};

const ApprovalList = ({navigation}: any) => {
  const navigateToRequestList = (clubId: any) => {
    navigation.navigate('RequestList', {clubId: clubId});
  };
  const navigateToClub = (clubId: any) => {
    navigation.navigate('ClubPage', {clubId: clubId});
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>승인 요청</Text>
        <SafeAreaView style={{flex: 0.31}}>
          <ApprovalRequst
            fetchData={fetchRequest}
            navigateToRequestList={navigateToRequestList}
          />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.retriveContainer}
          onPress={() => {
            navigation.navigate('RequestList');
          }}>
          <Text style={styles.retrive}>내 모임 모두 보기</Text>
          <Icon
            name="chevron-forward-outline"
            size={18}
            color="#rgba(0, 0, 0, 1)"
          />
        </TouchableOpacity>
        <Text style={styles.title}>승인 대기</Text>
        <SafeAreaView style={{flex: 0.34}}>
          <BoardList fetchData={fetchData} navigateToClub={navigateToClub} />
        </SafeAreaView>
        <TouchableOpacity
          style={styles.retriveContainer}
          onPress={() => {
            navigation.navigate('WatingList');
          }}>
          <Text style={styles.retrive}>대기중인 모임 모두 보기</Text>
          <Icon
            name="chevron-forward-outline"
            size={18}
            color="#rgba(0, 0, 0, 1)"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Pretendard-Bold',
    fontSize: width * 18,
    flex: 0.06,
    marginLeft: 20,
    marginTop: 15,
  },
  ListContainer: {
    flex: 0.34,
  },
  retriveContainer: {
    flexDirection: 'row',
    flex: 0.1,
    marginLeft: 20,
    marginTop: 10,
  },
  retrive: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Pretendard-Bold',
    fontSize: width * 14,
  },
});

export default ApprovalList;