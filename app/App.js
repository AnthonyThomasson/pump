import { HOST_IP } from "@env";
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);

  url = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === 'development') {
    url = `http://${HOST_IP}:8080`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const respString = await response.text(); // assuming the response is in JSON format

        setData(respString);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Fetching data from {url}</Text>
      {data && (
        <View style={styles.centeredContent}>
          <Text style={styles.subheader}>Received Data:</Text>
          <Text style={styles.dataText}>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignItems: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 5,
  },
  dataText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default App;