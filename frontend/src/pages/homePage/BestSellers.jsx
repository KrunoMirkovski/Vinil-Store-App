import {useEffect, useState} from 'react'

const BestSellers = () => {
    const [vinyls, setVinyls] = useState([]);

    useEffect(() => {
        fetch("vinyls.json")
        .then(res => res.json()).then((data) => setVinyls(data))
    }, [])

    console.log(vinyls)

  return (
    <div>BestSellers</div>
  )
}

export default BestSellers