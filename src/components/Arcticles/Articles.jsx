import React, { useState } from 'react'
import styles from './../Arcticles/Arcticle.module.scss'

const Arcticle = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setPosts(data)

            console.log(data)

            setLoading(false)
        }
        fetchData()
    }, [])
    return ( 
        <div className={styles.wrapper}>
            <h1>Arcticle</h1>
            {loading && 'Загрузка...'}
            {posts.map(post => (
                <div className={styles.card}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                    <a href="/">Read now</a>
                </div>
            ))}
            
        </div> 
    );
}
 
export default Arcticle