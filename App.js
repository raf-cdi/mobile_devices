import { StatusBar } from 'expo-status-bar';
import { useState, createContext, useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <Text>Tema: {theme}</Text>
      <Button onPress={toggleTheme} title='Alterar tema'/>
    </div>
  );
};

const Counter = () =>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <Text>Valor: {count}</Text>
      <Button onPress={()=>setCount(count+1)} title='Incrementar'/>
    </div>
  );
}

const ButtonCallback = () =>{
  return (
    <div>
      <Button onPress={() => console.log('Botão clicado!')} title='Press'></Button>
    </div>
  )
}

const StateController = () =>{
  const [inputValue, setValue] = useState('');
  const changeText = (e)=>{
    setValue(e.target.value);
  }
  return(
    <div>
      <p>{inputValue}</p>
      <br/>
      <input value={inputValue} onChange={changeText} placeholder="escreva..."></input>
    </div>
  )
}


export default function App() {
  
  return (

    <View style={styles.container}>
      <ThemeProvider>
        <Counter/>
        <ThemeComponent/>
        <ButtonCallback/>
        <StateController/>
      </ThemeProvider>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});