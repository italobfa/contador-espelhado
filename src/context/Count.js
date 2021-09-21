import React, {createContext, useState, useContext} from 'react';

const CountContext = createContext()
//O provider vai ser usado para repassar as informacoes para todos os filhos
//O provider por ser um elemento react, faz com que seja possivel usar hooks dentro dele
export default function CountProvider({children}){
  const [count, setCount] = useState(0)
  return(
    <CountContext.Provider value={{count, setCount}} >
      {/*No value se passa o que os filhos podem enxergar */}
      {children}
    </CountContext.Provider>
  )
  
}
//Criando um hook personalizado
export function useCount(){
  const context = useContext(CountContext)
  const { count, setCount } = context
  return{ count, setCount}
}