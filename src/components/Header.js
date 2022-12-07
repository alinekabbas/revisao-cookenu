import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'

const Header = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        window.localStorage.removeItem("cookenu-token")
        goToLoginPage(navigate)
    }

  return (
    <Flex 
    h={20} 
    bg={"blue.100"} j
    justifyContent={"end"} 
    alignItems={"center"} 
    paddingRight={8}
    >
        <Button onClick={logout} colorScheme={"red"}>Deslogar</Button>
    </Flex>
  )
}

export default Header