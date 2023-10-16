import React, {useCallback, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {width, height} from '../global';
import {jwtToken} from '../utils/metaData';
import {ClubInfo} from '../utils/commonInterface';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {ServerAxios as axios} from '../utils/restapi';
import {useFocusEffect} from '@react-navigation/native';

export function ChatMain({navigation}: any) {
  const [roomList, setRoomList] = useState<ClubInfo[]>([]);

  // useFocusEffect(() => {
  //   initialize();
  // }, []);

  useFocusEffect(
    useCallback(() => {
      initialize();
    }, []),
  );
  const initialize = async () => {
    const result = await axios
      .get('https://api.kiwes.org/api/v1/club/approval/my-club', {
        params: {cursor: 0},
        headers: {Authorization: jwtToken},
      })
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
    console.log(result.data);
    setRoomList(result.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        // translucent={true}
      />
      <View style={styles.header}>
        <Text style={styles.headerText}>CHAT</Text>
      </View>
      {roomList.length > 0 ? (
        <View style={styles.notificationContainer}>
          <Text style={styles.alert}>!</Text>
          <Text style={styles.notification}>
            지정된 모임 날짜 14일 후에는 채팅방이 자동으로 삭제됩니다
          </Text>
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/b71d/e6c6/1008645f3e774e6b2d61b042cd7cc973?Expires=1698019200&Signature=I8FydDj7BCqjYMJC56-l-7zjr7EuePuITOlzCLnecwXPdKCqfb-5iV~dei6HFyVkWCFeo3tx~lfAdgCrIxlXHqB4Iv2MGUtFqlyh4TZ4hm8NgDdOob2H4oi5Hbr5FFhqlo3EOTu3Ve4lDlqFJFx5Aq~efR-WipgKSL7XNSWcYTbsGG7mw~YjU~bOVZr-gKasyEcIz8aqJ1fkt~Nm3rmQfwQAI-LNsB6Qx8FKXamAMA0oOjkpdFhv4i4j-ZiPk~MGJ40TWAZPv-O~rMT0n9s1P2GFBH5MSl9NIFmQNXY0pE4lWolqVMaoK8YQO3-NT56PGR1~Ay5UAnm1Aef5MfJ1zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.chatroomContainerText}>채팅 내역이 없습니다</Text>
        </View>
      )}
      {roomList.map((club: ClubInfo) => {
        return (
          <View style={styles.chatList}>
            <TouchableOpacity
              style={styles.title}
              onPress={() => {
                navigation.navigate('ChatRoom', {clubId: club.clubId});
              }}>
              <Text style={styles.chatListText}>{club.title}</Text>
            </TouchableOpacity>
            <View style={styles.peopleCount}>
              <FontAwesomeIcon icon={faUser} size={25} color="black" />
              <Text style={styles.peopleCountText}>{club.currentPeople}</Text>
            </View>
          </View>
          // <View style={styles.chatList}>
          //   <TouchableOpacity
          //     onPress={() => {
          //       navigation.navigate('ChatRoom', {clubId: club.clubId});
          //       // navigation.push('ChatRoom');
          //     }}>
          //     <Text>
          //       {club.title}({club.currentPeople})
          //     </Text>
          //   </TouchableOpacity>
          // </View>
        );
      })}

      {/* <View style={styles.bottomNavigate}></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    marginTop: height * 14,
    marginLeft: 10,
    paddingTop: height * 10,
    paddingLeft: width * 10.5,
    height: height * 54,
  },
  headerText: {
    color: '#303030',
    fontFamily: 'Pretendard-Bold',
    fontSize: width * 24,
    // font-style: normal,
    fontWeight: '600',
  },
  chatroomContainer: {
    height: height * 620,
    // backgroundColor: '#58C047',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 620,
    // backgroundColor: '#58C047',
    borderBottomColor: '#C0C0C0',
    borderBottomWidth: 2,
  },
  notificationContainer: {
    flexDirection: 'row',
    marginTop: height * 16,
    marginBottom: height * 16,
    paddingTop: height * 6,
    paddingLeft: width * 15,
    height: height * 40,
    borderTopColor: '#C0C0C0',
    borderBottomColor: '#C0C0C0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  alert: {
    marginRight: width * 6,
    color: '#58C047',
    fontFamily: 'Pretendard-bold',
    fontSize: width * 17,
    fontWeight: '900',
  },
  notification: {
    color: '#58C047',
    fontFamily: 'Pretendard',
    fontSize: width * 13,
    // font-style: normal,
    fontWeight: '700',
  },
  image: {
    width: width * 133,
    height: height * 167,
  },
  chatroomContainerText: {
    color: '#303030',
    fontFamily: 'Pretendard-Bold',
    fontSize: width * 16,
    // font-style: normal,
    fontWeight: '700',
  },
  chatList: {
    padding: 20,
    flexDirection: 'row',
  },
  title: {
    width: width * 290,
  },
  chatListText: {
    marginRight: width * 6,
    color: '#303030',
    fontFamily: 'Pretendard-bold',
    fontSize: width * 16,
    fontWeight: '600',
  },
  peopleCount: {
    flexDirection: 'row',
  },
  peopleCountText: {
    marginLeft: 15,
    color: '#3DBE14',
    fontFamily: 'Pretendard-bold',
    fontSize: width * 16,
    fontWeight: '900',
  },
  bottomNavigate: {
    flexDirection: 'row',
    width: '100%',
    height: height * 64,
    paddingTop: height * 10,
    // justifyContent: 'space-around',
    // paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: '#0785F2',
  },
  contentContainer: {
    width: '100%',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabButton: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButtonText: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
});

export default ChatMain;
