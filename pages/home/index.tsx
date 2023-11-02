import { useEffect, useState } from "react";
import { fetchVisas } from "../../api/cms/index";
import { AxiosError } from "axios";
import { Visa } from "../../interfaces"


const HomePage = ()=>{
    const [state, setState] = useState<'loading' | 'done' | null>(null);
    const [visas, setVisas] = useState<Visa | null>();
    useEffect(()=>{
        setState('loading');
        fetchVisas()
            .then((v) => setVisas(v))
            .then(() => setState('done'))
            .catch((e: Error | AxiosError) => console.log(e));
    },[])

    if (!visas || state === 'loading')
    return (
        <div className="flex h-screen w-full items-center justify-center bg-stone-900 text-white">
            Loading
        </div>
    );
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}
export default HomePage;