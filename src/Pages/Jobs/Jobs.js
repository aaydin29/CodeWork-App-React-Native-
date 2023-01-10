import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import JobsCard from '../../components/JobsCard/JobsCard';

const URL = 'https://www.themuse.com/api/public/jobs?page=1';

const Jobs = () => {
  const [jobList, setJobList] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await axios.get(URL);
    setLoading(false);
    setJobList(response.data.results);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderJobs = ({item}) => (
    <JobsCard
      name={item.name}
      company={item.company.name}
      locations={item.locations[0].name}
      levels={item.levels[0].name}
    />
  );
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" style={styles.activity_indicator} />
      ) : (
        <FlatList data={jobList} renderItem={renderJobs} />
      )}
    </View>
  );
};

export default Jobs;

const styles = StyleSheet.create({
  activity_indicator: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
})