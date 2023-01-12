import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  Button,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import styles from './JobsDetail.style';

const JobsDetail = ({route}) => {
  const {item} = route.params;

  const {width} = useWindowDimensions();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.jobs_info_container}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.location_container}>
            <Text style={styles.location_text}>Locations: </Text>
            <Text style={styles.location_text2}>{item.locations[0].name}</Text>
          </View>
          <View style={styles.level_container}>
            <Text style={styles.job_text}>Job Level: </Text>
            <Text style={styles.job_text2}>{item.levels[0].name}</Text>
          </View>
          <Text style={styles.bottom_header}>JOB DETAILS</Text>
        </View>
        <View style={styles.html_container}>
          <RenderHTML source={{html: item.contents}} contentWidth={width} />
        </View>
        <View style={styles.button_container}>
          <Button color="#e53935" title="Submit" />
          <Button color="#e53935" title="Add Favorities" />
        </View>
      </View>
    </ScrollView>
  );
};

export default JobsDetail;
