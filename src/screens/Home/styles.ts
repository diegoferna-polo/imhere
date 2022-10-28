import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 36,
  },

  eventName: {
    fontSize: 26,
    fontWeight: "900",
  },

  eventData: {
    fontSize: 20,
    fontWeight: "100"
  },

  input: {
    backgroundColor: '#1F1E25',
    color: '#FFF',
    padding: 16,
    borderRadius: 5,
    flex: 1,
    fontSize:16,
    marginRight: 7
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 25
  },
  
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 42
  }
  
});
