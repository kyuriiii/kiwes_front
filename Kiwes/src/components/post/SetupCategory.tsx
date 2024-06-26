import React, {useState} from 'react';
import RoundCategory from '../atoms/roundCategory';
import {StyleSheet, View} from 'react-native';
import {height, width} from '../../global';
import Text from '@components/atoms/Text';
import {LANGUAGE, categoryList} from '../../utils/utils';
import {RootState} from '@/slice/RootReducer';
import {useSelector} from 'react-redux';

export default function SetupCategory({post, setPost}: any) {
  const [category, setCategory] = useState(post.category);
  const language = useSelector((state: RootState) => state.language);
  return (
    <>
      <View>
        <Text style={styles.text}>
          <Text style={styles.highlight}>*</Text>
          {language.language == LANGUAGE.KO
            ? ' 하나만 선택 가능'
            : ' You can choose only one'}
        </Text>
      </View>
      <View style={styles.container}>
        {categoryList.map(({key, text}, i) => (
          <RoundCategory
            id={key}
            key={`category_${i}`}
            text={text}
            isSelect={category === key}
            onPress={() => {
              setCategory(key);
              setPost({...post, category: key});
            }}
          />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: width * 15,
    gap: 5,
  },
  text: {
    marginLeft: width * 20,
    color: '#ADADAD',
  },
  highlight: {
    color: '#3DBE14',
    fontSize: height * 12,
    fontWeight: '600',
  },
});
