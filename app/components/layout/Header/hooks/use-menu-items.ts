import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'

const fetchMenuItems = () => {
  return Axios.get('https://pysoftware.com/v1/menu_items')
}

const useMenuItems = () => {
  return useQuery({
    queryKey: ['menu-items'],
    queryFn: fetchMenuItems
  })
}

export default useMenuItems
