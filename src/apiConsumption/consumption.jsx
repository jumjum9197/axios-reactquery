import axios from "axios";
import { useQuery } from '@tanstack/react-query'


const ApiConsumption = async() =>{
    return await (await (axios.get({ baseURL: "https://jsonplaceholder.typicode.com/todos/1" }))).data;

}

const {data, error, isLoading, isError} = useQuery({
    queryKey: 'https://jsonplaceholder.typicode.com/todos/1',
 queryFn: ApiConsumption
})

if(isError){
    return <p>Error:{error.message}</p>
}else
if(isLoading){
    return <p> loading.....</p>
}else
return (
    <ul>
      {data.map(data => (
        <li key={data.id}></li>
      ))}
    </ul>
  )
export default ApiConsumption;






import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});
import { useQuery } from '@tanstack/react-query'