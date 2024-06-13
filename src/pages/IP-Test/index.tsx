
import { request } from "@umijs/max";
import { useRequest } from "@umijs/max";
import {  useState } from "react";

function App() {
    const [ip, setIP] = useState('');
    const [locatoin,setLocation]=useState('');
    const { data, error, loading } = useRequest(async () => {
        const ip_response= await request('https://api.ipify.org?format=json');
        const location_response= await request('/api/api/ipinfo?ip='+ip_response.ip);
        setIP(ip_response.ip)
        const region=location_response.region;
        setLocation(region)
        return location_response.data;
    });
    return (
        <div className="App">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {ip && <p>Your IP address is: {ip}</p>}
            {locatoin && <p>Your address is: {locatoin}</p>}
        </div>
    );
}

export default App;