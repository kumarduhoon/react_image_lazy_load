import React, { useEffect } from 'react'
import { InView } from 'react-intersection-observer'
import axios from 'axios'

function Intersectionobserver() {
    const [images, setImages] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)

    async function getImage() {
        try {
            setIsLoading(true)
            let res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
            setImages(res.data)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw new error
        }
    }
    useEffect(() => {
        getImage()
    }, [])
    return (
        <div>
            {isLoading ? <div>Loading ....</div> :
                images.length > 0 && images.map((item) => (
                    <div key={item.id}>
                        <InView triggerOnce>
                            {({ ref, inView }) => (
                                <div ref={ref}>
                                    <img src={item.thumbnailUrl} />
                                </div>
                            )}
                        </InView>
                    </div>
                ))
            }
        </div>

    )
}

export default Intersectionobserver