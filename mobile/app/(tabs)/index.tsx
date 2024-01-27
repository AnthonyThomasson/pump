import { Text, View } from '@/components/Themed'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

export default function TabOneScreen() {
  const [data, setData] = useState<string | null>(null)

  let url = String(process.env.REACT_APP_API_URL)
  if (process.env.NODE_ENV === 'development') {
    url = `http://10.0.0.110:8080`
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const respString = await response.text() // assuming the response is in JSON format

        setData(respString)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array means this useEffect runs once when the component mounts

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
  )
}

const styles = StyleSheet.create({
  centeredContent: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  dataText: {
    fontSize: 14,
    textAlign: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 5,
  },
})
